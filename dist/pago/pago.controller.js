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
exports.PagoController = void 0;
const common_1 = require("@nestjs/common");
const pago_service_1 = require("./pago.service");
const create_pago_dto_1 = require("./dto/create-pago.dto");
const update_pago_dto_1 = require("./dto/update-pago.dto");
const swagger_1 = require("@nestjs/swagger");
let PagoController = class PagoController {
    constructor(pagoService) {
        this.pagoService = pagoService;
    }
    create(createPagoDto) {
        return this.pagoService.create(createPagoDto);
    }
    getPagoColonoId(id) {
        return this.pagoService.getPagoColono(id);
    }
    findAll() {
        return this.pagoService.findAll();
    }
    findOne(id) {
        return this.pagoService.findOne(id);
    }
    update(id, updatePagoDto) {
        return this.pagoService.update(id, updatePagoDto);
    }
    remove(id) {
        return this.pagoService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pago_dto_1.CreatePagoDto]),
    __metadata("design:returntype", void 0)
], PagoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('pagoColono/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PagoController.prototype, "getPagoColonoId", null);
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PagoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PagoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_pago_dto_1.UpdatePagoDto]),
    __metadata("design:returntype", void 0)
], PagoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PagoController.prototype, "remove", null);
PagoController = __decorate([
    (0, swagger_1.ApiTags)('pago'),
    (0, common_1.Controller)('pago'),
    __metadata("design:paramtypes", [pago_service_1.PagoService])
], PagoController);
exports.PagoController = PagoController;
//# sourceMappingURL=pago.controller.js.map