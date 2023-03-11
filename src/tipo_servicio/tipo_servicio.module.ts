import { Module } from '@nestjs/common';
import { TipoServicioService } from './tipo_servicio.service';
import { TipoServicioController } from './tipo_servicio.controller';
import { TipoServicio } from './entities/tipo_servicio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([TipoServicio])
  ],
  controllers: [TipoServicioController],
  providers: [TipoServicioService],
  exports: [TipoServicioService]
})
export class TipoServicioModule {}
