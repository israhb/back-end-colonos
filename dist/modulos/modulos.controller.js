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
exports.ModulosController = void 0;
const common_1 = require("@nestjs/common");
const modulos_service_1 = require("./modulos.service");
const create_modulo_dto_1 = require("./dto/create-modulo.dto");
const update_modulo_dto_1 = require("./dto/update-modulo.dto");
const swagger_1 = require("@nestjs/swagger");
let ModulosController = class ModulosController {
    constructor(modulosService) {
        this.modulosService = modulosService;
    }
    create(createModuloDto) {
        return this.modulosService.create(createModuloDto);
    }
    findAll() {
        return this.modulosService.findAll();
    }
    findPermisosforLevel(level_id) {
        return this.modulosService.findModulosforLevel(level_id);
    }
    findOne(id) {
        return this.modulosService.findOne(id);
    }
    update(id, updateModuloDto) {
        return this.modulosService.update(id, updateModuloDto);
    }
    remove(id) {
        return this.modulosService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_modulo_dto_1.CreateModuloDto]),
    __metadata("design:returntype", void 0)
], ModulosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModulosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('modulosLevel/:level_id'),
    __param(0, (0, common_1.Param)('level_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ModulosController.prototype, "findPermisosforLevel", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ModulosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_modulo_dto_1.UpdateModuloDto]),
    __metadata("design:returntype", void 0)
], ModulosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ModulosController.prototype, "remove", null);
ModulosController = __decorate([
    (0, swagger_1.ApiTags)('modulos'),
    (0, common_1.Controller)('modulos'),
    __metadata("design:paramtypes", [modulos_service_1.ModulosService])
], ModulosController);
exports.ModulosController = ModulosController;
//# sourceMappingURL=modulos.controller.js.map