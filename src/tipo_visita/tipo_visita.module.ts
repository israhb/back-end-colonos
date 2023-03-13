import { Module } from '@nestjs/common';
import { TipoVisitaService } from './tipo_visita.service';
import { TipoVisitaController } from './tipo_visita.controller';
import { TipoVisita } from './entities/tipo_visita.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([TipoVisita])
  ],
  controllers: [TipoVisitaController],
  providers: [TipoVisitaService],
  exports:[TipoVisitaService]
})
export class TipoVisitaModule {}
