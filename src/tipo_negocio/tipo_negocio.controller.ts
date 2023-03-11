import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TipoNegocioService } from './tipo_negocio.service';
import { CreateTipoNegocioDto } from './dto/create-tipo_negocio.dto';
import { UpdateTipoNegocioDto } from './dto/update-tipo_negocio.dto';
import { ApiTags } from '@nestjs/swagger';
import { TipoNegocio } from './entities/tipo_negocio.entity';

@ApiTags('tipo_negocio')
@Controller('tipo-negocio')
export class TipoNegocioController {
  constructor(private tipoNegocioService: TipoNegocioService) {}

  @Post()
  create(@Body() createTipoNegocioDto: CreateTipoNegocioDto) {
    return this.tipoNegocioService.create(createTipoNegocioDto);
  }

  @Get()
  findAll():Promise<TipoNegocio[]> {
    return this.tipoNegocioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tipoNegocioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTipoNegocioDto: UpdateTipoNegocioDto) {
    return this.tipoNegocioService.update(id, updateTipoNegocioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoNegocioService.remove(id);
  }
}
