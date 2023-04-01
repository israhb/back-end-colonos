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
exports.FraccionamientoController = void 0;
const common_1 = require("@nestjs/common");
const fraccionamiento_service_1 = require("./fraccionamiento.service");
const create_fraccionamiento_dto_1 = require("./dto/create-fraccionamiento.dto");
const update_fraccionamiento_dto_1 = require("./dto/update-fraccionamiento.dto");
const swagger_1 = require("@nestjs/swagger");
let FraccionamientoController = class FraccionamientoController {
    constructor(fraccionamientoService) {
        this.fraccionamientoService = fraccionamientoService;
    }
    create(createFraccionamientoDto) {
        return this.fraccionamientoService.create(createFraccionamientoDto);
    }
    findAll() {
        return this.fraccionamientoService.findAll();
    }
    findForEstado(estado_id) {
        return this.fraccionamientoService.findforEstado(estado_id);
    }
    findOne(id) {
        return this.fraccionamientoService.findOne(id);
    }
    update(id, updateFraccionamientoDto) {
        return this.fraccionamientoService.update(id, updateFraccionamientoDto);
    }
    remove(id) {
        return this.fraccionamientoService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fraccionamiento_dto_1.CreateFraccionamientoDto]),
    __metadata("design:returntype", void 0)
], FraccionamientoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FraccionamientoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('forEstadoId/:estado_id'),
    __param(0, (0, common_1.Param)('estado_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FraccionamientoController.prototype, "findForEstado", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FraccionamientoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_fraccionamiento_dto_1.UpdateFraccionamientoDto]),
    __metadata("design:returntype", void 0)
], FraccionamientoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FraccionamientoController.prototype, "remove", null);
FraccionamientoController = __decorate([
    (0, swagger_1.ApiTags)('fraccionamiento'),
    (0, common_1.Controller)('fraccionamiento'),
    __metadata("design:paramtypes", [fraccionamiento_service_1.FraccionamientoService])
], FraccionamientoController);
exports.FraccionamientoController = FraccionamientoController;
//# sourceMappingURL=fraccionamiento.controller.js.map