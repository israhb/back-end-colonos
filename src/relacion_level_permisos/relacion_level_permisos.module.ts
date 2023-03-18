import { Module } from '@nestjs/common';
import { RelacionLevelPermisosService } from './relacion_level_permisos.service';
import { RelacionLevelPermisosController } from './relacion_level_permisos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelacionLevelPermiso } from './entities/relacion_level_permiso.entity';
import { LevelModule } from 'src/level/level.module';
import { PermisosModule } from 'src/permisos/permisos.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([RelacionLevelPermiso]),
    LevelModule,
    PermisosModule
  ],
  controllers: [RelacionLevelPermisosController],
  providers: [RelacionLevelPermisosService],
  exports:[RelacionLevelPermisosService]
})
export class RelacionLevelPermisosModule {}
