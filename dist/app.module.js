"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const constants_1 = require("./config/constants");
const estado_module_1 = require("./estado/estado.module");
const fraccionamiento_module_1 = require("./fraccionamiento/fraccionamiento.module");
const folio_module_1 = require("./folio/folio.module");
const level_module_1 = require("./level/level.module");
const tipo_comunicado_module_1 = require("./tipo_comunicado/tipo_comunicado.module");
const tipo_negocio_module_1 = require("./tipo_negocio/tipo_negocio.module");
const tipo_pago_module_1 = require("./tipo_pago/tipo_pago.module");
const tipo_servicio_module_1 = require("./tipo_servicio/tipo_servicio.module");
const tipo_transporte_module_1 = require("./tipo_transporte/tipo_transporte.module");
const tipo_visita_module_1 = require("./tipo_visita/tipo_visita.module");
const comunicado_module_1 = require("./comunicado/comunicado.module");
const moneda_module_1 = require("./moneda/moneda.module");
const colono_module_1 = require("./colono/colono.module");
const pago_module_1 = require("./pago/pago.module");
const login_count_module_1 = require("./login_count/login_count.module");
const negocio_module_1 = require("./negocio/negocio.module");
const visita_module_1 = require("./visita/visita.module");
const service_general_service_1 = require("./service-general/service-general/service-general.service");
const modulos_module_1 = require("./modulos/modulos.module");
const permisos_module_1 = require("./permisos/permisos.module");
const relacion_level_modulos_module_1 = require("./relacion_level_modulos/relacion_level_modulos.module");
const relacion_level_permisos_module_1 = require("./relacion_level_permisos/relacion_level_permisos.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get(constants_1.DB_HOST),
                    port: +configService.get(constants_1.DB_PORT),
                    username: configService.get(constants_1.DB_USERNAME),
                    password: configService.get(constants_1.DB_PASSWORD),
                    database: configService.get(constants_1.DB_NAME),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: false,
                    autoLoadEntities: true,
                }),
                inject: [config_1.ConfigService],
            }),
            estado_module_1.EstadoModule,
            fraccionamiento_module_1.FraccionamientoModule,
            folio_module_1.FolioModule,
            level_module_1.LevelModule,
            tipo_comunicado_module_1.TipoComunicadoModule,
            tipo_negocio_module_1.TipoNegocioModule,
            tipo_pago_module_1.TipoPagoModule,
            tipo_servicio_module_1.TipoServicioModule,
            tipo_transporte_module_1.TipoTransporteModule,
            tipo_visita_module_1.TipoVisitaModule,
            comunicado_module_1.ComunicadoModule,
            moneda_module_1.MonedaModule,
            colono_module_1.ColonoModule,
            pago_module_1.PagoModule,
            login_count_module_1.LoginCountModule,
            negocio_module_1.NegocioModule,
            visita_module_1.VisitaModule,
            modulos_module_1.ModulosModule,
            permisos_module_1.PermisosModule,
            relacion_level_modulos_module_1.RelacionLevelModulosModule,
            relacion_level_permisos_module_1.RelacionLevelPermisosModule
        ],
        controllers: [],
        providers: [service_general_service_1.ServiceGeneralService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map