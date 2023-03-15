import { Module } from '@nestjs/common';
import { PagoService } from './pago.service';
import { PagoController } from './pago.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pago } from './entities/pago.entity';
import { ColonoModule } from 'src/colono/colono.module';
import { TipoPagoModule } from 'src/tipo_pago/tipo_pago.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Pago]),
    ColonoModule,
    TipoPagoModule
  ],
  controllers: [PagoController],
  providers: [PagoService],
  exports:[PagoService]
})
export class PagoModule {}
