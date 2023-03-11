import { Module } from '@nestjs/common';
import { FolioService } from './folio.service';
import { FolioController } from './folio.controller';
import { Folio } from './entities/folio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FraccionamientoModule } from 'src/fraccionamiento/fraccionamiento.module';
import { EstadoModule } from 'src/estado/estado.module';

@Module({
  imports: [ TypeOrmModule.forFeature([Folio]), FraccionamientoModule, EstadoModule],
  controllers: [FolioController],
  providers: [FolioService],
  exports:[FolioService]
})
export class FolioModule {}
