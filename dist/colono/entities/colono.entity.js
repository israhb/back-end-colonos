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
exports.Colono = void 0;
const comunicado_entity_1 = require("../../comunicado/entities/comunicado.entity");
const folio_entity_1 = require("../../folio/entities/folio.entity");
const level_entity_1 = require("../../level/entities/level.entity");
const negocio_entity_1 = require("../../negocio/entities/negocio.entity");
const pago_entity_1 = require("../../pago/entities/pago.entity");
const visita_entity_1 = require("../../visita/entities/visita.entity");
const typeorm_1 = require("typeorm");
let Colono = class Colono {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Colono.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'folio_id', type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Colono.prototype, "folio_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'level_id', type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Colono.prototype, "level_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Colono.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gps', type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Colono.prototype, "gps", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 12, nullable: false, unique: true }),
    __metadata("design:type", String)
], Colono.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Colono.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'apellido_materno', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Colono.prototype, "apellido_materno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'apellido_paterno', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Colono.prototype, "apellido_paterno", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Colono.prototype, "calle", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numero_exterior', type: 'varchar', length: 5, nullable: true }),
    __metadata("design:type", String)
], Colono.prototype, "numero_exterior", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numero_interior', type: 'varchar', length: 5, nullable: true }),
    __metadata("design:type", String)
], Colono.prototype, "numero_interior", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 5, nullable: true }),
    __metadata("design:type", String)
], Colono.prototype, "cp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Colono.prototype, "edificio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Colono.prototype, "manzana", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Colono.prototype, "lote", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Colono.prototype, "departamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Colono.prototype, "casa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1, default: 0 }),
    __metadata("design:type", String)
], Colono.prototype, "nuevo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1, default: 0 }),
    __metadata("design:type", String)
], Colono.prototype, "registrado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Colono.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', default: new Date(), nullable: false }),
    __metadata("design:type", String)
], Colono.prototype, "upload_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', default: '00:00:00', nullable: false }),
    __metadata("design:type", String)
], Colono.prototype, "upload_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Colono.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => folio_entity_1.Folio, folio => folio.id),
    (0, typeorm_1.JoinColumn)({ name: 'folio_id' }),
    __metadata("design:type", folio_entity_1.Folio)
], Colono.prototype, "folio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => level_entity_1.Level, level => level.id),
    (0, typeorm_1.JoinColumn)({ name: 'level_id' }),
    __metadata("design:type", level_entity_1.Level)
], Colono.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pago_entity_1.Pago, pago => pago.colono_id),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", pago_entity_1.Pago)
], Colono.prototype, "pago", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comunicado_entity_1.Comunicado, comunicado => comunicado.colono_id),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", comunicado_entity_1.Comunicado)
], Colono.prototype, "comunicado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => negocio_entity_1.Negocio, negocio => negocio.colono_id),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", negocio_entity_1.Negocio)
], Colono.prototype, "negocio", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => visita_entity_1.Visita, visita => visita.colono_id),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", negocio_entity_1.Negocio)
], Colono.prototype, "visita", void 0);
Colono = __decorate([
    (0, typeorm_1.Entity)({ name: 'colono' })
], Colono);
exports.Colono = Colono;
//# sourceMappingURL=colono.entity.js.map