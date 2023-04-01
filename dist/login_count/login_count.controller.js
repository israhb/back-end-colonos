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
exports.LoginCountController = void 0;
const common_1 = require("@nestjs/common");
const login_count_service_1 = require("./login_count.service");
const create_login_count_dto_1 = require("./dto/create-login_count.dto");
const update_login_count_dto_1 = require("./dto/update-login_count.dto");
const swagger_1 = require("@nestjs/swagger");
let LoginCountController = class LoginCountController {
    constructor(loginCountService) {
        this.loginCountService = loginCountService;
    }
    create(createLoginCountDto) {
        return this.loginCountService.create(createLoginCountDto);
    }
    findAll() {
        return this.loginCountService.findAll();
    }
    findFolioMac(body) {
        return this.loginCountService.findAllFolioMac(body);
    }
    findFolios(body) {
        return this.loginCountService.findAllFolio(body);
    }
    findOneFolioMac(id) {
        return this.loginCountService.findOne(id);
    }
    update(id, updateLoginCountDto) {
        return this.loginCountService.update(id, updateLoginCountDto);
    }
    remove(id) {
        return this.loginCountService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_login_count_dto_1.CreateLoginCountDto]),
    __metadata("design:returntype", void 0)
], LoginCountController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LoginCountController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('getfolioMac'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LoginCountController.prototype, "findFolioMac", null);
__decorate([
    (0, common_1.Post)('getfolios'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LoginCountController.prototype, "findFolios", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LoginCountController.prototype, "findOneFolioMac", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_login_count_dto_1.UpdateLoginCountDto]),
    __metadata("design:returntype", void 0)
], LoginCountController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LoginCountController.prototype, "remove", null);
LoginCountController = __decorate([
    (0, swagger_1.ApiTags)('login_count'),
    (0, common_1.Controller)('login-count'),
    __metadata("design:paramtypes", [login_count_service_1.LoginCountService])
], LoginCountController);
exports.LoginCountController = LoginCountController;
//# sourceMappingURL=login_count.controller.js.map