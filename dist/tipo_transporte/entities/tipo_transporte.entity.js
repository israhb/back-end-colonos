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
exports.TipoTransporte = void 0;
const visita_entity_1 = require("../../visita/entities/visita.entity");
const typeorm_1 = require("typeorm");
let TipoTransporte = class TipoTransporte {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TipoTransporte.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false, unique: true }),
    __metadata("design:type", String)
], TipoTransporte.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TipoTransporte.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => visita_entity_1.Visita, visita => visita.tipo_transporte_id),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", visita_entity_1.Visita)
], TipoTransporte.prototype, "visita", void 0);
TipoTransporte = __decorate([
    (0, typeorm_1.Entity)({ name: 'tipo_transporte' })
], TipoTransporte);
exports.TipoTransporte = TipoTransporte;
//# sourceMappingURL=tipo_transporte.entity.js.map