import { Module } from '@nestjs/common';
import { FraccionamientoService } from './fraccionamiento.service';
import { FraccionamientoController } from './fraccionamiento.controller';
import { EstadoModule } from 'src/estado/estado.module';
import { Fraccionamiento } from './entities/fraccionamiento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([Fraccionamiento]), EstadoModule],
  controllers: [FraccionamientoController],
  providers: [FraccionamientoService],
  exports: [FraccionamientoService]
})
export class FraccionamientoModule {}
