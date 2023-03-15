import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PagoService } from './pago.service';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { ApiTags } from '@nestjs/swagger';
import { Pago } from './entities/pago.entity';

@ApiTags('pago')
@Controller('pago')
export class PagoController {
  constructor(private pagoService: PagoService) {}

  @Post()
  create(@Body() createPagoDto: CreatePagoDto) {
    return this.pagoService.create(createPagoDto);
  }

  @Get()
  findAll(): Promise<Pago[]> {
    return this.pagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pagoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePagoDto: UpdatePagoDto) {
    return this.pagoService.update(id, updatePagoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pagoService.remove(id);
  }
}
