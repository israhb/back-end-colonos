import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ComunicadoService } from './comunicado.service';
import { CreateComunicadoDto } from './dto/create-comunicado.dto';
import { UpdateComunicadoDto } from './dto/update-comunicado.dto';
import { ApiTags } from '@nestjs/swagger';
import { Comunicado } from './entities/comunicado.entity';

@ApiTags('comunicado')
@Controller('comunicado')
export class ComunicadoController {
  constructor(private comunicadoService: ComunicadoService) {}

  @Post()
  create(@Body() createComunicadoDto: CreateComunicadoDto) {
    return this.comunicadoService.create(createComunicadoDto);
  }

  @Get()
  findAll(): Promise<Comunicado[]> {
    return this.comunicadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.comunicadoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateComunicadoDto: UpdateComunicadoDto) {
    return this.comunicadoService.update(id, updateComunicadoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.comunicadoService.remove(id);
  }
}
