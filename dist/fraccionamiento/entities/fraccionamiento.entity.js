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
exports.Fraccionamiento = void 0;
const estado_entity_1 = require("../../estado/entities/estado.entity");
const folio_entity_1 = require("../../folio/entities/folio.entity");
const typeorm_1 = require("typeorm");
let Fraccionamiento = class Fraccionamiento {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Fraccionamiento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false, unique: true }),
    __metadata("design:type", String)
], Fraccionamiento.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Fraccionamiento.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estado_id' }),
    __metadata("design:type", Number)
], Fraccionamiento.prototype, "estado_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estado_entity_1.Estado, estado => estado.id),
    (0, typeorm_1.JoinColumn)({ name: 'estado_id' }),
    __metadata("design:type", estado_entity_1.Estado)
], Fraccionamiento.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => folio_entity_1.Folio, folio => folio.estado_id),
    __metadata("design:type", Array)
], Fraccionamiento.prototype, "folio", void 0);
Fraccionamiento = __decorate([
    (0, typeorm_1.Entity)({ name: 'fraccionamiento' })
], Fraccionamiento);
exports.Fraccionamiento = Fraccionamiento;
//# sourceMappingURL=fraccionamiento.entity.js.map