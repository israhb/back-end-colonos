"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoVisitaModule = void 0;
const common_1 = require("@nestjs/common");
const tipo_visita_service_1 = require("./tipo_visita.service");
const tipo_visita_controller_1 = require("./tipo_visita.controller");
const tipo_visita_entity_1 = require("./entities/tipo_visita.entity");
const typeorm_1 = require("@nestjs/typeorm");
let TipoVisitaModule = class TipoVisitaModule {
};
TipoVisitaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tipo_visita_entity_1.TipoVisita])
        ],
        controllers: [tipo_visita_controller_1.TipoVisitaController],
        providers: [tipo_visita_service_1.TipoVisitaService],
        exports: [tipo_visita_service_1.TipoVisitaService]
    })
], TipoVisitaModule);
exports.TipoVisitaModule = TipoVisitaModule;
//# sourceMappingURL=tipo_visita.module.js.map