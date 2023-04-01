"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitaModule = void 0;
const common_1 = require("@nestjs/common");
const visita_service_1 = require("./visita.service");
const visita_controller_1 = require("./visita.controller");
const typeorm_1 = require("@nestjs/typeorm");
const visita_entity_1 = require("./entities/visita.entity");
const colono_module_1 = require("../colono/colono.module");
const tipo_visita_module_1 = require("../tipo_visita/tipo_visita.module");
const tipo_servicio_module_1 = require("../tipo_servicio/tipo_servicio.module");
const tipo_transporte_module_1 = require("../tipo_transporte/tipo_transporte.module");
let VisitaModule = class VisitaModule {
};
VisitaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([visita_entity_1.Visita]),
            colono_module_1.ColonoModule,
            tipo_visita_module_1.TipoVisitaModule,
            tipo_servicio_module_1.TipoServicioModule,
            tipo_transporte_module_1.TipoTransporteModule
        ],
        controllers: [visita_controller_1.VisitaController],
        providers: [visita_service_1.VisitaService],
        exports: [visita_service_1.VisitaService]
    })
], VisitaModule);
exports.VisitaModule = VisitaModule;
//# sourceMappingURL=visita.module.js.map