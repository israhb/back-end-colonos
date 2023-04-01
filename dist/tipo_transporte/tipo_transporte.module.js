"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoTransporteModule = void 0;
const common_1 = require("@nestjs/common");
const tipo_transporte_service_1 = require("./tipo_transporte.service");
const tipo_transporte_controller_1 = require("./tipo_transporte.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tipo_transporte_entity_1 = require("./entities/tipo_transporte.entity");
let TipoTransporteModule = class TipoTransporteModule {
};
TipoTransporteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tipo_transporte_entity_1.TipoTransporte])
        ],
        controllers: [tipo_transporte_controller_1.TipoTransporteController],
        providers: [tipo_transporte_service_1.TipoTransporteService],
        exports: [tipo_transporte_service_1.TipoTransporteService]
    })
], TipoTransporteModule);
exports.TipoTransporteModule = TipoTransporteModule;
//# sourceMappingURL=tipo_transporte.module.js.map