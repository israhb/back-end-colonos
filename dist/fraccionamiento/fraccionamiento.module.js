"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FraccionamientoModule = void 0;
const common_1 = require("@nestjs/common");
const fraccionamiento_service_1 = require("./fraccionamiento.service");
const fraccionamiento_controller_1 = require("./fraccionamiento.controller");
const estado_module_1 = require("../estado/estado.module");
const fraccionamiento_entity_1 = require("./entities/fraccionamiento.entity");
const typeorm_1 = require("@nestjs/typeorm");
let FraccionamientoModule = class FraccionamientoModule {
};
FraccionamientoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([fraccionamiento_entity_1.Fraccionamiento]), estado_module_1.EstadoModule],
        controllers: [fraccionamiento_controller_1.FraccionamientoController],
        providers: [fraccionamiento_service_1.FraccionamientoService],
        exports: [fraccionamiento_service_1.FraccionamientoService]
    })
], FraccionamientoModule);
exports.FraccionamientoModule = FraccionamientoModule;
//# sourceMappingURL=fraccionamiento.module.js.map