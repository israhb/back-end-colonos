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
exports.ComunicadoController = void 0;
const common_1 = require("@nestjs/common");
const comunicado_service_1 = require("./comunicado.service");
const create_comunicado_dto_1 = require("./dto/create-comunicado.dto");
const update_comunicado_dto_1 = require("./dto/update-comunicado.dto");
const swagger_1 = require("@nestjs/swagger");
let ComunicadoController = class ComunicadoController {
    constructor(comunicadoService) {
        this.comunicadoService = comunicadoService;
    }
    create(createComunicadoDto) {
        return this.comunicadoService.create(createComunicadoDto);
    }
    findAll() {
        return this.comunicadoService.findAll();
    }
    findOne(id) {
        return this.comunicadoService.findOne(id);
    }
    update(id, updateComunicadoDto) {
        return this.comunicadoService.update(id, updateComunicadoDto);
    }
    remove(id) {
        return this.comunicadoService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comunicado_dto_1.CreateComunicadoDto]),
    __metadata("design:returntype", void 0)
], ComunicadoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComunicadoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ComunicadoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_comunicado_dto_1.UpdateComunicadoDto]),
    __metadata("design:returntype", void 0)
], ComunicadoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ComunicadoController.prototype, "remove", null);
ComunicadoController = __decorate([
    (0, swagger_1.ApiTags)('comunicado'),
    (0, common_1.Controller)('comunicado'),
    __metadata("design:paramtypes", [comunicado_service_1.ComunicadoService])
], ComunicadoController);
exports.ComunicadoController = ComunicadoController;
//# sourceMappingURL=comunicado.controller.js.map