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
exports.VisitaController = void 0;
const common_1 = require("@nestjs/common");
const visita_service_1 = require("./visita.service");
const create_visita_dto_1 = require("./dto/create-visita.dto");
const update_visita_dto_1 = require("./dto/update-visita.dto");
const swagger_1 = require("@nestjs/swagger");
let VisitaController = class VisitaController {
    constructor(visitaService) {
        this.visitaService = visitaService;
    }
    create(createVisitaDto) {
        return this.visitaService.create(createVisitaDto);
    }
    findAll() {
        return this.visitaService.findAll();
    }
    findOne(id) {
        return this.visitaService.findOne(id);
    }
    update(id, updateVisitaDto) {
        return this.visitaService.update(id, updateVisitaDto);
    }
    remove(id) {
        return this.visitaService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_visita_dto_1.CreateVisitaDto]),
    __metadata("design:returntype", void 0)
], VisitaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VisitaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VisitaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_visita_dto_1.UpdateVisitaDto]),
    __metadata("design:returntype", void 0)
], VisitaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VisitaController.prototype, "remove", null);
VisitaController = __decorate([
    (0, swagger_1.ApiTags)('visita'),
    (0, common_1.Controller)('visita'),
    __metadata("design:paramtypes", [visita_service_1.VisitaService])
], VisitaController);
exports.VisitaController = VisitaController;
//# sourceMappingURL=visita.controller.js.map