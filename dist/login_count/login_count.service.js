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
exports.LoginCountService = void 0;
const common_1 = require("@nestjs/common");
const login_count_entity_1 = require("./entities/login_count.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let LoginCountService = class LoginCountService {
    constructor(loginCountRepository) {
        this.loginCountRepository = loginCountRepository;
    }
    async create(createLoginCountDto) {
        const newLoginCount = this.loginCountRepository.create(createLoginCountDto);
        return this.loginCountRepository.save(newLoginCount);
    }
    findAll() {
        return this.loginCountRepository.find();
    }
    async findAllFolioMac(body) {
        const loginCountFound = await this.loginCountRepository.findOne({
            where: {
                folio: body.name,
                mac: body.mac
            }
        });
        if (!loginCountFound) {
            return false;
        }
        return loginCountFound;
    }
    findAllFolio(body) {
        return this.loginCountRepository.find({
            where: {
                folio: body.name
            }
        });
    }
    async findOne(id) {
        const loginCountFound = await this.loginCountRepository.findOne({
            where: {
                id
            }
        });
        if (!loginCountFound) {
            return new common_1.HttpException('Login Count no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return loginCountFound;
    }
    async update(id, updateLoginCountDto) {
        const loginCountFound = await this.loginCountRepository.findOne({
            where: {
                id
            }
        });
        if (!loginCountFound) {
            return new common_1.HttpException('Login Count no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return this.loginCountRepository.update({ id }, updateLoginCountDto);
    }
    async remove(id) {
        const loginCountFound = await this.loginCountRepository.findOne({
            where: {
                id
            }
        });
        if (!loginCountFound) {
            return new common_1.HttpException('Login Count no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return this.loginCountRepository.delete(id);
    }
};
LoginCountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(login_count_entity_1.LoginCount)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], LoginCountService);
exports.LoginCountService = LoginCountService;
//# sourceMappingURL=login_count.service.js.map