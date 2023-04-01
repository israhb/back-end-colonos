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
exports.TipoNegocio = void 0;
const negocio_entity_1 = require("../../negocio/entities/negocio.entity");
const typeorm_1 = require("typeorm");
let TipoNegocio = class TipoNegocio {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TipoNegocio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false, unique: true }),
    __metadata("design:type", String)
], TipoNegocio.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TipoNegocio.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => negocio_entity_1.Negocio, negocio => negocio.tipo_negocio_id),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", negocio_entity_1.Negocio)
], TipoNegocio.prototype, "negocio", void 0);
TipoNegocio = __decorate([
    (0, typeorm_1.Entity)({ name: 'tipo_negocio' })
], TipoNegocio);
exports.TipoNegocio = TipoNegocio;
//# sourceMappingURL=tipo_negocio.entity.js.map