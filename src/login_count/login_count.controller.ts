import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { LoginCountService } from './login_count.service';
import { CreateLoginCountDto } from './dto/create-login_count.dto';
import { UpdateLoginCountDto } from './dto/update-login_count.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginCount } from './entities/login_count.entity';

@ApiTags('login_count')
@Controller('login-count')
export class LoginCountController {
  constructor(private loginCountService: LoginCountService) {}

  @Post()
  create(@Body() createLoginCountDto: CreateLoginCountDto) {
    return this.loginCountService.create(createLoginCountDto);
  }

  @Get()
  findAll(): Promise<LoginCount[]> {
    return this.loginCountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.loginCountService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateLoginCountDto: UpdateLoginCountDto) {
    return this.loginCountService.update(id, updateLoginCountDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.loginCountService.remove(id);
  }
}
