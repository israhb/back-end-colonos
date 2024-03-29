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
exports.UpdateEstadoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_estado_dto_1 = require("./create-estado.dto");
const class_validator_1 = require("class-validator");
class UpdateEstadoDto extends (0, swagger_1.PartialType)(create_estado_dto_1.CreateEstadoDto) {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], UpdateEstadoDto.prototype, "name", void 0);
exports.UpdateEstadoDto = UpdateEstadoDto;
//# sourceMappingURL=update-estado.dto.js.map