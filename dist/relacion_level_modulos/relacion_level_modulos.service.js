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
exports.RelacionLevelModulosService = void 0;
const common_1 = require("@nestjs/common");
const relacion_level_modulo_entity_1 = require("./entities/relacion_level_modulo.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const level_service_1 = require("../level/level.service");
const modulos_service_1 = require("../modulos/modulos.service");
let RelacionLevelModulosService = class RelacionLevelModulosService {
    constructor(relacionlmRepository, levelService, modulosService) {
        this.relacionlmRepository = relacionlmRepository;
        this.levelService = levelService;
        this.modulosService = modulosService;
    }
    async create(createRelacionLevelModuloDto) {
        const levelFound = await this.levelService.findOne(createRelacionLevelModuloDto.level_id);
        if (levelFound.name == 'HttpException') {
            throw new common_1.NotFoundException('No se encontro Nivel');
        }
        const moduloFound = await this.modulosService.findOne(createRelacionLevelModuloDto.modulo_id);
        if (!moduloFound) {
            throw new common_1.NotFoundException('No se encontro Modulo');
        }
        const newRelacionnm = this.relacionlmRepository.create(createRelacionLevelModuloDto);
        return this.relacionlmRepository.save(newRelacionnm);
    }
    findAll() {
        return this.relacionlmRepository.find({
            where: {
                activo: 1
            }
        });
    }
    async findOne(id) {
        const relacionnmFound = await this.relacionlmRepository.findOne({
            where: {
                id
            }
        });
        if (!relacionnmFound) {
            throw new common_1.NotFoundException('No se encontro Relacion');
        }
        return relacionnmFound;
    }
    async update(id, updateRelacionLevelModuloDto) {
        const levelFound = await this.levelService.findOne(updateRelacionLevelModuloDto.level_id);
        if (levelFound.name == 'HttpException') {
            throw new common_1.NotFoundException('No se encontro Nivel');
        }
        const moduloFound = await this.modulosService.findOne(updateRelacionLevelModuloDto.modulo_id);
        if (!moduloFound) {
            throw new common_1.NotFoundException('No se encontro Modulo');
        }
        const relacionnmFound = await this.relacionlmRepository.findOne({
            where: {
                id
            }
        });
        if (!relacionnmFound) {
            throw new common_1.NotFoundException('No se encontro Relacion');
        }
        return this.relacionlmRepository.update({ id }, updateRelacionLevelModuloDto);
    }
    async remove(id) {
        const relacionnmFound = await this.relacionlmRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!relacionnmFound) {
            throw new common_1.NotFoundException('No se encontro Relacion');
        }
        relacionnmFound.activo = 0;
        return this.relacionlmRepository.update({ id }, relacionnmFound);
    }
};
RelacionLevelModulosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(relacion_level_modulo_entity_1.RelacionLevelModulo)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        level_service_1.LevelService,
        modulos_service_1.ModulosService])
], RelacionLevelModulosService);
exports.RelacionLevelModulosService = RelacionLevelModulosService;
//# sourceMappingURL=relacion_level_modulos.service.js.map