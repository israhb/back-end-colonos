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
exports.Visita = void 0;
const colono_entity_1 = require("../../colono/entities/colono.entity");
const tipo_servicio_entity_1 = require("../../tipo_servicio/entities/tipo_servicio.entity");
const tipo_transporte_entity_1 = require("../../tipo_transporte/entities/tipo_transporte.entity");
const tipo_visita_entity_1 = require("../../tipo_visita/entities/tipo_visita.entity");
const typeorm_1 = require("typeorm");
let Visita = class Visita {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Visita.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'colono_id', nullable: false }),
    __metadata("design:type", Number)
], Visita.prototype, "colono_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_visita_id', nullable: false }),
    __metadata("design:type", Number)
], Visita.prototype, "tipo_visita_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_servicio_id', nullable: false }),
    __metadata("design:type", Number)
], Visita.prototype, "tipo_servicio_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_transporte_id', nullable: false }),
    __metadata("design:type", Number)
], Visita.prototype, "tipo_transporte_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: false }),
    __metadata("design:type", String)
], Visita.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'visita_date', type: 'date', default: new Date(), nullable: false }),
    __metadata("design:type", String)
], Visita.prototype, "visita_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'visita_time', type: 'time', default: '00:00:00', nullable: false }),
    __metadata("design:type", String)
], Visita.prototype, "visita_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numero_acom', nullable: false }),
    __metadata("design:type", Number)
], Visita.prototype, "numero_acom", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Visita.prototype, "evento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], Visita.prototype, "placas", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Visita.prototype, "nota", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Visita.prototype, "gps", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Visita.prototype, "hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', default: new Date(), nullable: false }),
    __metadata("design:type", String)
], Visita.prototype, "upload_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', default: '00:00:00', nullable: false }),
    __metadata("design:type", String)
], Visita.prototype, "upload_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Visita.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => colono_entity_1.Colono, colono => colono.id),
    (0, typeorm_1.JoinColumn)({ name: 'colono_id' }),
    __metadata("design:type", colono_entity_1.Colono)
], Visita.prototype, "colono", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_visita_entity_1.TipoVisita, tipo_visita => tipo_visita.id),
    (0, typeorm_1.JoinColumn)({ name: 'tipo_visita_id' }),
    __metadata("design:type", tipo_visita_entity_1.TipoVisita)
], Visita.prototype, "tipoVisita", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_servicio_entity_1.TipoServicio, tipo_servicio => tipo_servicio.id),
    (0, typeorm_1.JoinColumn)({ name: 'tipo_servicio_id' }),
    __metadata("design:type", tipo_servicio_entity_1.TipoServicio)
], Visita.prototype, "tipoServicio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_transporte_entity_1.TipoTransporte, tipo_transporte => tipo_transporte.id),
    (0, typeorm_1.JoinColumn)({ name: 'tipo_transporte_id' }),
    __metadata("design:type", tipo_transporte_entity_1.TipoTransporte)
], Visita.prototype, "tipoTransporte", void 0);
Visita = __decorate([
    (0, typeorm_1.Entity)({ name: 'visita' })
], Visita);
exports.Visita = Visita;
//# sourceMappingURL=visita.entity.js.map