"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagoModule = void 0;
const common_1 = require("@nestjs/common");
const pago_service_1 = require("./pago.service");
const pago_controller_1 = require("./pago.controller");
const typeorm_1 = require("@nestjs/typeorm");
const pago_entity_1 = require("./entities/pago.entity");
const colono_module_1 = require("../colono/colono.module");
const tipo_pago_module_1 = require("../tipo_pago/tipo_pago.module");
let PagoModule = class PagoModule {
};
PagoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([pago_entity_1.Pago]),
            colono_module_1.ColonoModule,
            tipo_pago_module_1.TipoPagoModule
        ],
        controllers: [pago_controller_1.PagoController],
        providers: [pago_service_1.PagoService],
        exports: [pago_service_1.PagoService]
    })
], PagoModule);
exports.PagoModule = PagoModule;
//# sourceMappingURL=pago.module.js.map