import { Module } from '@nestjs/common';
import { TipoTransporteService } from './tipo_transporte.service';
import { TipoTransporteController } from './tipo_transporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoTransporte } from './entities/tipo_transporte.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([TipoTransporte])
  ],
  controllers: [TipoTransporteController],
  providers: [TipoTransporteService],
  exports:[TipoTransporteService]
})
export class TipoTransporteModule {}
