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
exports.FolioController = void 0;
const common_1 = require("@nestjs/common");
const folio_service_1 = require("./folio.service");
const create_folio_dto_1 = require("./dto/create-folio.dto");
const update_folio_dto_1 = require("./dto/update-folio.dto");
const swagger_1 = require("@nestjs/swagger");
let FolioController = class FolioController {
    constructor(folioService) {
        this.folioService = folioService;
    }
    create(createFolioDto) {
        return this.folioService.create(createFolioDto);
    }
    findAll() {
        return this.folioService.findAll();
    }
    findNotRegister() {
        return this.folioService.getFoliosNoRegistrados();
    }
    findOneName(name) {
        return this.folioService.findName(name);
    }
    findOne(id) {
        return this.folioService.findOne(id);
    }
    update(id, updateFolioDto) {
        return this.folioService.update(id, updateFolioDto);
    }
    remove(id) {
        return this.folioService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_folio_dto_1.CreateFolioDto]),
    __metadata("design:returntype", void 0)
], FolioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FolioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('noRegistrados'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FolioController.prototype, "findNotRegister", null);
__decorate([
    (0, common_1.Get)('porNombre/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FolioController.prototype, "findOneName", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FolioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_folio_dto_1.UpdateFolioDto]),
    __metadata("design:returntype", void 0)
], FolioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FolioController.prototype, "remove", null);
FolioController = __decorate([
    (0, swagger_1.ApiTags)('folio'),
    (0, common_1.Controller)('folio'),
    __metadata("design:paramtypes", [folio_service_1.FolioService])
], FolioController);
exports.FolioController = FolioController;
//# sourceMappingURL=folio.controller.js.map