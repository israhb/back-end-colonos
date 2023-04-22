import { Injectable,  HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateColonoDto } from './dto/create-colono.dto';
import { UpdateColonoDto } from './dto/update-colono.dto';
import { Colono } from './entities/colono.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FolioService } from 'src/folio/folio.service';
import { LevelService } from 'src/level/level.service';
import { ServiceGeneralService } from 'src/service-general/service-general/service-general.service';
import { LoginCountService } from 'src/login_count/login_count.service';
import { PermisosService } from 'src/permisos/permisos.service';
import { ModulosService } from 'src/modulos/modulos.service';

@Injectable()
export class ColonoService {

  createDtoColono: CreateColonoDto;
  updateColonoDto: UpdateColonoDto;

  constructor(
    @InjectRepository(Colono)  private colonoRepository: Repository<Colono>,
    private folioService: FolioService,
    private levelService: LevelService,
    private loginCount: LoginCountService,
    private permisosService: PermisosService,
    private modulosService: ModulosService,
    private serviceGeneralService: ServiceGeneralService
  ){}


  async create(createColonoDto: CreateColonoDto) {
    const folioFound = await this.folioService.findOne(createColonoDto.folio_id);
    if(folioFound.name == 'HttpException') {
      return new HttpException('Folio no Existe', HttpStatus.NOT_FOUND);
    }
    const levelFound = await this.levelService.findOne(createColonoDto.level_id);
    if(levelFound.name == 'HttpException') {
      return new HttpException('Nivel no Existe', HttpStatus.NOT_FOUND);
    }
    const colonoFound = await this.colonoRepository.findOne({ where: { telefono: createColonoDto.telefono } })
    if(colonoFound){
      if(colonoFound.activo === 0){
        colonoFound.activo = 1;
        const id  = colonoFound.id;
        this.colonoRepository.update({id}, colonoFound);
        return colonoFound;
      }
      return new HttpException('Colono ingresado ya existe en la base', HttpStatus.CONFLICT);
    }
    const newColono = this.colonoRepository.create(createColonoDto);
    return this.colonoRepository.save(newColono);
  }

  findAll() {
    return this.colonoRepository.find({
      where: {
        activo: 1
      },
      order:{
        id: "DESC"
      },
      relations:['folio', 'level']
    });
  }

  findAllTipoColonosLevel() {
    return this.colonoRepository.find({
      where: {
        activo: 1,
        level_id: 4
      },
      order:{
        id: "DESC"
      },
      relations:['folio', 'level']
    });
  }
  //cuando el colono actualiza sus datos por primera vez
  async registerColonoData(body: any){
    const folioFound = await this.folioService.findOne(body.folio_id);
    if(!folioFound){
      throw new NotFoundException('No se encontro Folio');
    }
    if(folioFound.nuevo == 1){
      const colonoFound = await this.colonoRepository.findOne({
        where:{
          folio_id: folioFound.id,
          password: body.password
        }
      });
      if(!colonoFound){
        throw new NotFoundException('No se encontro Colono');
      }
      if(colonoFound.registrado == "0"){
        this.updateColonoDto = {...body};
        return this.colonoRepository.update(body.id, this.updateColonoDto);
      }else if(colonoFound.registrado == "1"){
        throw new NotFoundException('Colono Ya fue registrado');  
      }
    }else{
      throw new NotFoundException('Folio aun no esta dado de alta');
    }
  }
  //registrar del lado del policia
  async registerColono(body: any){
    const folioFound = await this.folioService.findOne(body.folio_id);
    if(!folioFound){
      throw new NotFoundException('No se encontro Folio');
    }
    if(folioFound.nuevo == 0){
      folioFound.nuevo = 1;
      folioFound.mac = body.mac;
      folioFound.upload_date = this.serviceGeneralService.getDateNowAMD();
      folioFound.upload_time = this.serviceGeneralService.getHourNow();
      this.folioService.update(folioFound.id, folioFound);
      ///eliminar item mac para insertar colono
      const keys = Object.keys(body);
      const indexKeyToDelete = 0;
      delete body[keys[indexKeyToDelete]];
      this.createDtoColono = {...body};
      const newColono = this.colonoRepository.create(this.createDtoColono);
      return this.colonoRepository.save(newColono);
    }else{
      throw new NotFoundException('Folio ya registrado');
    }
  }

