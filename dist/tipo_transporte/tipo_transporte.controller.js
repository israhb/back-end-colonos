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
exports.TipoTransporteController = void 0;
const common_1 = require("@nestjs/common");
const tipo_transporte_service_1 = require("./tipo_transporte.service");
const create_tipo_transporte_dto_1 = require("./dto/create-tipo_transporte.dto");
const update_tipo_transporte_dto_1 = require("./dto/update-tipo_transporte.dto");
const swagger_1 = require("@nestjs/swagger");
let TipoTransporteController = class TipoTransporteController {
    constructor(tipoTransporteService) {
        this.tipoTransporteService = tipoTransporteService;
    }
    create(createTipoTransporteDto) {
        return this.tipoTransporteService.create(createTipoTransporteDto);
    }
    findAll() {
        return this.tipoTransporteService.findAll();
    }
    findOne(id) {
        return this.tipoTransporteService.findOne(id);
    }
    update(id, updateTipoTransporteDto) {
        return this.tipoTransporteService.update(id, updateTipoTransporteDto);
    }
    remove(id) {
        return this.tipoTransporteService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipo_transporte_dto_1.CreateTipoTransporteDto]),
    __metadata("design:returntype", void 0)
], TipoTransporteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TipoTransporteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipoTransporteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tipo_transporte_dto_1.UpdateTipoTransporteDto]),
    __metadata("design:returntype", void 0)
], TipoTransporteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipoTransporteController.prototype, "remove", null);
TipoTransporteController = __decorate([
    (0, swagger_1.ApiTags)('tipo_transporte'),
    (0, common_1.Controller)('tipo-transporte'),
    __metadata("design:paramtypes", [tipo_transporte_service_1.TipoTransporteService])
], TipoTransporteController);
exports.TipoTransporteController = TipoTransporteController;
//# sourceMappingURL=tipo_transporte.controller.js.map