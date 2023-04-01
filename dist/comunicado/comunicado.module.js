"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComunicadoModule = void 0;
const common_1 = require("@nestjs/common");
const comunicado_service_1 = require("./comunicado.service");
const comunicado_controller_1 = require("./comunicado.controller");
const typeorm_1 = require("@nestjs/typeorm");
const comunicado_entity_1 = require("./entities/comunicado.entity");
const tipo_comunicado_module_1 = require("../tipo_comunicado/tipo_comunicado.module");
const colono_module_1 = require("../colono/colono.module");
let ComunicadoModule = class ComunicadoModule {
};
ComunicadoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([comunicado_entity_1.Comunicado]),
            tipo_comunicado_module_1.TipoComunicadoModule,
            colono_module_1.ColonoModule
        ],
        controllers: [comunicado_controller_1.ComunicadoController],
        providers: [comunicado_service_1.ComunicadoService],
        exports: [comunicado_service_1.ComunicadoService]
    })
], ComunicadoModule);
exports.ComunicadoModule = ComunicadoModule;
//# sourceMappingURL=comunicado.module.js.map