import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TipoTransporteService } from './tipo_transporte.service';
import { CreateTipoTransporteDto } from './dto/create-tipo_transporte.dto';
import { UpdateTipoTransporteDto } from './dto/update-tipo_transporte.dto';
import { ApiTags } from '@nestjs/swagger';
import { TipoTransporte } from './entities/tipo_transporte.entity';

@ApiTags('tipo_transporte')
@Controller('tipo-transporte')
export class TipoTransporteController {
  constructor(private tipoTransporteService: TipoTransporteService) {}

  @Post()
  create(@Body() createTipoTransporteDto: CreateTipoTransporteDto) {
    return this.tipoTransporteService.create(createTipoTransporteDto);
  }

  @Get()
  findAll(): Promise<TipoTransporte[]> {
    return this.tipoTransporteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tipoTransporteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTipoTransporteDto: UpdateTipoTransporteDto) {
    return this.tipoTransporteService.update(id, updateTipoTransporteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoTransporteService.remove(id);
  }
}
