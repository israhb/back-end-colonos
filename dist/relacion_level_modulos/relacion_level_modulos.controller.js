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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelacionLevelModulosController = void 0;
const common_1 = require("@nestjs/common");
const relacion_level_modulos_service_1 = require("./relacion_level_modulos.service");
const create_relacion_level_modulo_dto_1 = require("./dto/create-relacion_level_modulo.dto");
const update_relacion_level_modulo_dto_1 = require("./dto/update-relacion_level_modulo.dto");
const swagger_1 = require("@nestjs/swagger");
let RelacionLevelModulosController = class RelacionLevelModulosController {
    constructor(relacionLevelModulosService) {
        this.relacionLevelModulosService = relacionLevelModulosService;
    }
    create(createRelacionLevelModuloDto) {
        return this.relacionLevelModulosService.create(createRelacionLevelModuloDto);
    }
    findAll() {
        return this.relacionLevelModulosService.findAll();
    }
    findOne(id) {
        return this.relacionLevelModulosService.findOne(id);
    }
    update(id, updateRelacionLevelModuloDto) {
        return this.relacionLevelModulosService.update(id, updateRelacionLevelModuloDto);
    }
    remove(id) {
        return this.relacionLevelModulosService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_relacion_level_modulo_dto_1.CreateRelacionLevelModuloDto]),
    __metadata("design:returntype", void 0)
], RelacionLevelModulosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RelacionLevelModulosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RelacionLevelModulosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_relacion_level_modulo_dto_1.UpdateRelacionLevelModuloDto]),
    __metadata("design:returntype", void 0)
], RelacionLevelModulosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RelacionLevelModulosController.prototype, "remove", null);
RelacionLevelModulosController = __decorate([
    (0, swagger_1.ApiTags)('relacion-nivel-modulos'),
    (0, common_1.Controller)('relacion-level-modulos'),
    __metadata("design:paramtypes", [relacion_level_modulos_service_1.RelacionLevelModulosService])
], RelacionLevelModulosController);
exports.RelacionLevelModulosController = RelacionLevelModulosController;
//# sourceMappingURL=relacion_level_modulos.controller.js.map