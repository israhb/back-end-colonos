import { Module } from '@nestjs/common';
import { RelacionLevelModulosService } from './relacion_level_modulos.service';
import { RelacionLevelModulosController } from './relacion_level_modulos.controller';
import { RelacionLevelModulo } from './entities/relacion_level_modulo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelModule } from 'src/level/level.module';
import { ModulosModule } from 'src/modulos/modulos.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([RelacionLevelModulo]),
    LevelModule,
    ModulosModule
  ],
  controllers: [RelacionLevelModulosController],
  providers: [RelacionLevelModulosService],
  exports:[RelacionLevelModulosService]
})
export class RelacionLevelModulosModule {}
