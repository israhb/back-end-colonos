import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Pago } from './entities/pago.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ColonoService } from 'src/colono/colono.service';
import { TipoPagoService } from 'src/tipo_pago/tipo_pago.service';
import { TipoPago } from 'src/tipo_pago/entities/tipo_pago.entity';

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

  async getPagoColono(id: number){
    return await this.pagoRepository.createQueryBuilder('pago')
    .select(['pago.id as id', 'pago.tipo_pago_id as tipo_pago_id', 'tp.name as tipo_pago_name', 'pago.name as name', 'pago.monto as monto', 'DATE_FORMAT(pago.upload_date, "%Y-%m-%d") as upload_date', 'pago.upload_time as upload_time'])
    .where('pago.tipo_pago_id = tp.id')
    .andWhere('pago.colono_id = :id', {id})
    .innerJoin(TipoPago, 'tp')
    .orderBy('pago.id', "DESC")
    .getRawMany();
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
