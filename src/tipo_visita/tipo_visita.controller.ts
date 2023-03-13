import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TipoVisitaService } from './tipo_visita.service';
import { CreateTipoVisitaDto } from './dto/create-tipo_visita.dto';
import { UpdateTipoVisitaDto } from './dto/update-tipo_visita.dto';
import { ApiTags } from '@nestjs/swagger';
import { TipoVisita } from './entities/tipo_visita.entity';

@ApiTags('tipo_visita')
@Controller('tipo-visita')
export class TipoVisitaController {
  constructor(private tipoVisitaService: TipoVisitaService) {}

  @Post()
  create(@Body() createTipoVisitaDto: CreateTipoVisitaDto) {
    return this.tipoVisitaService.create(createTipoVisitaDto);
  }

  @Get()
  findAll(): Promise<TipoVisita[]> {
    return this.tipoVisitaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tipoVisitaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTipoVisitaDto: UpdateTipoVisitaDto) {
    return this.tipoVisitaService.update(id, updateTipoVisitaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoVisitaService.remove(id);
  }
}
