import { Module } from '@nestjs/common';
import { VisitaService } from './visita.service';
import { VisitaController } from './visita.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visita } from './entities/visita.entity';
import { ColonoModule } from 'src/colono/colono.module';
import { TipoVisitaModule } from 'src/tipo_visita/tipo_visita.module';
import { TipoServicioModule } from 'src/tipo_servicio/tipo_servicio.module';
import { TipoTransporteModule } from 'src/tipo_transporte/tipo_transporte.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Visita]),
    ColonoModule,
    TipoVisitaModule,
    TipoServicioModule,
    TipoTransporteModule
  ],
  controllers: [VisitaController],
  providers: [VisitaService],
  exports:[VisitaService]
})
export class VisitaModule {}
