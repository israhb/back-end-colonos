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
exports.PermisosService = void 0;
const common_1 = require("@nestjs/common");
const permiso_entity_1 = require("./entities/permiso.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const relacion_level_permiso_entity_1 = require("../relacion_level_permisos/entities/relacion_level_permiso.entity");
let PermisosService = class PermisosService {
    constructor(permisoRepository) {
        this.permisoRepository = permisoRepository;
    }
    async create(createPermisoDto) {
        const permisosFound = await this.permisoRepository.findOne({
            where: {
                name: createPermisoDto.name
            }
        });
        if (permisosFound) {
            if (permisosFound.activo === 0) {
                permisosFound.activo = 1;
                const id = permisosFound.id;
                this.permisoRepository.update({ id }, permisosFound);
                return permisosFound;
            }
            throw new common_1.NotFoundException('Permiso ya existe en la base');
        }
        const newPermiso = this.permisoRepository.create(createPermisoDto);
        return this.permisoRepository.save(newPermiso);
    }
    findAll() {
        return this.permisoRepository.find({
            where: {
                activo: 1
            }
        });
    }
    async findPermisosforLevel(level_id) {
        return await this.permisoRepository.createQueryBuilder('permisos')
            .select(['permisos.name as name'])
            .where('permisos.id = r_l_p.permiso_id')
            .andWhere('r_l_p.level_id = :level_id', { level_id })
            .innerJoin(relacion_level_permiso_entity_1.RelacionLevelPermiso, 'r_l_p')
            .getRawMany();
    }
    async findOne(id) {
        const permisosFound = await this.permisoRepository.findOne({
            where: {
                id
            }
        });
        if (!permisosFound) {
            throw new common_1.NotFoundException('Permiso no existe');
        }
        return permisosFound;
    }
    async update(id, updatePermisoDto) {
        const permisoFound = await this.permisoRepository.findOne({
            where: {
                id
            }
        });
        if (!permisoFound) {
            throw new common_1.NotFoundException('Permiso no existe');
        }
        return this.permisoRepository.update({ id }, updatePermisoDto);
    }
    async remove(id) {
        const permisoFound = await this.permisoRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!permisoFound) {
            throw new common_1.NotFoundException('Permiso no existe');
        }
        permisoFound.activo = 0;
        return this.permisoRepository.update({ id }, permisoFound);
    }
};
PermisosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(permiso_entity_1.Permiso)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PermisosService);
exports.PermisosService = PermisosService;
//# sourceMappingURL=permisos.service.js.map