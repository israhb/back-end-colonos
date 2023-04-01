"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelacionLevelPermisosModule = void 0;
const common_1 = require("@nestjs/common");
const relacion_level_permisos_service_1 = require("./relacion_level_permisos.service");
const relacion_level_permisos_controller_1 = require("./relacion_level_permisos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const relacion_level_permiso_entity_1 = require("./entities/relacion_level_permiso.entity");
const level_module_1 = require("../level/level.module");
const permisos_module_1 = require("../permisos/permisos.module");
let RelacionLevelPermisosModule = class RelacionLevelPermisosModule {
};
RelacionLevelPermisosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([relacion_level_permiso_entity_1.RelacionLevelPermiso]),
            level_module_1.LevelModule,
            permisos_module_1.PermisosModule
        ],
        controllers: [relacion_level_permisos_controller_1.RelacionLevelPermisosController],
        providers: [relacion_level_permisos_service_1.RelacionLevelPermisosService],
        exports: [relacion_level_permisos_service_1.RelacionLevelPermisosService]
    })
], RelacionLevelPermisosModule);
exports.RelacionLevelPermisosModule = RelacionLevelPermisosModule;
//# sourceMappingURL=relacion_level_permisos.module.js.map