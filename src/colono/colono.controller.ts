import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ColonoService } from './colono.service';
import { CreateColonoDto } from './dto/create-colono.dto';
import { UpdateColonoDto } from './dto/update-colono.dto';
import { Colono } from './entities/colono.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('colono')
@Controller('colono')
export class ColonoController {
  constructor(private colonoService: ColonoService) {}

  @Post()
  create(@Body() createColonoDto: CreateColonoDto) {
    return this.colonoService.create(createColonoDto);
  }

  @Get()
  findAll(): Promise<Colono[]> {
    return this.colonoService.findAll();
  }

  @Get('level-colono')
  findAllColonos(): Promise<Colono[]> {
    return this.colonoService.findAllTipoColonosLevel();
  }

  @Post('registrarColonoData')
  registerColonoData(@Body() body: any) {
    return this.colonoService.registerColonoData(body);
  }
  
  @Post('registrarColono')
  registerColono(@Body() body: any) {
    return this.colonoService.registerColono(body);
  }

  @Post('loginColono')
  loginColono(@Body() body: any) {
    return this.colonoService.loginColono(body);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.colonoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateColonoDto: UpdateColonoDto) {
    return this.colonoService.update(id, updateColonoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.colonoService.remove(id);
  }
}
