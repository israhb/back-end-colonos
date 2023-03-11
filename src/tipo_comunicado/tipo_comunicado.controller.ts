import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TipoComunicadoService } from './tipo_comunicado.service';
import { CreateTipoComunicadoDto } from './dto/create-tipo_comunicado.dto';
import { UpdateTipoComunicadoDto } from './dto/update-tipo_comunicado.dto';
import { ApiTags } from '@nestjs/swagger';
import { TipoComunicado } from './entities/tipo_comunicado.entity';

@ApiTags('tipo_comunicado')
@Controller('tipo-comunicado')
export class TipoComunicadoController {
  constructor(private tipoComunicadoService: TipoComunicadoService) {}

  @Post()
  create(@Body() createTipoComunicadoDto: CreateTipoComunicadoDto) {
    return this.tipoComunicadoService.create(createTipoComunicadoDto);
  }

  @Get()
  findAll():Promise<TipoComunicado[]> {
    return this.tipoComunicadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tipoComunicadoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTipoComunicadoDto: UpdateTipoComunicadoDto) {
    return this.tipoComunicadoService.update(id, updateTipoComunicadoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoComunicadoService.remove(id);
  }
}
