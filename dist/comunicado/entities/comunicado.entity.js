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
exports.Comunicado = void 0;
const colono_entity_1 = require("../../colono/entities/colono.entity");
const tipo_comunicado_entity_1 = require("../../tipo_comunicado/entities/tipo_comunicado.entity");
const typeorm_1 = require("typeorm");
let Comunicado = class Comunicado {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Comunicado.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_comunicado_id', type: 'int' }),
    __metadata("design:type", Number)
], Comunicado.prototype, "tipo_comunicado_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'colono_id', type: 'int' }),
    __metadata("design:type", Number)
], Comunicado.prototype, "colono_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false, unique: true }),
    __metadata("design:type", String)
], Comunicado.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'foto_1', type: 'text' }),
    __metadata("design:type", String)
], Comunicado.prototype, "foto_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'foto_2', type: 'text' }),
    __metadata("design:type", String)
], Comunicado.prototype, "foto_2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Comunicado.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => colono_entity_1.Colono, colono => colono.id),
    (0, typeorm_1.JoinColumn)({ name: 'colono_id' }),
    __metadata("design:type", colono_entity_1.Colono)
], Comunicado.prototype, "colono", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_comunicado_entity_1.TipoComunicado, tipo_comunicado => tipo_comunicado.id),
    (0, typeorm_1.JoinColumn)({ name: 'tipo_comunicado_id' }),
    __metadata("design:type", tipo_comunicado_entity_1.TipoComunicado)
], Comunicado.prototype, "tipoComunicado", void 0);
Comunicado = __decorate([
    (0, typeorm_1.Entity)({ name: 'comunicado' })
], Comunicado);
exports.Comunicado = Comunicado;
//# sourceMappingURL=comunicado.entity.js.map