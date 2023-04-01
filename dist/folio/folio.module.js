"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolioModule = void 0;
const common_1 = require("@nestjs/common");
const folio_service_1 = require("./folio.service");
const folio_controller_1 = require("./folio.controller");
const folio_entity_1 = require("./entities/folio.entity");
const typeorm_1 = require("@nestjs/typeorm");
const fraccionamiento_module_1 = require("../fraccionamiento/fraccionamiento.module");
const estado_module_1 = require("../estado/estado.module");
let FolioModule = class FolioModule {
};
FolioModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([folio_entity_1.Folio]), fraccionamiento_module_1.FraccionamientoModule, estado_module_1.EstadoModule],
        controllers: [folio_controller_1.FolioController],
        providers: [folio_service_1.FolioService],
        exports: [folio_service_1.FolioService]
    })
], FolioModule);
exports.FolioModule = FolioModule;
//# sourceMappingURL=folio.module.js.map