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
exports.Estado = void 0;
const folio_entity_1 = require("../../folio/entities/folio.entity");
const fraccionamiento_entity_1 = require("../../fraccionamiento/entities/fraccionamiento.entity");
const typeorm_1 = require("typeorm");
let Estado = class Estado {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Estado.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false, unique: true }),
    __metadata("design:type", String)
], Estado.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Estado.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => fraccionamiento_entity_1.Fraccionamiento, fraccionamiento => fraccionamiento.estado_id),
    __metadata("design:type", Array)
], Estado.prototype, "fraccionamientos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => folio_entity_1.Folio, folio => folio.estado_id),
    __metadata("design:type", Array)
], Estado.prototype, "folio", void 0);
Estado = __decorate([
    (0, typeorm_1.Entity)({ name: 'estado' })
], Estado);
exports.Estado = Estado;
//# sourceMappingURL=estado.entity.js.map