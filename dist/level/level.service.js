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
exports.LevelService = void 0;
const common_1 = require("@nestjs/common");
const level_entity_1 = require("./entities/level.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let LevelService = class LevelService {
    constructor(levelRepository) {
        this.levelRepository = levelRepository;
    }
    async create(createLevelDto) {
        const levelFound = await this.levelRepository.findOne({
            where: {
                name: createLevelDto.name
            }
        });
        if (levelFound) {
            if (levelFound.activo === 0) {
                levelFound.activo = 1;
                const id = levelFound.id;
                this.levelRepository.update({ id }, levelFound);
                return levelFound;
            }
            return new common_1.HttpException('Nivel ingresado ya existe en la base', common_1.HttpStatus.CONFLICT);
        }
        const newLevel = this.levelRepository.create(createLevelDto);
        return this.levelRepository.save(newLevel);
    }
    findAll() {
        return this.levelRepository.find({
            where: {
                activo: 1
            }
        });
    }
    async findOne(id) {
        const levelFound = await this.levelRepository.findOne({
            where: {
                id
            }
        });
        if (!levelFound) {
            return new common_1.HttpException('Nivel no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return levelFound;
    }
    async update(id, updateLevelDto) {
        const levelFound = await this.levelRepository.findOne({
            where: {
                id
            }
        });
        if (!levelFound) {
            return new common_1.HttpException('Nivel no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return this.levelRepository.update({ id }, updateLevelDto);
    }
    async remove(id) {
        const levelFound = await this.levelRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!levelFound) {
            return new common_1.HttpException('Nivel no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        levelFound.activo = 0;
        return this.levelRepository.update({ id }, levelFound);
    }
};
LevelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(level_entity_1.Level)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LevelService);
exports.LevelService = LevelService;
//# sourceMappingURL=level.service.js.map