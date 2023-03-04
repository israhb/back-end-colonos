import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateFraccionamientoDto } from './dto/create-fraccionamiento.dto';
import { UpdateFraccionamientoDto } from './dto/update-fraccionamiento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fraccionamiento } from './entities/fraccionamiento.entity';
import { Repository } from 'typeorm';
import { EstadoService } from 'src/estado/estado.service';

@Injectable()
export class FraccionamientoService {

  constructor(
    @InjectRepository(Fraccionamiento)  private fraccionamientoRepository: Repository<Fraccionamiento>,
    private estadoService: EstadoService 
  ){}

  async create(createFraccionamientoDto: CreateFraccionamientoDto) {
    const estadoFound = await this.estadoService.findOne(createFraccionamientoDto.estado_id);
    if(estadoFound.name == 'HttpException') {
      return new HttpException('Estado no Existe', HttpStatus.NOT_FOUND);
    }
    const fracFound = await this.fraccionamientoRepository.findOne({ where: { name: createFraccionamientoDto.name } })
    if(fracFound){
      if(fracFound.activo === 0){
        fracFound.activo = 1;
        const id  = fracFound.id;
        this.fraccionamientoRepository.update({id}, fracFound);
        return estadoFound;
      }
      return new HttpException('Fraccionamiento ingresado ya existe en la base', HttpStatus.CONFLICT);
    }
    const newFraccionamiento = this.fraccionamientoRepository.create(createFraccionamientoDto);
    return this.fraccionamientoRepository.save(newFraccionamiento);
  }

  findAll() {
    return this.fraccionamientoRepository.find({
      where:{
        activo: 1
      },
      relations:['estado']
    });
  }

  async findOne(id: number) {
    const fracFound = await this.fraccionamientoRepository.findOne({
      where:{
        id
      }
    });
    if(!fracFound){
      return new HttpException('Fraccionamiento no Existe', HttpStatus.NOT_FOUND);
    }
    return fracFound;
  }

  async update(id: number, updateFraccionamientoDto: UpdateFraccionamientoDto) {
    const fraccFound = await this.fraccionamientoRepository.findOne({
      where: {
        id
      }
    });
    if(!fraccFound){
      return new HttpException('Fraccionamiento no Existe', HttpStatus.NOT_FOUND);
    }
    return this.fraccionamientoRepository.update({id}, updateFraccionamientoDto);
  }

  async remove(id: number) {
    const fracFound = await this.fraccionamientoRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!fracFound){
      return new HttpException('Fraccionamiento no Existe', HttpStatus.NOT_FOUND);
    }
    fracFound.activo = 0;
    return this.fraccionamientoRepository.update({id}, fracFound);
    // return this.estadoRepository.delete(id);
  }
}
