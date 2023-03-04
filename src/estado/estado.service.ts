import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estado } from './entities/estado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstadoService {
  
  constructor(
    @InjectRepository(Estado) private estadoRepository: Repository<Estado> 
  ){}

  async create(createEstadoDto: CreateEstadoDto) {
    const estadoFound = await this.estadoRepository.findOne({
      where:{
        name: createEstadoDto.name
      }
    });
    if(estadoFound){
      return new HttpException('Estado ingresado ya existe en la base', HttpStatus.CONFLICT);
    }
    const newEstado = this.estadoRepository.create(createEstadoDto);
    return this.estadoRepository.save(newEstado);
  }

  findAll() {
    return this.estadoRepository.find();
  }

  async findOne(id: number) {
    const estadoFound = await this.estadoRepository.findOne({
      where:{
        id
      }
    });
    if(!estadoFound){
      return new HttpException('Estado no Existe', HttpStatus.NOT_FOUND);
    }
    return estadoFound;
  }

  update(id: number, updateEstadoDto: UpdateEstadoDto) {
    return this.estadoRepository.update({id}, updateEstadoDto);
  }

  remove(id: number) {
    return this.estadoRepository.delete(id);
  }
}
