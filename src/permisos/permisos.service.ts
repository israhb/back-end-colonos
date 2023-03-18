import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';
import { Permiso } from './entities/permiso.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RelacionLevelPermiso } from 'src/relacion_level_permisos/entities/relacion_level_permiso.entity';

@Injectable()
export class PermisosService {

  constructor(
    @InjectRepository(Permiso) private permisoRepository: Repository<Permiso> 
  ){}

  async create(createPermisoDto: CreatePermisoDto) {
    const permisosFound = await this.permisoRepository.findOne({
      where:{
        name: createPermisoDto.name
      }
    });
    if(permisosFound){
      if(permisosFound.activo === 0){
        permisosFound.activo = 1;
        const id  = permisosFound.id;
        this.permisoRepository.update({id}, permisosFound);
        return permisosFound;
      }
      throw new NotFoundException('Permiso ya existe en la base');
    }
    const newPermiso = this.permisoRepository.create(createPermisoDto);
    return this.permisoRepository.save(newPermiso);
  }

  findAll() {
    return this.permisoRepository.find({
      where: {
        activo: 1
      }
    });
  }

  async findPermisosforLevel(level_id: number){
    // const activo = 1;
    return await this.permisoRepository.createQueryBuilder('permisos')
    .select(['permisos.name as name'])
    .where('permisos.id = r_l_p.permiso_id')
    .andWhere('r_l_p.level_id = :level_id', {level_id})
    .innerJoin(RelacionLevelPermiso, 'r_l_p')
    .getRawMany();
  }

  async findOne(id: number) {
    const permisosFound = await this.permisoRepository.findOne({
      where:{
        id
      }
    });
    if(!permisosFound){
      throw new NotFoundException('Permiso no existe');
    }
    return permisosFound;
  }

  async update(id: number, updatePermisoDto: UpdatePermisoDto) {
    const permisoFound = await this.permisoRepository.findOne({
      where: {
        id
      }
    });
    if(!permisoFound){
      throw new NotFoundException('Permiso no existe');
    }
    return this.permisoRepository.update({id}, updatePermisoDto);
  }

  async remove(id: number) {
    const permisoFound = await this.permisoRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!permisoFound){
      throw new NotFoundException('Permiso no existe');
    }
    permisoFound.activo = 0;
    return this.permisoRepository.update({id}, permisoFound);
  }
}
