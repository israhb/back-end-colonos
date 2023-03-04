import { Injectable } from '@nestjs/common';
import { CreateFraccionamientoDto } from './dto/create-fraccionamiento.dto';
import { UpdateFraccionamientoDto } from './dto/update-fraccionamiento.dto';

@Injectable()
export class FraccionamientoService {
  create(createFraccionamientoDto: CreateFraccionamientoDto) {
    return 'This action adds a new fraccionamiento';
  }

  findAll() {
    return `This action returns all fraccionamiento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fraccionamiento`;
  }

  update(id: number, updateFraccionamientoDto: UpdateFraccionamientoDto) {
    return `This action updates a #${id} fraccionamiento`;
  }

  remove(id: number) {
    return `This action removes a #${id} fraccionamiento`;
  }
}
