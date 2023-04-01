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
exports.ModulosService = void 0;
const common_1 = require("@nestjs/common");
const modulo_entity_1 = require("./entities/modulo.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const relacion_level_modulo_entity_1 = require("../relacion_level_modulos/entities/relacion_level_modulo.entity");
let ModulosService = class ModulosService {
    constructor(moduloRepository) {
        this.moduloRepository = moduloRepository;
    }
    async create(createModuloDto) {
        const modulosFound = await this.moduloRepository.findOne({
            where: {
                name: createModuloDto.name
            }
        });
        if (modulosFound) {
            if (modulosFound.activo === 0) {
                modulosFound.activo = 1;
                const id = modulosFound.id;
                this.moduloRepository.update({ id }, modulosFound);
                return modulosFound;
            }
            throw new common_1.NotFoundException('Modulo ya existe en la base');
        }
        const newModulo = this.moduloRepository.create(createModuloDto);
        return this.moduloRepository.save(newModulo);
    }
    findAll() {
        return this.moduloRepository.find({
            where: {
                activo: 1
            }
        });
    }
    async findModulosforLevel(level_id) {
        return await this.moduloRepository.createQueryBuilder('modulos')
            .select(['modulos.name as name'])
            .where('modulos.id = r_l_p.modulo_id')
            .andWhere('r_l_p.level_id = :level_id', { level_id })
            .innerJoin(relacion_level_modulo_entity_1.RelacionLevelModulo, 'r_l_p')
            .getRawMany();
    }
    async findOne(id) {
        const moduloFound = await this.moduloRepository.findOne({
            where: {
                id
            }
        });
        if (!moduloFound) {
            throw new common_1.NotFoundException('Modulo no existe');
        }
        return moduloFound;
    }
    async update(id, updateModuloDto) {
        const moduloFound = await this.moduloRepository.findOne({
            where: {
                id
            }
        });
        if (!moduloFound) {
            throw new common_1.NotFoundException('Modulo no existe');
        }
        return this.moduloRepository.update({ id }, updateModuloDto);
    }
    async remove(id) {
        const moduloFound = await this.moduloRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!moduloFound) {
            throw new common_1.NotFoundException('Modulo no existe');
        }
        moduloFound.activo = 0;
        return this.moduloRepository.update({ id }, moduloFound);
    }
};
ModulosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(modulo_entity_1.Modulo)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ModulosService);
exports.ModulosService = ModulosService;
//# sourceMappingURL=modulos.service.js.map