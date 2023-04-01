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
exports.Level = void 0;
const colono_entity_1 = require("../../colono/entities/colono.entity");
const typeorm_1 = require("typeorm");
let Level = class Level {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Level.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false, unique: true }),
    __metadata("design:type", String)
], Level.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Level.prototype, "code_level", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Level.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => colono_entity_1.Colono, colono => colono.folio_id),
    __metadata("design:type", Array)
], Level.prototype, "colono", void 0);
Level = __decorate([
    (0, typeorm_1.Entity)({ name: 'level' })
], Level);
exports.Level = Level;
//# sourceMappingURL=level.entity.js.map