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
exports.Negocio = void 0;
const colono_entity_1 = require("../../colono/entities/colono.entity");
const tipo_negocio_entity_1 = require("../../tipo_negocio/entities/tipo_negocio.entity");
const typeorm_1 = require("typeorm");
let Negocio = class Negocio {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Negocio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_negocio_id', nullable: false }),
    __metadata("design:type", Number)
], Negocio.prototype, "tipo_negocio_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'colono_id', nullable: false }),
    __metadata("design:type", Number)
], Negocio.prototype, "colono_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: false, unique: true }),
    __metadata("design:type", String)
], Negocio.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'telefono_1', type: 'varchar', length: 12, nullable: false }),
    __metadata("design:type", String)
], Negocio.prototype, "telefono_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'telefono_2', type: 'varchar', length: 12 }),
    __metadata("design:type", String)
], Negocio.prototype, "telefono_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'foto_1', type: 'text' }),
    __metadata("design:type", String)
], Negocio.prototype, "foto_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'foto_2', type: 'text' }),
    __metadata("design:type", String)
], Negocio.prototype, "foto_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'foto_3', type: 'text' }),
    __metadata("design:type", String)
], Negocio.prototype, "foto_3", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'foto_4', type: 'text' }),
    __metadata("design:type", String)
], Negocio.prototype, "foto_4", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], Negocio.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', default: new Date(), nullable: false }),
    __metadata("design:type", String)
], Negocio.prototype, "upload_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', default: '00:00:00', nullable: false }),
    __metadata("design:type", String)
], Negocio.prototype, "upload_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Negocio.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => colono_entity_1.Colono, colono => colono.id),
    (0, typeorm_1.JoinColumn)({ name: 'colono_id' }),
    __metadata("design:type", colono_entity_1.Colono)
], Negocio.prototype, "colono", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_negocio_entity_1.TipoNegocio, tipo_negocio => tipo_negocio.id),
    (0, typeorm_1.JoinColumn)({ name: 'tipo_negocio_id' }),
    __metadata("design:type", tipo_negocio_entity_1.TipoNegocio)
], Negocio.prototype, "tipoNegocio", void 0);
Negocio = __decorate([
    (0, typeorm_1.Entity)({ name: 'negocio' })
], Negocio);
exports.Negocio = Negocio;
//# sourceMappingURL=negocio.entity.js.map