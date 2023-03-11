import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTipoPagoDto } from './dto/create-tipo_pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo_pago.dto';
import { TipoPago } from './entities/tipo_pago.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TipoPagoService {

  constructor(
    @InjectRepository(TipoPago) private tipoPagoRepository: Repository<TipoPago> 
  ){}

  async create(createTipoPagoDto: CreateTipoPagoDto) {
    const tipoPagoFound = await this.tipoPagoRepository.findOne({
      where:{
        name: createTipoPagoDto.name
      }
    });
    if(tipoPagoFound){
      if(tipoPagoFound.activo === 0){
        tipoPagoFound.activo = 1;
        const id  = tipoPagoFound.id;
        this.tipoPagoRepository.update({id}, tipoPagoFound);
        return tipoPagoFound;
      }
      return new HttpException('Tipo Pago ingresado ya existe en la base', HttpStatus.CONFLICT);
    }
    const newTipoPago = this.tipoPagoRepository.create(createTipoPagoDto);
    return this.tipoPagoRepository.save(newTipoPago);
  }

  findAll() {
    return this.tipoPagoRepository.find({
      where: {
        activo: 1
      }
    });
  }

  async findOne(id: number) {
    const tipoPagoFound = await this.tipoPagoRepository.findOne({
      where:{
        id
      }
    });
    if(!tipoPagoFound){
      return new HttpException('Tipo Pago no Existe', HttpStatus.NOT_FOUND);
    }
    return tipoPagoFound;
  }

  async update(id: number, updateTipoPagoDto: UpdateTipoPagoDto) {
    const tipoPagoFound = await this.tipoPagoRepository.findOne({
      where: {
        id
      }
    });
    if(!tipoPagoFound){
      return new HttpException('Tipo Pago no Existe', HttpStatus.NOT_FOUND);
    }
    return this.tipoPagoRepository.update({id}, updateTipoPagoDto);
  }

  async remove(id: number) {
    const tipoPagoFound = await this.tipoPagoRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!tipoPagoFound){
      return new HttpException('Tipo Pago no Existe', HttpStatus.NOT_FOUND);
    }
    tipoPagoFound.activo = 0;
    return this.tipoPagoRepository.update({id}, tipoPagoFound);
    // return this.tipoPagoRepository.delete(id);
  }
}
