import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { FolioService } from './folio.service';
import { CreateFolioDto } from './dto/create-folio.dto';
import { UpdateFolioDto } from './dto/update-folio.dto';
import { ApiTags } from '@nestjs/swagger';
import { Folio } from './entities/folio.entity';

@ApiTags('folio')
@Controller('folio')
export class FolioController {
  constructor(private folioService: FolioService) {}
/************************************** CRUD ************************************************ */
  @Post()
  create(@Body() createFolioDto: CreateFolioDto) {
    return this.folioService.create(createFolioDto);
  }

  @Get()
  findAll(): Promise<Folio[]> {
    return this.folioService.findAll();
  }
/****************************** APIS EXTRAS ****************************************** */
  @Get('noRegistrados')
  findNotRegister():Promise<Folio[]> {
    return this.folioService.getFoliosNoRegistrados()
  }
/****************************** APIS EXTRAS ****************************************** */

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.folioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFolioDto: UpdateFolioDto) {
    return this.folioService.update(id, updateFolioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.folioService.remove(id);
  }
/************************************** FIN CRUD ************************************************ */
}
