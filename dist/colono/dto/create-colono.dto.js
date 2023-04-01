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
exports.CreateColonoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateColonoDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateColonoDto.prototype, "folio_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateColonoDto.prototype, "level_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateColonoDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 12),
    __metadata("design:type", String)
], CreateColonoDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateColonoDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreateColonoDto.prototype, "apellido_materno", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreateColonoDto.prototype, "apellido_paterno", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreateColonoDto.prototype, "calle", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 5),
    __metadata("design:type", String)
], CreateColonoDto.prototype, "numero_exterior", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 5),
    __metadata("design:type", String)
], CreateColonoDto.prototype, "numero_interior", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 5),
    __metadata("design:type", String)
], CreateColonoDto.prototype, "cp", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 10),
    __metadata("design:type", String)
], CreateColonoDto.prototype, "edificio", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 10),
    __metadata("design:type", String)
], CreateColonoDto.prototype, "manzana", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 10),
    __metadata("design:type", String)
], CreateColonoDto.prototype, "lote", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 10),
    __metadata("design:type", String)
], CreateColonoDto.prototype, "departamento", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 10),
    __metadata("design:type", String)
], CreateColonoDto.prototype, "casa", void 0);
exports.CreateColonoDto = CreateColonoDto;
//# sourceMappingURL=create-colono.dto.js.map