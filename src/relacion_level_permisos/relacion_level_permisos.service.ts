import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRelacionLevelPermisoDto } from './dto/create-relacion_level_permiso.dto';
import { UpdateRelacionLevelPermisoDto } from './dto/update-relacion_level_permiso.dto';
import { RelacionLevelPermiso } from './entities/relacion_level_permiso.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LevelService } from 'src/level/level.service';
import { PermisosService } from 'src/permisos/permisos.service';

@Injectable()
export class RelacionLevelPermisosService {

  constructor(
    @InjectRepository(RelacionLevelPermiso)  private relacionlpRepository: Repository<RelacionLevelPermiso>,
    private levelService: LevelService,
    private permisosService: PermisosService
  ){}

  async create(createRelacionLevelPermisoDto: CreateRelacionLevelPermisoDto) {
    const levelFound = await this.levelService.findOne(createRelacionLevelPermisoDto.level_id);
    if(levelFound.name == 'HttpException'){
      throw new NotFoundException('No se encontro Nivel');
    }
    const moduloFound = await this.permisosService.findOne(createRelacionLevelPermisoDto.permiso_id);
    if(!moduloFound){
      throw new NotFoundException('No se encontro Permiso');
    }
    const newRelacionnm = this.relacionlpRepository.create(createRelacionLevelPermisoDto);
    return this.relacionlpRepository.save(newRelacionnm);
  }

  findAll() {
    return this.relacionlpRepository.find({
      where:{
        activo:1
      }
    });
  }

  async findOne(id: number) {
    const relacionnmFound = await this.relacionlpRepository.findOne({
      where:{
        id
      }
    });
    if(!relacionnmFound){
      throw new NotFoundException('No se encontro Relacion');
    }
    return relacionnmFound;
  }

  async update(id: number, updateRelacionLevelPermisoDto: UpdateRelacionLevelPermisoDto) {
    const levelFound = await this.levelService.findOne(updateRelacionLevelPermisoDto.level_id);
    if(levelFound.name == 'HttpException'){
      throw new NotFoundException('No se encontro Nivel');
    }
    const moduloFound = await this.permisosService.findOne(updateRelacionLevelPermisoDto.permiso_id);
    if(!moduloFound){
      throw new NotFoundException('No se encontro Permiso');
    }
    const relacionnmFound = await this.relacionlpRepository.findOne({
      where: {
        id
      }
    });
    if(!relacionnmFound){
      throw new NotFoundException('No se encontro Relacion');
    }
    return this.relacionlpRepository.update({id}, updateRelacionLevelPermisoDto);
  }

  async remove(id: number) {
    const relacionnmFound = await this.relacionlpRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!relacionnmFound){
      throw new NotFoundException('No se encontro Relacion');
    }
    relacionnmFound.activo = 0;
    return this.relacionlpRepository.update({id}, relacionnmFound);
  }
}
