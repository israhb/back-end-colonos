import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from './config/constants';
import { AuthModule } from './auth/auth.module';
import { EstadoModule } from './estado/estado.module';
import { FraccionamientoModule } from './fraccionamiento/fraccionamiento.module';
import { FolioModule } from './folio/folio.module';
import { LevelModule } from './level/level.module';
import { TipoComunicadoModule } from './tipo_comunicado/tipo_comunicado.module';
import { TipoNegocioModule } from './tipo_negocio/tipo_negocio.module';
import { TipoPagoModule } from './tipo_pago/tipo_pago.module';
import { TipoServicioModule } from './tipo_servicio/tipo_servicio.module';
import { TipoTransporteModule } from './tipo_transporte/tipo_transporte.module';
import { TipoVisitaModule } from './tipo_visita/tipo_visita.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USERNAME),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_NAME),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    EstadoModule,
    FraccionamientoModule,
    FolioModule,
    LevelModule,
    TipoComunicadoModule,
    TipoNegocioModule,
    TipoPagoModule,
    TipoServicioModule,
    TipoTransporteModule,
    TipoVisitaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
