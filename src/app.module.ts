import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from './config/constants';
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
import { ComunicadoModule } from './comunicado/comunicado.module';
import { MonedaModule } from './moneda/moneda.module';
import { ColonoModule } from './colono/colono.module';
import { PagoModule } from './pago/pago.module';
import { LoginCountModule } from './login_count/login_count.module';
import { NegocioModule } from './negocio/negocio.module';
import { VisitaModule } from './visita/visita.module';
import { ServiceGeneralService } from './service-general/service-general/service-general.service';
import { ModulosModule } from './modulos/modulos.module';
import { PermisosModule } from './permisos/permisos.module';
import { RelacionLevelModulosModule } from './relacion_level_modulos/relacion_level_modulos.module';
import { RelacionLevelPermisosModule } from './relacion_level_permisos/relacion_level_permisos.module';

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
    EstadoModule,
    FraccionamientoModule,
    FolioModule,
    LevelModule,
    TipoComunicadoModule,
    TipoNegocioModule,
    TipoPagoModule,
    TipoServicioModule,
    TipoTransporteModule,
    TipoVisitaModule,
    ComunicadoModule,
    MonedaModule,
    ColonoModule,
    PagoModule,
    LoginCountModule,
    NegocioModule,
    VisitaModule,
    ModulosModule,
    PermisosModule,
    RelacionLevelModulosModule,
    RelacionLevelPermisosModule
  ],
  controllers: [],
  providers: [ServiceGeneralService],
})
export class AppModule {}
