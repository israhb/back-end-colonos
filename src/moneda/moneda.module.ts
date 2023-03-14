import { Module } from '@nestjs/common';
import { MonedaService } from './moneda.service';
import { MonedaController } from './moneda.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moneda } from './entities/moneda.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Moneda])
  ],
  controllers: [MonedaController],
  providers: [MonedaService],
  exports: [MonedaService]
})
export class MonedaModule {}
