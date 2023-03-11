import { Module } from '@nestjs/common';
import { TipoNegocioService } from './tipo_negocio.service';
import { TipoNegocioController } from './tipo_negocio.controller';
import { TipoNegocio } from './entities/tipo_negocio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([TipoNegocio])
  ],
  controllers: [TipoNegocioController],
  providers: [TipoNegocioService],
  exports: [TipoNegocioService]
})
export class TipoNegocioModule {}
