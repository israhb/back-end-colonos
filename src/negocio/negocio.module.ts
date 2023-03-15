import { Module } from '@nestjs/common';
import { NegocioService } from './negocio.service';
import { NegocioController } from './negocio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Negocio } from './entities/negocio.entity';
import { TipoNegocioModule } from 'src/tipo_negocio/tipo_negocio.module';
import { ColonoModule } from 'src/colono/colono.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Negocio]),
    TipoNegocioModule,
    ColonoModule
  ],
  controllers: [NegocioController],
  providers: [NegocioService],
  exports:[NegocioService]
})
export class NegocioModule {}
