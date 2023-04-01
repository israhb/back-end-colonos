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
exports.Folio = void 0;
const colono_entity_1 = require("../../colono/entities/colono.entity");
const estado_entity_1 = require("../../estado/entities/estado.entity");
const fraccionamiento_entity_1 = require("../../fraccionamiento/entities/fraccionamiento.entity");
const typeorm_1 = require("typeorm");
let Folio = class Folio {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Folio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false, unique: true }),
    __metadata("design:type", String)
], Folio.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true, unique: true }),
    __metadata("design:type", String)
], Folio.prototype, "mac", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Folio.prototype, "nuevo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', default: new Date(), nullable: false }),
    __metadata("design:type", String)
], Folio.prototype, "upload_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', default: '00:00:00', nullable: false }),
    __metadata("design:type", String)
], Folio.prototype, "upload_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Folio.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estado_id' }),
    __metadata("design:type", Number)
], Folio.prototype, "estado_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'frac_id' }),
    __metadata("design:type", Number)
], Folio.prototype, "frac_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estado_entity_1.Estado, estado => estado.id),
    (0, typeorm_1.JoinColumn)({ name: 'estado_id' }),
    __metadata("design:type", estado_entity_1.Estado)
], Folio.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => fraccionamiento_entity_1.Fraccionamiento, fraccionamiento => fraccionamiento.id),
    (0, typeorm_1.JoinColumn)({ name: 'frac_id' }),
    __metadata("design:type", fraccionamiento_entity_1.Fraccionamiento)
], Folio.prototype, "fraccionamiento", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => colono_entity_1.Colono, colono => colono.folio_id),
    (0, typeorm_1.JoinColumn)({ name: 'folio_id' }),
    __metadata("design:type", Array)
], Folio.prototype, "colono", void 0);
Folio = __decorate([
    (0, typeorm_1.Entity)({ name: 'folio' })
], Folio);
exports.Folio = Folio;
//# sourceMappingURL=folio.entity.js.map