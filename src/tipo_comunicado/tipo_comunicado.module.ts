import { Module } from '@nestjs/common';
import { TipoComunicadoService } from './tipo_comunicado.service';
import { TipoComunicadoController } from './tipo_comunicado.controller';
import { TipoComunicado } from './entities/tipo_comunicado.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([TipoComunicado])
  ],
  controllers: [TipoComunicadoController],
  providers: [TipoComunicadoService],
  exports:[TipoComunicadoService]
})
export class TipoComunicadoModule {}
