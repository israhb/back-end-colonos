import { Injectable,  HttpException, HttpStatus } from '@nestjs/common';
import { CreateColonoDto } from './dto/create-colono.dto';
import { UpdateColonoDto } from './dto/update-colono.dto';
import { Colono } from './entities/colono.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FolioService } from 'src/folio/folio.service';
import { LevelService } from 'src/level/level.service';

@Injectable()
export class ColonoService {

  constructor(
    @InjectRepository(Colono)  private colonoRepository: Repository<Colono>,
    private folioService: FolioService,
    private levelService: LevelService
  ){}


  async create(createColonoDto: CreateColonoDto) {
    const folioFound = await this.folioService.findOne(createColonoDto.folio_id);
    if(folioFound.name == 'HttpException') {
      return new HttpException('Folio no Existe', HttpStatus.NOT_FOUND);
    }
    const levelFound = await this.levelService.findOne(createColonoDto.level_id);
    if(levelFound.name == 'HttpException') {
      return new HttpException('Nivel no Existe', HttpStatus.NOT_FOUND);
    }
    const colonoFound = await this.colonoRepository.findOne({ where: { telefono: createColonoDto.telefono } })
    if(colonoFound){
      if(colonoFound.activo === 0){
        colonoFound.activo = 1;
        const id  = colonoFound.id;
        this.colonoRepository.update({id}, colonoFound);
        return colonoFound;
      }
      return new HttpException('Colono ingresado ya existe en la base', HttpStatus.CONFLICT);
    }
    const newColono = this.colonoRepository.create(createColonoDto);
    return this.colonoRepository.save(newColono);
  }

  findAll() {
    return this.colonoRepository.find({
      where: {
        activo: 1
      }
    });
  }

  async findOne(id: number) {
    const colonoFound = await this.colonoRepository.findOne({
      where:{
        id
      }
    });
    if(!colonoFound){
      return new HttpException('Colono no Existe', HttpStatus.NOT_FOUND);
    }
    return colonoFound;
  }

  async update(id: number, updateColonoDto: UpdateColonoDto) {
    const folioFound = await this.folioService.findOne(updateColonoDto.folio_id);
    if(folioFound.name == 'HttpException') {
      return new HttpException('Folio no Existe', HttpStatus.NOT_FOUND);
    }
    const levelFound = await this.levelService.findOne(updateColonoDto.level_id);
    if(levelFound.name == 'HttpException') {
      return new HttpException('Nivel no Existe', HttpStatus.NOT_FOUND);
    }
    const colonoFound = await this.colonoRepository.findOne({
      where: {
        id
      }
    });
    if(!colonoFound){
      return new HttpException('Colono no Existe', HttpStatus.NOT_FOUND);
    }
    return this.colonoRepository.update({id}, updateColonoDto);
  }

  async remove(id: number) {
    const colonoFound = await this.colonoRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!colonoFound){
      return new HttpException('Colono no Existe', HttpStatus.NOT_FOUND);
    }
    colonoFound.activo = 0;
    return this.colonoRepository.update({id}, colonoFound);
    // return this.colonoRepository.delete(id);
  }
}
