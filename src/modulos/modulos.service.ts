import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
import { Modulo } from './entities/modulo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ModulosService {

  constructor(
    @InjectRepository(Modulo) private moduloRepository: Repository<Modulo> 
  ){}

  async create(createModuloDto: CreateModuloDto) {
    const modulosFound = await this.moduloRepository.findOne({
      where:{
        name: createModuloDto.name
      }
    });
    if(modulosFound){
      if(modulosFound.activo === 0){
        modulosFound.activo = 1;
        const id  = modulosFound.id;
        this.moduloRepository.update({id}, modulosFound);
        return modulosFound;
      }
      throw new NotFoundException('Modulo ya existe en la base');
    }
    const newModulo = this.moduloRepository.create(createModuloDto);
    return this.moduloRepository.save(newModulo);
  }

  findAll() {
    return this.moduloRepository.find({
      where:{
        activo: 1
      }
    });
  }

  async findOne(id: number) {
    const moduloFound = await this.moduloRepository.findOne({
      where:{
        id
      }
    });
    if(!moduloFound){
      throw new NotFoundException('Modulo no existe');
    }
    return moduloFound;
  }

  async update(id: number, updateModuloDto: UpdateModuloDto) {
    const moduloFound = await this.moduloRepository.findOne({
      where: {
        id
      }
    });
    if(!moduloFound){
      throw new NotFoundException('Modulo no existe');
    }
    return this.moduloRepository.update({id}, updateModuloDto);
  }

  async remove(id: number) {
    const moduloFound = await this.moduloRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!moduloFound){
      throw new NotFoundException('Modulo no existe');
    }
    moduloFound.activo = 0;
    return this.moduloRepository.update({id}, moduloFound);
  }
}
