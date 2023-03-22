import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Pago } from './entities/pago.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ColonoService } from 'src/colono/colono.service';
import { TipoPagoService } from 'src/tipo_pago/tipo_pago.service';

@Injectable()
export class PagoService {

  constructor(
    @InjectRepository(Pago)  private pagoRepository: Repository<Pago>,
    private colonoService: ColonoService,
    private tipoPagoService: TipoPagoService
  ){}

  async create(createPagoDto: CreatePagoDto) {
    const tipoPagoFound = await this.tipoPagoService.findOne(createPagoDto.tipo_pago_id);
    if(tipoPagoFound.name == 'HttpException') {
      return new HttpException('Tipo Pago no Existe', HttpStatus.NOT_FOUND);
    }

    const colonoFound = await this.colonoService.findOne(createPagoDto.colono_id, true);
    if(!colonoFound) {
      return new HttpException('Colono no Existe', HttpStatus.NOT_FOUND);
    }

    const pagoFound = await this.pagoRepository.findOne({ where: { name: createPagoDto.name } })
    if(pagoFound){
      if(pagoFound.activo === 0){
        pagoFound.activo = 1;
        const id  = pagoFound.id;
        this.pagoRepository.update({id}, pagoFound);
        return pagoFound;
      }
      return new HttpException('Pago ingresado ya existe en la base', HttpStatus.CONFLICT);
    }
    const newPago = this.pagoRepository.create(createPagoDto);
    return this.pagoRepository.save(newPago);
  }

  findAll() {
    return this.pagoRepository.find({
      where:{
        activo: 1
      },
      order:{
        id: "DESC"
      },
      relations:['colono', 'tipoPago']
    });
  }

  async findOne(id: number) {
    const pagoFound = await this.pagoRepository.findOne({
      where:{
        id
      }
    });
    if(!pagoFound){
      return new HttpException('Pago no Existe', HttpStatus.NOT_FOUND);
    }
    return pagoFound;
  }

  async update(id: number, updatePagoDto: UpdatePagoDto) {
    const tipoPagoFound = await this.tipoPagoService.findOne(updatePagoDto.tipo_pago_id);
    if(tipoPagoFound.name == 'HttpException') {
      return new HttpException('Tipo Pago no Existe', HttpStatus.NOT_FOUND);
    }

    const colonoFound = await this.colonoService.findOne(updatePagoDto.colono_id, true);
    if(!colonoFound) {
      return new HttpException('Colono no Existe', HttpStatus.NOT_FOUND);
    }
    const pagoFound = await this.pagoRepository.findOne({
      where: {
        id
      }
    });
    if(!pagoFound){
      return new HttpException('Pago no Existe', HttpStatus.NOT_FOUND);
    }
    return this.pagoRepository.update({id}, updatePagoDto);
  }

  async remove(id: number) {
    const pagoFound = await this.pagoRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!pagoFound){
      return new HttpException('Pago no Existe', HttpStatus.NOT_FOUND);
    }
    pagoFound.activo = 0;
    return this.pagoRepository.update({id}, pagoFound);
    // return this.pagoRepository.delete(id);
  }
}
