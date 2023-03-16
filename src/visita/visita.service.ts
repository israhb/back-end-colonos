import { Injectable,  HttpException, HttpStatus } from '@nestjs/common';
import { CreateVisitaDto } from './dto/create-visita.dto';
import { UpdateVisitaDto } from './dto/update-visita.dto';
import { Visita } from './entities/visita.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ColonoService } from 'src/colono/colono.service';
import { TipoVisitaService } from 'src/tipo_visita/tipo_visita.service';
import { TipoServicioService } from 'src/tipo_servicio/tipo_servicio.service';
import { TipoTransporteService } from 'src/tipo_transporte/tipo_transporte.service';

@Injectable()
export class VisitaService {

  constructor(
    @InjectRepository(Visita)  private visitaRepository: Repository<Visita>,
    private colonoService: ColonoService,
    private tipoVisitaService: TipoVisitaService,
    private tipoServicioService: TipoServicioService,
    private tipoTransporteService: TipoTransporteService
  ){}

  async create(createVisitaDto: CreateVisitaDto) {
    const tipoVisitaFound = await this.tipoVisitaService.findOne(createVisitaDto.tipo_visita_id);
    if(tipoVisitaFound.name == 'HttpException') {
      return new HttpException('Tipo Visita no Existe', HttpStatus.NOT_FOUND);
    }
    const tipoServicioFound = await this.tipoServicioService.findOne(createVisitaDto.tipo_servicio_id);
    if(tipoServicioFound.name == 'HttpException') {
      return new HttpException('Tipo Servicio no Existe', HttpStatus.NOT_FOUND);
    }
    const tipotransporteFound = await this.tipoTransporteService.findOne(createVisitaDto.tipo_transporte_id);
    if(tipotransporteFound.name == 'HttpException') {
      return new HttpException('Tipo Transporte no Existe', HttpStatus.NOT_FOUND);
    }
    const colonoFound = await this.colonoService.findOne(createVisitaDto.colono_id, true);
    if(!colonoFound) {
      return new HttpException('Colono no Existe', HttpStatus.NOT_FOUND);
    }

    const visitaFound = await this.visitaRepository.findOne({ where: { name: createVisitaDto.name } })
    if(visitaFound){
      if(visitaFound.activo === 0){
        visitaFound.activo = 1;
        const id  = visitaFound.id;
        this.visitaRepository.update({id}, visitaFound);
        return visitaFound;
      }
      return new HttpException('Visita ingresado ya existe en la base', HttpStatus.CONFLICT);
    }
    const newVisita = this.visitaRepository.create(createVisitaDto);
    return this.visitaRepository.save(newVisita);
  }

  findAll() {
    return this.visitaRepository.find({
      where:{
        activo: 1
      }
    });
  }

  async findOne(id: number) {
    const visitaFound = await this.visitaRepository.findOne({
      where:{
        id
      }
    });
    if(!visitaFound){
      return new HttpException('Visita no Existe', HttpStatus.NOT_FOUND);
    }
    return visitaFound;
  }

  async update(id: number, updateVisitaDto: UpdateVisitaDto) {
    const tipoVisitaFound = await this.tipoVisitaService.findOne(updateVisitaDto.tipo_visita_id);
    if(tipoVisitaFound.name == 'HttpException') {
      return new HttpException('Tipo Visita no Existe', HttpStatus.NOT_FOUND);
    }
    const tipoServicioFound = await this.tipoServicioService.findOne(updateVisitaDto.tipo_servicio_id);
    if(tipoServicioFound.name == 'HttpException') {
      return new HttpException('Tipo Servicio no Existe', HttpStatus.NOT_FOUND);
    }
    const tipotransporteFound = await this.tipoTransporteService.findOne(updateVisitaDto.tipo_transporte_id);
    if(tipotransporteFound.name == 'HttpException') {
      return new HttpException('Tipo Transporte no Existe', HttpStatus.NOT_FOUND);
    }
    const colonoFound = await this.colonoService.findOne(updateVisitaDto.colono_id, true);
    if(!colonoFound) {
      return new HttpException('Colono no Existe', HttpStatus.NOT_FOUND);
    }

    const visitaFound = await this.visitaRepository.findOne({
      where: {
        id
      }
    });
    if(!visitaFound){
      return new HttpException('Visita no Existe', HttpStatus.NOT_FOUND);
    }
    return this.visitaRepository.update({id}, updateVisitaDto);
  }

  async remove(id: number) {
    const visitaFound = await this.visitaRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!visitaFound){
      return new HttpException('Visita no Existe', HttpStatus.NOT_FOUND);
    }
    visitaFound.activo = 0;
    return this.visitaRepository.update({id}, visitaFound);
  }
}
