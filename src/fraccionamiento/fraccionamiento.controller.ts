import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { FraccionamientoService } from './fraccionamiento.service';
import { CreateFraccionamientoDto } from './dto/create-fraccionamiento.dto';
import { UpdateFraccionamientoDto } from './dto/update-fraccionamiento.dto';
import { ApiTags } from '@nestjs/swagger';
import { Fraccionamiento } from './entities/fraccionamiento.entity';

@ApiTags('fraccionamiento')
@Controller('fraccionamiento')
export class FraccionamientoController {
  constructor(private fraccionamientoService: FraccionamientoService) {}

  @Post()
  create(@Body() createFraccionamientoDto: CreateFraccionamientoDto) {
    return this.fraccionamientoService.create(createFraccionamientoDto);
  }

  @Get()
  findAll(): Promise<Fraccionamiento[]> {
    return this.fraccionamientoService.findAll();
  }

  @Get('forEstadoId/:estado_id')
  findForEstado(@Param('estado_id') estado_id: number) {
    return this.fraccionamientoService.findforEstado(estado_id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.fraccionamientoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFraccionamientoDto: UpdateFraccionamientoDto) {
    return this.fraccionamientoService.update(id, updateFraccionamientoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.fraccionamientoService.remove(id);
  }
}
