import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RelacionLevelPermisosService } from './relacion_level_permisos.service';
import { CreateRelacionLevelPermisoDto } from './dto/create-relacion_level_permiso.dto';
import { UpdateRelacionLevelPermisoDto } from './dto/update-relacion_level_permiso.dto';
import { RelacionLevelPermiso } from './entities/relacion_level_permiso.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('relacion-nivel-permisos')
@Controller('relacion-level-permisos')
export class RelacionLevelPermisosController {
  constructor(private relacionLevelPermisosService: RelacionLevelPermisosService) {}

  @Post()
  create(@Body() createRelacionLevelPermisoDto: CreateRelacionLevelPermisoDto) {
    return this.relacionLevelPermisosService.create(createRelacionLevelPermisoDto);
  }

  @Get()
  findAll(): Promise<RelacionLevelPermiso[]> {
    return this.relacionLevelPermisosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.relacionLevelPermisosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateRelacionLevelPermisoDto: UpdateRelacionLevelPermisoDto) {
    return this.relacionLevelPermisosService.update(id, updateRelacionLevelPermisoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.relacionLevelPermisosService.remove(id);
  }
}
