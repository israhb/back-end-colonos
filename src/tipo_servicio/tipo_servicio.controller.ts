import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TipoServicioService } from './tipo_servicio.service';
import { CreateTipoServicioDto } from './dto/create-tipo_servicio.dto';
import { UpdateTipoServicioDto } from './dto/update-tipo_servicio.dto';
import { ApiTags } from '@nestjs/swagger';
import { TipoServicio } from './entities/tipo_servicio.entity';

@ApiTags('tipo_servicio')
@Controller('tipo-servicio')
export class TipoServicioController {
  constructor(private tipoServicioService: TipoServicioService) {}

  @Post()
  create(@Body() createTipoServicioDto: CreateTipoServicioDto) {
    return this.tipoServicioService.create(createTipoServicioDto);
  }

  @Get()
  findAll(): Promise<TipoServicio[]> {
    return this.tipoServicioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tipoServicioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTipoServicioDto: UpdateTipoServicioDto) {
    return this.tipoServicioService.update(id, updateTipoServicioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoServicioService.remove(id);
  }
}
