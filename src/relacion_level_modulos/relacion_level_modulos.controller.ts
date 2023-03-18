import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RelacionLevelModulosService } from './relacion_level_modulos.service';
import { CreateRelacionLevelModuloDto } from './dto/create-relacion_level_modulo.dto';
import { UpdateRelacionLevelModuloDto } from './dto/update-relacion_level_modulo.dto';
import { RelacionLevelModulo } from './entities/relacion_level_modulo.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('relacion-nivel-permisos')
@Controller('relacion-level-modulos')
export class RelacionLevelModulosController {
  constructor(private relacionLevelModulosService: RelacionLevelModulosService) {}

  @Post()
  create(@Body() createRelacionLevelModuloDto: CreateRelacionLevelModuloDto) {
    return this.relacionLevelModulosService.create(createRelacionLevelModuloDto);
  }

  @Get()
  findAll(): Promise<RelacionLevelModulo[]> {
    return this.relacionLevelModulosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.relacionLevelModulosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateRelacionLevelModuloDto: UpdateRelacionLevelModuloDto) {
    return this.relacionLevelModulosService.update(id, updateRelacionLevelModuloDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.relacionLevelModulosService.remove(id);
  }
}
