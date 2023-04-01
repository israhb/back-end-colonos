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
exports.Pago = void 0;
const colono_entity_1 = require("../../colono/entities/colono.entity");
const tipo_pago_entity_1 = require("../../tipo_pago/entities/tipo_pago.entity");
const typeorm_1 = require("typeorm");
let Pago = class Pago {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pago.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'colono_id', type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Pago.prototype, "colono_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_pago_id', type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Pago.prototype, "tipo_pago_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: false, unique: true }),
    __metadata("design:type", String)
], Pago.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Pago.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', default: new Date(), nullable: false }),
    __metadata("design:type", String)
], Pago.prototype, "upload_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', default: '00:00:00', nullable: false }),
    __metadata("design:type", String)
], Pago.prototype, "upload_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pago.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => colono_entity_1.Colono, colono => colono.id),
    (0, typeorm_1.JoinColumn)({ name: 'colono_id' }),
    __metadata("design:type", colono_entity_1.Colono)
], Pago.prototype, "colono", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_pago_entity_1.TipoPago, tipo_pago => tipo_pago.id),
    (0, typeorm_1.JoinColumn)({ name: 'tipo_pago_id' }),
    __metadata("design:type", tipo_pago_entity_1.TipoPago)
], Pago.prototype, "tipoPago", void 0);
Pago = __decorate([
    (0, typeorm_1.Entity)({ name: 'pago' })
], Pago);
exports.Pago = Pago;
//# sourceMappingURL=pago.entity.js.map