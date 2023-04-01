"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoPagoModule = void 0;
const common_1 = require("@nestjs/common");
const tipo_pago_service_1 = require("./tipo_pago.service");
const tipo_pago_controller_1 = require("./tipo_pago.controller");
const tipo_pago_entity_1 = require("./entities/tipo_pago.entity");
const typeorm_1 = require("@nestjs/typeorm");
let TipoPagoModule = class TipoPagoModule {
};
TipoPagoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tipo_pago_entity_1.TipoPago])
        ],
        controllers: [tipo_pago_controller_1.TipoPagoController],
        providers: [tipo_pago_service_1.TipoPagoService],
        exports: [tipo_pago_service_1.TipoPagoService]
    })
], TipoPagoModule);
exports.TipoPagoModule = TipoPagoModule;
//# sourceMappingURL=tipo_pago.module.js.map