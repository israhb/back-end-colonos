"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoPago = void 0;
const pago_entity_1 = require("../../pago/entities/pago.entity");
const typeorm_1 = require("typeorm");
let TipoPago = class TipoPago {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TipoPago.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false, unique: true }),
    __metadata("design:type", String)
], TipoPago.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TipoPago.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pago_entity_1.Pago, pago => pago.tipo_pago_id),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", pago_entity_1.Pago)
], TipoPago.prototype, "pago", void 0);
TipoPago = __decorate([
    (0, typeorm_1.Entity)({ name: 'tipo_pago' })
], TipoPago);
exports.TipoPago = TipoPago;
//# sourceMappingURL=tipo_pago.entity.js.map