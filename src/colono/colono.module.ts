import { Module } from '@nestjs/common';
import { ColonoService } from './colono.service';
import { ColonoController } from './colono.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colono } from './entities/colono.entity';
import { FolioModule } from 'src/folio/folio.module';
import { LevelModule } from 'src/level/level.module';
import { ServiceGeneralService } from 'src/service-general/service-general/service-general.service';
import { LoginCountModule } from 'src/login_count/login_count.module';
import { PermisosModule } from 'src/permisos/permisos.module';
import { ModulosModule } from 'src/modulos/modulos.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Colono]),
    FolioModule,
    LevelModule,
    LoginCountModule,
    PermisosModule,
    ModulosModule
  ],
  controllers: [ColonoController],
  providers: [ColonoService, ServiceGeneralService],
  exports:[ColonoService]
})
export class ColonoModule {}
