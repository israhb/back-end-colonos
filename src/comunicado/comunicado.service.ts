import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateComunicadoDto } from './dto/create-comunicado.dto';
import { UpdateComunicadoDto } from './dto/update-comunicado.dto';
import { Comunicado } from './entities/comunicado.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoComunicadoService } from 'src/tipo_comunicado/tipo_comunicado.service';
import { ColonoService } from 'src/colono/colono.service';

@Injectable()
export class ComunicadoService {

  constructor(
    @InjectRepository(Comunicado)  private comunicadoRepository: Repository<Comunicado>,
    private tipoComunicado: TipoComunicadoService,
    private colono : ColonoService
  ){}

  async create(createComunicadoDto: CreateComunicadoDto) {

    const tipoComunicadoFound = await this.tipoComunicado.findOne(createComunicadoDto.tipo_comunicado_id);
    if(tipoComunicadoFound.name == 'HttpException') {
      return new HttpException('Tipo Comunicado no Existe', HttpStatus.NOT_FOUND);
    }

    const colonoFound = await this.colono.findOne(createComunicadoDto.colono_id, true);
    if(!colonoFound) {
      return new HttpException('Colono no Existe', HttpStatus.NOT_FOUND);
    }
    const comunicadoFound = await this.comunicadoRepository.findOne({
      where:{
        name: createComunicadoDto.name
      }
    });
    if(comunicadoFound){
      if(comunicadoFound.activo === 0){
        comunicadoFound.activo = 1;
        const id  = comunicadoFound.id;
        this.comunicadoRepository.update({id}, comunicadoFound);
        return comunicadoFound;
      }
      return new HttpException('Comunicado ya existe en la base', HttpStatus.CONFLICT);
    }
    const newComunicado = this.comunicadoRepository.create(createComunicadoDto);
    return this.comunicadoRepository.save(newComunicado);
  }

  findAll() {
    return this.comunicadoRepository.find({
      where:{
        activo: 1
      },
      order:{
        id: "DESC"
      },
      relations:['colono', 'tipoComunicado']
    });
  }

  async findOne(id: number) {
    const comunicadoFound = await this.comunicadoRepository.findOne({
      where:{
        id
      }
    });
    if(!comunicadoFound){
      return new HttpException('Comunicado no Existe', HttpStatus.NOT_FOUND);
    }
    return comunicadoFound;
  }

  async update(id: number, updateComunicadoDto: UpdateComunicadoDto) {
    const comunicadoFound = await this.comunicadoRepository.findOne({
      where: {
        id
      }
    });
    if(!comunicadoFound){
      return new HttpException('Comunicado no Existe', HttpStatus.NOT_FOUND);
    }
    return this.comunicadoRepository.update({id}, updateComunicadoDto);
  }

  async remove(id: number) {
    const comunicadoFound = await this.comunicadoRepository.findOne({
      where: {
        id,
        activo: 1
      }
    });
    if(!comunicadoFound){
      return new HttpException('Comunicado no Existe', HttpStatus.NOT_FOUND);
    }
    comunicadoFound.activo = 0;
    return this.comunicadoRepository.update({id}, comunicadoFound);
    // return this.comunicadoRepository.delete(id);
  }
}
