import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PermisosService } from './permisos.service';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';
import { Permiso } from './entities/permiso.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('permisos')
@Controller('permisos')
export class PermisosController {
  constructor(private permisosService: PermisosService) {}

  @Post()
  create(@Body() createPermisoDto: CreatePermisoDto) {
    return this.permisosService.create(createPermisoDto);
  }

  @Get()
  findAll(): Promise<Permiso[]> {
    return this.permisosService.findAll();
  }

  @Get('permisosLevel/:level_id')
  findPermisosforLevel(@Param('level_id', ParseIntPipe) level_id: number) {
    return this.permisosService.findPermisosforLevel(level_id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.permisosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePermisoDto: UpdatePermisoDto) {
    return this.permisosService.update(id, updatePermisoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.permisosService.remove(id);
  }
}
