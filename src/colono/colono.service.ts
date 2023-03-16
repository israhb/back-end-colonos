import { Injectable,  HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateColonoDto } from './dto/create-colono.dto';
import { UpdateColonoDto } from './dto/update-colono.dto';
import { Colono } from './entities/colono.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FolioService } from 'src/folio/folio.service';
import { LevelService } from 'src/level/level.service';
import { ServiceGeneralService } from 'src/service-general/service-general/service-general.service';

@Injectable()
export class ColonoService {

  createDtoColono: CreateColonoDto;

  constructor(
    @InjectRepository(Colono)  private colonoRepository: Repository<Colono>,
    private folioService: FolioService,
    private levelService: LevelService,
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
      }
    });
  }

  async registerColono(body: any){
    const folioFound = await this.folioService.findOne(body.folio_id);
    if(!folioFound){
      throw new NotFoundException('No se encntro Folio');
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

  async findOne(id: number, externo?: boolean) {
    const colonoFound = await this.colonoRepository.findOne({
      where:{
        id
      }
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
