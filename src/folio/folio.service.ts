import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateFolioDto } from './dto/create-folio.dto';
import { UpdateFolioDto } from './dto/update-folio.dto';
import { Folio } from './entities/folio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstadoService } from 'src/estado/estado.service';
import { FraccionamientoService } from 'src/fraccionamiento/fraccionamiento.service';

@Injectable()
export class FolioService {

  constructor(
    @InjectRepository(Folio)  private folioRepository: Repository<Folio> ,
    private estadoService: EstadoService,
    private fraccionamientoService: FraccionamientoService
  ){}

  async create(createFolioDto: CreateFolioDto) {
    const estadoFound = await this.estadoService.findOne(createFolioDto.estado_id);
    if(estadoFound.name == 'HttpException') {
      return new HttpException('Estado no Existe', HttpStatus.NOT_FOUND);
    }
    const fraccionamientoFound = await this.fraccionamientoService.findOne(createFolioDto.frac_id);
    if(fraccionamientoFound.name == 'HttpException') {
      return new HttpException('Fraccionamiento no Existe', HttpStatus.NOT_FOUND);
    }
    const folioFound = await this.folioRepository.findOne({ where: { name: createFolioDto.name } })
    if(folioFound){
      if(folioFound.activo === 0){
        folioFound.activo = 1;
        const id  = folioFound.id;
        this.folioRepository.update({id}, folioFound);
        return folioFound;
      }
      return new HttpException('Folio ingresado ya existe en la base', HttpStatus.CONFLICT);
    }
    const newFolio = this.folioRepository.create(createFolioDto);
    return this.folioRepository.save(newFolio);
  }

  findAll() {
    return this.folioRepository.find({
      where:{
        activo: 1
      },
      relations:['estado', 'fraccionamiento']
    });
  }

  async findOne(id: number) {
    const folioFound = await this.folioRepository.findOne({
      where:{
        id
      },
      relations:['estado', 'fraccionamiento']
    });
    if(!folioFound){
      return new HttpException('Folio no Existe', HttpStatus.NOT_FOUND);
    }
    return folioFound;
  }

  async update(id: number, updateFolioDto: UpdateFolioDto) {
    const folioFound = await this.folioRepository.findOne({
      where: {
        id
      }
    });
    if(!folioFound){
      return new HttpException('Folio no Existe', HttpStatus.NOT_FOUND);
    }
    return this.folioRepository.update({id}, updateFolioDto);
  }

  async remove(id: number) {
    const folioFound = await this.folioRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!folioFound){
      return new HttpException('Folio no Existe', HttpStatus.NOT_FOUND);
    }
    folioFound.activo = 0;
    return this.folioRepository.update({id}, folioFound);
    // return this.estadoRepository.delete(id);
  }
}
