import { Module } from '@nestjs/common';
import { FraccionamientoService } from './fraccionamiento.service';
import { FraccionamientoController } from './fraccionamiento.controller';

@Module({
  controllers: [FraccionamientoController],
  providers: [FraccionamientoService]
})
export class FraccionamientoModule {}
