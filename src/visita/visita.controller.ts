import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { VisitaService } from './visita.service';
import { CreateVisitaDto } from './dto/create-visita.dto';
import { UpdateVisitaDto } from './dto/update-visita.dto';
import { ApiTags } from '@nestjs/swagger';
import { Visita } from './entities/visita.entity';

@ApiTags('visita')
@Controller('visita')
export class VisitaController {
  constructor(private visitaService: VisitaService) {}

  @Post()
  create(@Body() createVisitaDto: CreateVisitaDto) {
    return this.visitaService.create(createVisitaDto);
  }

  @Get()
  findAll(): Promise<Visita[]> {
    return this.visitaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.visitaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateVisitaDto: UpdateVisitaDto) {
    return this.visitaService.update(id, updateVisitaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.visitaService.remove(id);
  }
}
