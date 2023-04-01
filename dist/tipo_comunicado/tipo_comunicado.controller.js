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
exports.TipoComunicadoController = void 0;
const common_1 = require("@nestjs/common");
const tipo_comunicado_service_1 = require("./tipo_comunicado.service");
const create_tipo_comunicado_dto_1 = require("./dto/create-tipo_comunicado.dto");
const update_tipo_comunicado_dto_1 = require("./dto/update-tipo_comunicado.dto");
const swagger_1 = require("@nestjs/swagger");
let TipoComunicadoController = class TipoComunicadoController {
    constructor(tipoComunicadoService) {
        this.tipoComunicadoService = tipoComunicadoService;
    }
    create(createTipoComunicadoDto) {
        return this.tipoComunicadoService.create(createTipoComunicadoDto);
    }
    findAll() {
        return this.tipoComunicadoService.findAll();
    }
    findOne(id) {
        return this.tipoComunicadoService.findOne(id);
    }
    update(id, updateTipoComunicadoDto) {
        return this.tipoComunicadoService.update(id, updateTipoComunicadoDto);
    }
    remove(id) {
        return this.tipoComunicadoService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipo_comunicado_dto_1.CreateTipoComunicadoDto]),
    __metadata("design:returntype", void 0)
], TipoComunicadoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TipoComunicadoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipoComunicadoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tipo_comunicado_dto_1.UpdateTipoComunicadoDto]),
    __metadata("design:returntype", void 0)
], TipoComunicadoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipoComunicadoController.prototype, "remove", null);
TipoComunicadoController = __decorate([
    (0, swagger_1.ApiTags)('tipo_comunicado'),
    (0, common_1.Controller)('tipo-comunicado'),
    __metadata("design:paramtypes", [tipo_comunicado_service_1.TipoComunicadoService])
], TipoComunicadoController);
exports.TipoComunicadoController = TipoComunicadoController;
//# sourceMappingURL=tipo_comunicado.controller.js.map