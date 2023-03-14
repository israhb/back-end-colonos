import { Module } from '@nestjs/common';
import { ComunicadoService } from './comunicado.service';
import { ComunicadoController } from './comunicado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comunicado } from './entities/comunicado.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Comunicado])
  ],
  controllers: [ComunicadoController],
  providers: [ComunicadoService],
  exports:[ComunicadoService]
})
export class ComunicadoModule {}
