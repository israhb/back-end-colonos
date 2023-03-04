import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FraccionamientoService } from './fraccionamiento.service';
import { CreateFraccionamientoDto } from './dto/create-fraccionamiento.dto';
import { UpdateFraccionamientoDto } from './dto/update-fraccionamiento.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('fraccionamiento')
@Controller('fraccionamiento')
export class FraccionamientoController {
  constructor(private readonly fraccionamientoService: FraccionamientoService) {}

  @Post()
  create(@Body() createFraccionamientoDto: CreateFraccionamientoDto) {
    return this.fraccionamientoService.create(createFraccionamientoDto);
  }

  @Get()
  findAll() {
    return this.fraccionamientoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fraccionamientoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFraccionamientoDto: UpdateFraccionamientoDto) {
    return this.fraccionamientoService.update(+id, updateFraccionamientoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fraccionamientoService.remove(+id);
  }
}
