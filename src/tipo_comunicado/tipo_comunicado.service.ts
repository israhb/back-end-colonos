import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTipoComunicadoDto } from './dto/create-tipo_comunicado.dto';
import { UpdateTipoComunicadoDto } from './dto/update-tipo_comunicado.dto';
import { TipoComunicado } from './entities/tipo_comunicado.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TipoComunicadoService {

  constructor(
    @InjectRepository(TipoComunicado) private tipoComunicadoRepository: Repository<TipoComunicado> 
  ){}

  async create(createTipoComunicadoDto: CreateTipoComunicadoDto) {
    const tipoComunicadoFound = await this.tipoComunicadoRepository.findOne({
      where:{
        name: createTipoComunicadoDto.name
      }
    });
    if(tipoComunicadoFound){
      if(tipoComunicadoFound.activo === 0){
        tipoComunicadoFound.activo = 1;
        const id  = tipoComunicadoFound.id;
        this.tipoComunicadoRepository.update({id}, tipoComunicadoFound);
        return tipoComunicadoFound;
      }
      return new HttpException('Tipo Comunicado ingresado ya existe en la base', HttpStatus.CONFLICT);
    }
    const newTipoComunicado = this.tipoComunicadoRepository.create(createTipoComunicadoDto);
    return this.tipoComunicadoRepository.save(newTipoComunicado);
  }

  findAll() {
    return this.tipoComunicadoRepository.find({
      where:{
        activo: 1
      }
    });
  }

  async findOne(id: number) {
    const tipoComunicadoFound = await this.tipoComunicadoRepository.findOne({
      where:{
        id
      }
    });
    if(!tipoComunicadoFound){
      return new HttpException('Tipo Comunicado no Existe', HttpStatus.NOT_FOUND);
    }
    return tipoComunicadoFound;
  }

  async update(id: number, updateTipoComunicadoDto: UpdateTipoComunicadoDto) {
    const tipoComunicadoFound = await this.tipoComunicadoRepository.findOne({
      where: {
        id
      }
    });
    if(!tipoComunicadoFound){
      return new HttpException('Tipo Comunicado no Existe', HttpStatus.NOT_FOUND);
    }
    return this.tipoComunicadoRepository.update({id}, updateTipoComunicadoDto);
  }

  async remove(id: number) {
    const tipoComunicadoFound = await this.tipoComunicadoRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!tipoComunicadoFound){
      return new HttpException('Tipo Comunicado no Existe', HttpStatus.NOT_FOUND);
    }
    tipoComunicadoFound.activo = 0;
    return this.tipoComunicadoRepository.update({id}, tipoComunicadoFound);
    // return this.tipoComunicadoRepository.delete(id);
  }
}
