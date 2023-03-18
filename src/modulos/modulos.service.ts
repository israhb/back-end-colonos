import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
import { Modulo } from './entities/modulo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RelacionLevelModulo } from 'src/relacion_level_modulos/entities/relacion_level_modulo.entity';

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

  async findModulosforLevel(level_id: number){
    // const activo = 1;
    return await this.moduloRepository.createQueryBuilder('modulos')
    .select(['modulos.name as name'])
    .where('modulos.id = r_l_p.modulo_id')
    .andWhere('r_l_p.level_id = :level_id', {level_id})
    .innerJoin(RelacionLevelModulo, 'r_l_p')
    .getRawMany();
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
