"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColonoModule = void 0;
const common_1 = require("@nestjs/common");
const colono_service_1 = require("./colono.service");
const colono_controller_1 = require("./colono.controller");
const typeorm_1 = require("@nestjs/typeorm");
const colono_entity_1 = require("./entities/colono.entity");
const folio_module_1 = require("../folio/folio.module");
const level_module_1 = require("../level/level.module");
const service_general_service_1 = require("../service-general/service-general/service-general.service");
const login_count_module_1 = require("../login_count/login_count.module");
const permisos_module_1 = require("../permisos/permisos.module");
const modulos_module_1 = require("../modulos/modulos.module");
let ColonoModule = class ColonoModule {
};
ColonoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([colono_entity_1.Colono]),
            folio_module_1.FolioModule,
            level_module_1.LevelModule,
            login_count_module_1.LoginCountModule,
            permisos_module_1.PermisosModule,
            modulos_module_1.ModulosModule
        ],
        controllers: [colono_controller_1.ColonoController],
        providers: [colono_service_1.ColonoService, service_general_service_1.ServiceGeneralService],
        exports: [colono_service_1.ColonoService]
    })
], ColonoModule);
exports.ColonoModule = ColonoModule;
//# sourceMappingURL=colono.module.js.map