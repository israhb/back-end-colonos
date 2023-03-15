import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateNegocioDto } from './dto/create-negocio.dto';
import { UpdateNegocioDto } from './dto/update-negocio.dto';
import { Negocio } from './entities/negocio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ColonoService } from 'src/colono/colono.service';
import { TipoNegocioService } from 'src/tipo_negocio/tipo_negocio.service';

@Injectable()
export class NegocioService {

  constructor(
    @InjectRepository(Negocio)  private negocioRepository: Repository<Negocio>,
    private colonoService: ColonoService,
    private tipoNegocioService: TipoNegocioService
  ){}


  async create(createNegocioDto: CreateNegocioDto) {
    const tipoNegocioFound = await this.tipoNegocioService.findOne(createNegocioDto.tipo_negocio_id);
    if(tipoNegocioFound.name == 'HttpException') {
      return new HttpException('Tipo Negocio no Existe', HttpStatus.NOT_FOUND);
    }

    const colonoFound = await this.colonoService.findOne(createNegocioDto.colono_id, true);
    if(!colonoFound) {
      return new HttpException('Colono no Existe', HttpStatus.NOT_FOUND);
    }

    const negocioFound = await this.negocioRepository.findOne({ where: { name: createNegocioDto.name } })
    if(negocioFound){
      if(negocioFound.activo === 0){
        negocioFound.activo = 1;
        const id  = negocioFound.id;
        this.negocioRepository.update({id}, negocioFound);
        return negocioFound;
      }
      return new HttpException('Pago ingresado ya existe en la base', HttpStatus.CONFLICT);
    }
    const newNegocio = this.negocioRepository.create(createNegocioDto);
    return this.negocioRepository.save(newNegocio);
  }

  findAll() {
    return this.negocioRepository.find({
      where:{
        activo: 1
      }
    });
  }

  async findOne(id: number) {
    const negocioFound = await this.negocioRepository.findOne({
      where:{
        id
      }
    });
    if(!negocioFound){
      return new HttpException('Negocio no Existe', HttpStatus.NOT_FOUND);
    }
    return negocioFound;
  }

  async update(id: number, updateNegocioDto: UpdateNegocioDto) {
    const tipoNegocioFound = await this.tipoNegocioService.findOne(updateNegocioDto.tipo_negocio_id);
    if(tipoNegocioFound.name == 'HttpException') {
      return new HttpException('Tipo Negocio no Existe', HttpStatus.NOT_FOUND);
    }

    const colonoFound = await this.colonoService.findOne(updateNegocioDto.colono_id, true);
    if(!colonoFound) {
      return new HttpException('Colono no Existe', HttpStatus.NOT_FOUND);
    }

    const negocioFound = await this.negocioRepository.findOne({
      where: {
        id
      }
    });
    if(!negocioFound){
      return new HttpException('Negocio no Existe', HttpStatus.NOT_FOUND);
    }
    return this.negocioRepository.update({id}, updateNegocioDto);
  }

  async remove(id: number) {
    const negocioFound = await this.negocioRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!negocioFound){
      return new HttpException('Negocio no Existe', HttpStatus.NOT_FOUND);
    }
    negocioFound.activo = 0;
    return this.negocioRepository.update({id}, negocioFound);
  }
}