  async loginColono(folio_pass: any){
    ///verificar que el folio existe y sacar el folio para verificar id
    const folioFound = await this.folioService.findName(folio_pass.name);
    if(!folioFound){
      throw new NotFoundException('No se encontro Folio');
    }
    //una vez encontrado se verifica el estatus del colono
    const colonoFound = await this.colonoRepository.findOne({
      where:{
        folio_id: folioFound.id,
        password: folio_pass.password
      },
      relations:['folio', 'level']
    });
    if(!colonoFound){
      throw new NotFoundException('No se encontro Colono');
    }
    if(colonoFound.level_id == 1 || colonoFound.level_id == 2 || colonoFound.level_id == 3 ){
      /***************************** ENTRAN LOS DE NIVEL ADMIN PARA WEB Y APP ******************************************** */
      const permisosName: string[] = [];
      const modulosName: string[] = [];
      const arrayPermisos = await this.permisosService.findPermisosforLevel(colonoFound.level_id);
      const arrayModulos  = await this.modulosService.findModulosforLevel(colonoFound.level_id); 
      arrayPermisos.forEach(element => {
        permisosName.push(element.name);
      });
      arrayModulos.forEach(element => {
        modulosName.push(element.name);
      });
      const permisos = {
        actions: permisosName,
        modulos:modulosName
      };
      const colono = {
        colono: colonoFound,
        permisos
      }
      return colono;
    }else{
      if(colonoFound.level_id == 4){
        /***************************** ENTRAN LOS  APP ******************************************** */
        const countFolios = {
          name: folio_pass.name
        }
        const foundLoginCount = this.loginCount.findAllFolio(countFolios);
        if((await foundLoginCount).length < 5){
          //logica para login count
          const comparraFM = {
            name: folio_pass.name,
            mac: folio_pass.mac
          }
          const foundLogin = await this.loginCount.findAllFolioMac(comparraFM);
          //si no hay algun registro de login se inserta y logea
          if(!foundLogin){
            const crearFolioR = {
                folio: folio_pass.name,
                mac: folio_pass.mac,
                upload_date: this.serviceGeneralService.getDateNowAMD()
            };
            this.loginCount.create(crearFolioR);
            return colonoFound;
          }else{
            return colonoFound;
          }
        }else{
          //logica para login count
          const comparraFM = {
            name: folio_pass.name,
            mac: folio_pass.mac
          }
          const foundLogin = await this.loginCount.findAllFolioMac(comparraFM);
          //si no hay algun registro de login se inserta y logea
          if(!foundLogin){
            throw new NotFoundException('Se exedieron los usuarios por cuenta');
          }else{
            return colonoFound;
          }
        }
      }
    }
  }

  async findOne(id: number, externo?: boolean) {
    const colonoFound = await this.colonoRepository.findOne({
      where:{
        id
      },
      relations:['folio', 'level']
    });
    if(!colonoFound){
      if(externo) return false;
      return new HttpException('Colono no Existe', HttpStatus.NOT_FOUND);
    }
    return colonoFound;
  }

  async update(id: number, updateColonoDto: UpdateColonoDto) {
    const folioFound = await this.folioService.findOne(updateColonoDto.folio_id);
    if(folioFound.name == 'HttpException') {
      return new HttpException('Folio no Existe', HttpStatus.NOT_FOUND);
    }
    const levelFound = await this.levelService.findOne(updateColonoDto.level_id);
    if(levelFound.name == 'HttpException') {
      return new HttpException('Nivel no Existe', HttpStatus.NOT_FOUND);
    }
    const colonoFound = await this.colonoRepository.findOne({
      where: {
        id
      }
    });
    if(!colonoFound){
      return new HttpException('Colono no Existe', HttpStatus.NOT_FOUND);
    }
    return this.colonoRepository.update({id}, updateColonoDto);
  }

  async remove(id: number) {
    const colonoFound = await this.colonoRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!colonoFound){
      return new HttpException('Colono no Existe', HttpStatus.NOT_FOUND);
    }
    colonoFound.activo = 0;
    return this.colonoRepository.update({id}, colonoFound);
    // return this.colonoRepository.delete(id);
  }
}
