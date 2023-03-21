import { Injectable,  HttpException, HttpStatus } from '@nestjs/common';
import { CreateTipoServicioDto } from './dto/create-tipo_servicio.dto';
import { UpdateTipoServicioDto } from './dto/update-tipo_servicio.dto';
import { TipoServicio } from './entities/tipo_servicio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoServicioService {

  constructor(
    @InjectRepository(TipoServicio) private tipoServicioRepository: Repository<TipoServicio> 
  ){}

  async create(createTipoServicioDto: CreateTipoServicioDto) {
    const tipoServicioFound = await this.tipoServicioRepository.findOne({
      where:{
        name: createTipoServicioDto.name
      }
    });
    if(tipoServicioFound){
      if(tipoServicioFound.activo === 0){
        tipoServicioFound.activo = 1;
        const id  = tipoServicioFound.id;
        this.tipoServicioRepository.update({id}, tipoServicioFound);
        return tipoServicioFound;
      }
      return new HttpException('Tipo Servicio ya existe en la base', HttpStatus.CONFLICT);
    }
    const newTipoServicio = this.tipoServicioRepository.create(createTipoServicioDto);
    return this.tipoServicioRepository.save(newTipoServicio);
  }

  findAll() {
    return this.tipoServicioRepository.find({
      where: {
        activo: 1
      },
      order:{
        id: "DESC"
      }
    });
  }

  async findOne(id: number) {
    const tipoServicioFound = await this.tipoServicioRepository.findOne({
      where:{
        id
      }
    });
    if(!tipoServicioFound){
      return new HttpException('Tipo Servicio no Existe', HttpStatus.NOT_FOUND);
    }
    return tipoServicioFound;
  }

  async update(id: number, updateTipoServicioDto: UpdateTipoServicioDto) {
    const tipoServicioFound = await this.tipoServicioRepository.findOne({
      where: {
        id
      }
    });
    if(!tipoServicioFound){
      return new HttpException('Tipo Servicio no Existe', HttpStatus.NOT_FOUND);
    }
    return this.tipoServicioRepository.update({id}, updateTipoServicioDto);
  }

  async remove(id: number) {
    const tipoServicioFound = await this.tipoServicioRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!tipoServicioFound){
      return new HttpException('Tipo Servicio no Existe', HttpStatus.NOT_FOUND);
    }
    tipoServicioFound.activo = 0;
    return this.tipoServicioRepository.update({id}, tipoServicioFound);
    // return this.tipoServicioRepository.delete(id);
  }
}
