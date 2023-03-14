import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateMonedaDto } from './dto/create-moneda.dto';
import { UpdateMonedaDto } from './dto/update-moneda.dto';
import { Moneda } from './entities/moneda.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MonedaService {

  constructor(
    @InjectRepository(Moneda) private monedaRepository: Repository<Moneda> 
  ){}

  async create(createMonedaDto: CreateMonedaDto) {
    const monedaFound = await this.monedaRepository.findOne({
      where:{
        name: createMonedaDto.name
      }
    });
    if(monedaFound){
      if(monedaFound.activo === 0){
        monedaFound.activo = 1;
        const id  = monedaFound.id;
        this.monedaRepository.update({id}, monedaFound);
        return monedaFound;
      }
      return new HttpException('Moneda ya existe en la base', HttpStatus.CONFLICT);
    }
    const newMoneda = this.monedaRepository.create(createMonedaDto);
    return this.monedaRepository.save(newMoneda);
  }

  findAll() {
    return this.monedaRepository.find({
      where: {
        activo: 1
      }
    });
  }

  async findOne(id: number) {
    const monedaFound = await this.monedaRepository.findOne({
      where:{
        id
      }
    });
    if(!monedaFound){
      return new HttpException('Moneda no Existe', HttpStatus.NOT_FOUND);
    }
    return monedaFound;
  }

  async update(id: number, updateMonedaDto: UpdateMonedaDto) {
    const monedaFound = await this.monedaRepository.findOne({
      where: {
        id
      }
    });
    if(!monedaFound){
      return new HttpException('Moneda no Existe', HttpStatus.NOT_FOUND);
    }
    return this.monedaRepository.update({id}, updateMonedaDto);
  }

  async remove(id: number) {
    const monedaFound = await this.monedaRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!monedaFound){
      return new HttpException('Moneda no Existe', HttpStatus.NOT_FOUND);
    }
    monedaFound.activo = 0;
    return this.monedaRepository.update({id}, monedaFound);
    // return this.monedaRepository.delete(id);
  }
}
