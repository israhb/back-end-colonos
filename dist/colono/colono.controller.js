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
exports.ColonoController = void 0;
const common_1 = require("@nestjs/common");
const colono_service_1 = require("./colono.service");
const create_colono_dto_1 = require("./dto/create-colono.dto");
const update_colono_dto_1 = require("./dto/update-colono.dto");
const swagger_1 = require("@nestjs/swagger");
let ColonoController = class ColonoController {
    constructor(colonoService) {
        this.colonoService = colonoService;
    }
    create(createColonoDto) {
        return this.colonoService.create(createColonoDto);
    }
    findAll() {
        return this.colonoService.findAll();
    }
    findAllColonos() {
        return this.colonoService.findAllTipoColonosLevel();
    }
    registerColonoData(body) {
        return this.colonoService.registerColonoData(body);
    }
    registerColono(body) {
        return this.colonoService.registerColono(body);
    }
    loginColono(body) {
        return this.colonoService.loginColono(body);
    }
    findOne(id) {
        return this.colonoService.findOne(id);
    }
    update(id, updateColonoDto) {
        return this.colonoService.update(id, updateColonoDto);
    }
    remove(id) {
        return this.colonoService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_colono_dto_1.CreateColonoDto]),
    __metadata("design:returntype", void 0)
], ColonoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ColonoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('level-colono'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ColonoController.prototype, "findAllColonos", null);
__decorate([
    (0, common_1.Post)('registrarColonoData'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ColonoController.prototype, "registerColonoData", null);
__decorate([
    (0, common_1.Post)('registrarColono'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ColonoController.prototype, "registerColono", null);
__decorate([
    (0, common_1.Post)('loginColono'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ColonoController.prototype, "loginColono", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ColonoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_colono_dto_1.UpdateColonoDto]),
    __metadata("design:returntype", void 0)
], ColonoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ColonoController.prototype, "remove", null);
ColonoController = __decorate([
    (0, swagger_1.ApiTags)('colono'),
    (0, common_1.Controller)('colono'),
    __metadata("design:paramtypes", [colono_service_1.ColonoService])
], ColonoController);
exports.ColonoController = ColonoController;
//# sourceMappingURL=colono.controller.js.map