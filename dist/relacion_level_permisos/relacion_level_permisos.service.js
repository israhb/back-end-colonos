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
exports.RelacionLevelPermisosService = void 0;
const common_1 = require("@nestjs/common");
const relacion_level_permiso_entity_1 = require("./entities/relacion_level_permiso.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const level_service_1 = require("../level/level.service");
const permisos_service_1 = require("../permisos/permisos.service");
let RelacionLevelPermisosService = class RelacionLevelPermisosService {
    constructor(relacionlpRepository, levelService, permisosService) {
        this.relacionlpRepository = relacionlpRepository;
        this.levelService = levelService;
        this.permisosService = permisosService;
    }
    async create(createRelacionLevelPermisoDto) {
        const levelFound = await this.levelService.findOne(createRelacionLevelPermisoDto.level_id);
        if (levelFound.name == 'HttpException') {
            throw new common_1.NotFoundException('No se encontro Nivel');
        }
        const moduloFound = await this.permisosService.findOne(createRelacionLevelPermisoDto.permiso_id);
        if (!moduloFound) {
            throw new common_1.NotFoundException('No se encontro Permiso');
        }
        const newRelacionnm = this.relacionlpRepository.create(createRelacionLevelPermisoDto);
        return this.relacionlpRepository.save(newRelacionnm);
    }
    findAll() {
        return this.relacionlpRepository.find({
            where: {
                activo: 1
            }
        });
    }
    async findOne(id) {
        const relacionnmFound = await this.relacionlpRepository.findOne({
            where: {
                id
            }
        });
        if (!relacionnmFound) {
            throw new common_1.NotFoundException('No se encontro Relacion');
        }
        return relacionnmFound;
    }
    async update(id, updateRelacionLevelPermisoDto) {
        const levelFound = await this.levelService.findOne(updateRelacionLevelPermisoDto.level_id);
        if (levelFound.name == 'HttpException') {
            throw new common_1.NotFoundException('No se encontro Nivel');
        }
        const moduloFound = await this.permisosService.findOne(updateRelacionLevelPermisoDto.permiso_id);
        if (!moduloFound) {
            throw new common_1.NotFoundException('No se encontro Permiso');
        }
        const relacionnmFound = await this.relacionlpRepository.findOne({
            where: {
                id
            }
        });
        if (!relacionnmFound) {
            throw new common_1.NotFoundException('No se encontro Relacion');
        }
        return this.relacionlpRepository.update({ id }, updateRelacionLevelPermisoDto);
    }
    async remove(id) {
        const relacionnmFound = await this.relacionlpRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!relacionnmFound) {
            throw new common_1.NotFoundException('No se encontro Relacion');
        }
        relacionnmFound.activo = 0;
        return this.relacionlpRepository.update({ id }, relacionnmFound);
    }
};
RelacionLevelPermisosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(relacion_level_permiso_entity_1.RelacionLevelPermiso)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        level_service_1.LevelService,
        permisos_service_1.PermisosService])
], RelacionLevelPermisosService);
exports.RelacionLevelPermisosService = RelacionLevelPermisosService;
//# sourceMappingURL=relacion_level_permisos.service.js.map