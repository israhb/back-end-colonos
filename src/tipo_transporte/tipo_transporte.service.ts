import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTipoTransporteDto } from './dto/create-tipo_transporte.dto';
import { UpdateTipoTransporteDto } from './dto/update-tipo_transporte.dto';
import { TipoTransporte } from './entities/tipo_transporte.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TipoTransporteService {

  constructor(
    @InjectRepository(TipoTransporte) private tipoTransporteRepository: Repository<TipoTransporte> 
  ){}

  async create(createTipoTransporteDto: CreateTipoTransporteDto) {
    const tipoTransporteFound = await this.tipoTransporteRepository.findOne({
      where:{
        name: createTipoTransporteDto.name
      }
    });
    if(tipoTransporteFound){
      if(tipoTransporteFound.activo === 0){
        tipoTransporteFound.activo = 1;
        const id  = tipoTransporteFound.id;
        this.tipoTransporteRepository.update({id}, tipoTransporteFound);
        return tipoTransporteFound;
      }
      return new HttpException('Tipo Transporte ya existe en la base', HttpStatus.CONFLICT);
    }
    const newTipoTransporte = this.tipoTransporteRepository.create(createTipoTransporteDto);
    return this.tipoTransporteRepository.save(newTipoTransporte);
  }

  findAll() {
    return this.tipoTransporteRepository.find({
      where:{
        activo: 1
      },
      order:{
        id: "DESC"
      }
    });
  }

  async findOne(id: number) {
    const tipoTransporteFound = await this.tipoTransporteRepository.findOne({
      where:{
        id
      }
    });
    if(!tipoTransporteFound){
      return new HttpException('Tipo Transporte no Existe', HttpStatus.NOT_FOUND);
    }
    return tipoTransporteFound;
  }

  async update(id: number, updateTipoTransporteDto: UpdateTipoTransporteDto) {
    const tipoTransporteFound = await this.tipoTransporteRepository.findOne({
      where: {
        id
      }
    });
    if(!tipoTransporteFound){
      return new HttpException('Tipo Transporte no Existe', HttpStatus.NOT_FOUND);
    }
    return this.tipoTransporteRepository.update({id}, updateTipoTransporteDto);
  }

  async remove(id: number) {
    const tipoTransporteFound = await this.tipoTransporteRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!tipoTransporteFound){
      return new HttpException('Tipo Transporte no Existe', HttpStatus.NOT_FOUND);
    }
    tipoTransporteFound.activo = 0;
    return this.tipoTransporteRepository.update({id}, tipoTransporteFound);
    // return this.tipoTransporteRepository.delete(id);
  }
}
