import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRelacionLevelModuloDto } from './dto/create-relacion_level_modulo.dto';
import { UpdateRelacionLevelModuloDto } from './dto/update-relacion_level_modulo.dto';
import { RelacionLevelModulo } from './entities/relacion_level_modulo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LevelService } from 'src/level/level.service';
import { ModulosService } from 'src/modulos/modulos.service';

@Injectable()
export class RelacionLevelModulosService {

  constructor(
    @InjectRepository(RelacionLevelModulo)  private relacionlmRepository: Repository<RelacionLevelModulo>,
    private levelService: LevelService,
    private modulosService: ModulosService
  ){}


  async create(createRelacionLevelModuloDto: CreateRelacionLevelModuloDto) {
    const levelFound = await this.levelService.findOne(createRelacionLevelModuloDto.level_id);
    if(levelFound.name == 'HttpException'){
      throw new NotFoundException('No se encontro Nivel');
    }
    const moduloFound = await this.modulosService.findOne(createRelacionLevelModuloDto.modulo_id);
    if(!moduloFound){
      throw new NotFoundException('No se encontro Modulo');
    }
    const newRelacionnm = this.relacionlmRepository.create(createRelacionLevelModuloDto);
    return this.relacionlmRepository.save(newRelacionnm);

  }

  findAll() {
    return this.relacionlmRepository.find({
      where:{
        activo: 1
      }
    });
  }

  async findOne(id: number) {
    const relacionnmFound = await this.relacionlmRepository.findOne({
      where:{
        id
      }
    });
    if(!relacionnmFound){
      throw new NotFoundException('No se encontro Relacion');
    }
    return relacionnmFound;
  }

  async update(id: number, updateRelacionLevelModuloDto: UpdateRelacionLevelModuloDto) {
    const levelFound = await this.levelService.findOne(updateRelacionLevelModuloDto.level_id);
    if(levelFound.name == 'HttpException'){
      throw new NotFoundException('No se encontro Nivel');
    }
    const moduloFound = await this.modulosService.findOne(updateRelacionLevelModuloDto.modulo_id);
    if(!moduloFound){
      throw new NotFoundException('No se encontro Modulo');
    }
    const relacionnmFound = await this.relacionlmRepository.findOne({
      where: {
        id
      }
    });
    if(!relacionnmFound){
      throw new NotFoundException('No se encontro Relacion');
    }
    return this.relacionlmRepository.update({id}, updateRelacionLevelModuloDto);
  }

  async remove(id: number) {
    const relacionnmFound = await this.relacionlmRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!relacionnmFound){
      throw new NotFoundException('No se encontro Relacion');
    }
    relacionnmFound.activo = 0;
    return this.relacionlmRepository.update({id}, relacionnmFound);
  }
}
