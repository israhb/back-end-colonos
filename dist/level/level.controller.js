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
exports.LevelController = void 0;
const common_1 = require("@nestjs/common");
const level_service_1 = require("./level.service");
const create_level_dto_1 = require("./dto/create-level.dto");
const update_level_dto_1 = require("./dto/update-level.dto");
const swagger_1 = require("@nestjs/swagger");
let LevelController = class LevelController {
    constructor(levelService) {
        this.levelService = levelService;
    }
    create(createLevelDto) {
        return this.levelService.create(createLevelDto);
    }
    findAll() {
        return this.levelService.findAll();
    }
    findOne(id) {
        return this.levelService.findOne(id);
    }
    update(id, updateLevelDto) {
        return this.levelService.update(id, updateLevelDto);
    }
    remove(id) {
        return this.levelService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_level_dto_1.CreateLevelDto]),
    __metadata("design:returntype", void 0)
], LevelController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LevelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LevelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_level_dto_1.UpdateLevelDto]),
    __metadata("design:returntype", void 0)
], LevelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LevelController.prototype, "remove", null);
LevelController = __decorate([
    (0, swagger_1.ApiTags)('level'),
    (0, common_1.Controller)('level'),
    __metadata("design:paramtypes", [level_service_1.LevelService])
], LevelController);
exports.LevelController = LevelController;
//# sourceMappingURL=level.controller.js.map