import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { NegocioService } from './negocio.service';
import { CreateNegocioDto } from './dto/create-negocio.dto';
import { UpdateNegocioDto } from './dto/update-negocio.dto';
import { ApiTags } from '@nestjs/swagger';
import { Negocio } from './entities/negocio.entity';

@ApiTags('negocio')
@Controller('negocio')
export class NegocioController {
  constructor(private negocioService: NegocioService) {}

  @Post()
  create(@Body() createNegocioDto: CreateNegocioDto) {
    return this.negocioService.create(createNegocioDto);
  }

  @Get()
  findAll(): Promise<Negocio[]> {
    return this.negocioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.negocioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateNegocioDto: UpdateNegocioDto) {
    return this.negocioService.update(id, updateNegocioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.negocioService.remove(id);
  }
}
