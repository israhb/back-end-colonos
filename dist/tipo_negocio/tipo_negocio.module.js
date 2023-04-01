"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoNegocioModule = void 0;
const common_1 = require("@nestjs/common");
const tipo_negocio_service_1 = require("./tipo_negocio.service");
const tipo_negocio_controller_1 = require("./tipo_negocio.controller");
const tipo_negocio_entity_1 = require("./entities/tipo_negocio.entity");
const typeorm_1 = require("@nestjs/typeorm");
let TipoNegocioModule = class TipoNegocioModule {
};
TipoNegocioModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tipo_negocio_entity_1.TipoNegocio])
        ],
        controllers: [tipo_negocio_controller_1.TipoNegocioController],
        providers: [tipo_negocio_service_1.TipoNegocioService],
        exports: [tipo_negocio_service_1.TipoNegocioService]
    })
], TipoNegocioModule);
exports.TipoNegocioModule = TipoNegocioModule;
//# sourceMappingURL=tipo_negocio.module.js.map