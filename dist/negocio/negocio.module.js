"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegocioModule = void 0;
const common_1 = require("@nestjs/common");
const negocio_service_1 = require("./negocio.service");
const negocio_controller_1 = require("./negocio.controller");
const typeorm_1 = require("@nestjs/typeorm");
const negocio_entity_1 = require("./entities/negocio.entity");
const tipo_negocio_module_1 = require("../tipo_negocio/tipo_negocio.module");
const colono_module_1 = require("../colono/colono.module");
let NegocioModule = class NegocioModule {
};
NegocioModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([negocio_entity_1.Negocio]),
            tipo_negocio_module_1.TipoNegocioModule,
            colono_module_1.ColonoModule
        ],
        controllers: [negocio_controller_1.NegocioController],
        providers: [negocio_service_1.NegocioService],
        exports: [negocio_service_1.NegocioService]
    })
], NegocioModule);
exports.NegocioModule = NegocioModule;
//# sourceMappingURL=negocio.module.js.map