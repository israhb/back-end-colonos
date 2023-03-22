import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTipoVisitaDto } from './dto/create-tipo_visita.dto';
import { UpdateTipoVisitaDto } from './dto/update-tipo_visita.dto';
import { TipoVisita } from './entities/tipo_visita.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TipoVisitaService {

  constructor(
    @InjectRepository(TipoVisita) private tipoVisitaRepository: Repository<TipoVisita> 
  ){}

  async create(createTipoVisitaDto: CreateTipoVisitaDto) {
    const tipoVisitaFound = await this.tipoVisitaRepository.findOne({
      where:{
        name: createTipoVisitaDto.name
      }
    });
    if(tipoVisitaFound){
      if(tipoVisitaFound.activo === 0){
        tipoVisitaFound.activo = 1;
        const id  = tipoVisitaFound.id;
        this.tipoVisitaRepository.update({id}, tipoVisitaFound);
        return tipoVisitaFound;
      }
      return new HttpException('Tipo Visita ya existe en la base', HttpStatus.CONFLICT);
    }
    const newTipoVisita = this.tipoVisitaRepository.create(createTipoVisitaDto);
    return this.tipoVisitaRepository.save(newTipoVisita);
  }

  findAll() {
    return this.tipoVisitaRepository.find({
      where:{
        activo: 1
      },
      order:{
        id: "DESC"
      }
    });
  }

  async findOne(id: number) {
    const tipoVisitaFound = await this.tipoVisitaRepository.findOne({
      where:{
        id
      }
    });
    if(!tipoVisitaFound){
      return new HttpException('Tipo Visita no Existe', HttpStatus.NOT_FOUND);
    }
    return tipoVisitaFound;
  }

  async update(id: number, updateTipoVisitaDto: UpdateTipoVisitaDto) {
    const tipoVisitaFound = await this.tipoVisitaRepository.findOne({
      where: {
        id
      }
    });
    if(!tipoVisitaFound){
      return new HttpException('Tipo Visita no Existe', HttpStatus.NOT_FOUND);
    }
    return this.tipoVisitaRepository.update({id}, updateTipoVisitaDto);
  }

  async remove(id: number) {
    const tipoVisitaFound = await this.tipoVisitaRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!tipoVisitaFound){
      return new HttpException('Tipo Visita no Existe', HttpStatus.NOT_FOUND);
    }
    tipoVisitaFound.activo = 0;
    return this.tipoVisitaRepository.update({id}, tipoVisitaFound);
    // return this.tipoVisitaRepository.delete(id);
  }
}
