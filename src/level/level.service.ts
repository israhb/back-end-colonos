import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { Level } from './entities/level.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LevelService {

  constructor(
    @InjectRepository(Level) private levelRepository: Repository<Level> 
  ){}

  async create(createLevelDto: CreateLevelDto) {
    const levelFound = await this.levelRepository.findOne({
      where:{
        name: createLevelDto.name
      }
    });
    if(levelFound){
      if(levelFound.activo === 0){
        levelFound.activo = 1;
        const id  = levelFound.id;
        this.levelRepository.update({id}, levelFound);
        return levelFound;
      }
      return new HttpException('Nivel ingresado ya existe en la base', HttpStatus.CONFLICT);
    }
    const newLevel = this.levelRepository.create(createLevelDto);
    return this.levelRepository.save(newLevel);
  }

  findAll() {
    return this.levelRepository.find({
      where: {
        activo: 1
      }
    });
  }

  async findOne(id: number) {
    const levelFound = await this.levelRepository.findOne({
      where:{
        id
      }
    });
    if(!levelFound){
      return new HttpException('Nivel no Existe', HttpStatus.NOT_FOUND);
    }
    return levelFound;
  }

  async update(id: number, updateLevelDto: UpdateLevelDto) {
    const levelFound = await this.levelRepository.findOne({
      where: {
        id
      }
    });
    if(!levelFound){
      return new HttpException('Nivel no Existe', HttpStatus.NOT_FOUND);
    }
    return this.levelRepository.update({id}, updateLevelDto);
  }

  async remove(id: number) {
    const levelFound = await this.levelRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!levelFound){
      return new HttpException('Nivel no Existe', HttpStatus.NOT_FOUND);
    }
    levelFound.activo = 0;
    return this.levelRepository.update({id}, levelFound);
    // return this.levelRepository.delete(id);
  }
}
