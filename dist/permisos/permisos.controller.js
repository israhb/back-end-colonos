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
exports.PermisosController = void 0;
const common_1 = require("@nestjs/common");
const permisos_service_1 = require("./permisos.service");
const create_permiso_dto_1 = require("./dto/create-permiso.dto");
const update_permiso_dto_1 = require("./dto/update-permiso.dto");
const swagger_1 = require("@nestjs/swagger");
let PermisosController = class PermisosController {
    constructor(permisosService) {
        this.permisosService = permisosService;
    }
    create(createPermisoDto) {
        return this.permisosService.create(createPermisoDto);
    }
    findAll() {
        return this.permisosService.findAll();
    }
    findPermisosforLevel(level_id) {
        return this.permisosService.findPermisosforLevel(level_id);
    }
    findOne(id) {
        return this.permisosService.findOne(id);
    }
    update(id, updatePermisoDto) {
        return this.permisosService.update(id, updatePermisoDto);
    }
    remove(id) {
        return this.permisosService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_permiso_dto_1.CreatePermisoDto]),
    __metadata("design:returntype", void 0)
], PermisosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PermisosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('permisosLevel/:level_id'),
    __param(0, (0, common_1.Param)('level_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PermisosController.prototype, "findPermisosforLevel", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PermisosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_permiso_dto_1.UpdatePermisoDto]),
    __metadata("design:returntype", void 0)
], PermisosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PermisosController.prototype, "remove", null);
PermisosController = __decorate([
    (0, swagger_1.ApiTags)('permisos'),
    (0, common_1.Controller)('permisos'),
    __metadata("design:paramtypes", [permisos_service_1.PermisosService])
], PermisosController);
exports.PermisosController = PermisosController;
//# sourceMappingURL=permisos.controller.js.map