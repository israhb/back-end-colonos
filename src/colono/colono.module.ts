import { Module } from '@nestjs/common';
import { ColonoService } from './colono.service';
import { ColonoController } from './colono.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colono } from './entities/colono.entity';
import { FolioModule } from 'src/folio/folio.module';
import { LevelModule } from 'src/level/level.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Colono]),
    FolioModule,
    LevelModule
  ],
  controllers: [ColonoController],
  providers: [ColonoService],
  exports:[ColonoService]
})
export class ColonoModule {}
