import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTipoNegocioDto } from './dto/create-tipo_negocio.dto';
import { UpdateTipoNegocioDto } from './dto/update-tipo_negocio.dto';
import { TipoNegocio } from './entities/tipo_negocio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TipoNegocioService {

  constructor(
    @InjectRepository(TipoNegocio) private tipoNegocioRepository: Repository<TipoNegocio> 
  ){}

  async create(createTipoNegocioDto: CreateTipoNegocioDto) {
    const tipoNegocioFound = await this.tipoNegocioRepository.findOne({
      where:{
        name: createTipoNegocioDto.name
      }
    });
    if(tipoNegocioFound){
      if(tipoNegocioFound.activo === 0){
        tipoNegocioFound.activo = 1;
        const id  = tipoNegocioFound.id;
        this.tipoNegocioRepository.update({id}, tipoNegocioFound);
        return tipoNegocioFound;
      }
      return new HttpException('Tipo Negocio ingresado ya existe en la base', HttpStatus.CONFLICT);
    }
    const newTipoNegocio = this.tipoNegocioRepository.create(createTipoNegocioDto);
    return this.tipoNegocioRepository.save(newTipoNegocio);
  }

  findAll() {
    return this.tipoNegocioRepository.find({
      where:{
        activo: 1
      }
    });
  }

  async findOne(id: number) {
    const tipoNegocioFound = await this.tipoNegocioRepository.findOne({
      where:{
        id
      }
    });
    if(!tipoNegocioFound){
      return new HttpException('Tipo Negocio no Existe', HttpStatus.NOT_FOUND);
    }
    return tipoNegocioFound;
  }

  async update(id: number, updateTipoNegocioDto: UpdateTipoNegocioDto) {
    const tipoNegocioFound = await this.tipoNegocioRepository.findOne({
      where: {
        id
      }
    });
    if(!tipoNegocioFound){
      return new HttpException('Tipo Negocio no Existe', HttpStatus.NOT_FOUND);
    }
    return this.tipoNegocioRepository.update({id}, updateTipoNegocioDto);
  }

  async remove(id: number) {
    const tipoNegocioFound = await this.tipoNegocioRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!tipoNegocioFound){
      return new HttpException('Tipo Negocio no Existe', HttpStatus.NOT_FOUND);
    }
    tipoNegocioFound.activo = 0;
    return this.tipoNegocioRepository.update({id}, tipoNegocioFound);
    // return this.tipoNegocioRepository.delete(id);
  }
}
