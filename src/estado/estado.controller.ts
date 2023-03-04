import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EstadoService } from './estado.service';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { ApiTags } from '@nestjs/swagger';
import { Estado } from './entities/estado.entity';

@ApiTags('estado')
@Controller('estado')
export class EstadoController {
  constructor(private estadoService: EstadoService) {}

  @Post()
  create(@Body() createEstadoDto: CreateEstadoDto) {
    return this.estadoService.create(createEstadoDto);
  }

  @Get()
  findAll(): Promise<Estado[]> {
    return this.estadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.estadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateEstadoDto: UpdateEstadoDto) {
    return this.estadoService.update(id, updateEstadoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.estadoService.remove(id);
  }
}
