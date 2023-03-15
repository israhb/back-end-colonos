import { Module } from '@nestjs/common';
import { ComunicadoService } from './comunicado.service';
import { ComunicadoController } from './comunicado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comunicado } from './entities/comunicado.entity';
import { TipoComunicadoModule } from 'src/tipo_comunicado/tipo_comunicado.module';
import { ColonoModule } from 'src/colono/colono.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Comunicado]),
    TipoComunicadoModule,
    ColonoModule
  ],
  controllers: [ComunicadoController],
  providers: [ComunicadoService],
  exports:[ComunicadoService]
})
export class ComunicadoModule {}
