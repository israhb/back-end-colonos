import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TipoPagoService } from './tipo_pago.service';
import { CreateTipoPagoDto } from './dto/create-tipo_pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo_pago.dto';
import { ApiTags } from '@nestjs/swagger';
import { TipoPago } from './entities/tipo_pago.entity';

@ApiTags('tipo_pago')
@Controller('tipo-pago')
export class TipoPagoController {
  constructor(private tipoPagoService: TipoPagoService) {}

  @Post()
  create(@Body() createTipoPagoDto: CreateTipoPagoDto) {
    return this.tipoPagoService.create(createTipoPagoDto);
  }

  @Get()
  findAll():Promise<TipoPago[]> {
    return this.tipoPagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tipoPagoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTipoPagoDto: UpdateTipoPagoDto) {
    return this.tipoPagoService.update(id, updateTipoPagoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoPagoService.remove(id);
  }
}
