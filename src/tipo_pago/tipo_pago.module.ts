import { Module } from '@nestjs/common';
import { TipoPagoService } from './tipo_pago.service';
import { TipoPagoController } from './tipo_pago.controller';
import { TipoPago } from './entities/tipo_pago.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([TipoPago])
  ],
  controllers: [TipoPagoController],
  providers: [TipoPagoService],
  exports: [TipoPagoService]
})
export class TipoPagoModule {}
