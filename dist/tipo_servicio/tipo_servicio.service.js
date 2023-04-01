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
exports.TipoServicioService = void 0;
const common_1 = require("@nestjs/common");
const tipo_servicio_entity_1 = require("./entities/tipo_servicio.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let TipoServicioService = class TipoServicioService {
    constructor(tipoServicioRepository) {
        this.tipoServicioRepository = tipoServicioRepository;
    }
    async create(createTipoServicioDto) {
        const tipoServicioFound = await this.tipoServicioRepository.findOne({
            where: {
                name: createTipoServicioDto.name
            }
        });
        if (tipoServicioFound) {
            if (tipoServicioFound.activo === 0) {
                tipoServicioFound.activo = 1;
                const id = tipoServicioFound.id;
                this.tipoServicioRepository.update({ id }, tipoServicioFound);
                return tipoServicioFound;
            }
            return new common_1.HttpException('Tipo Servicio ya existe en la base', common_1.HttpStatus.CONFLICT);
        }
        const newTipoServicio = this.tipoServicioRepository.create(createTipoServicioDto);
        return this.tipoServicioRepository.save(newTipoServicio);
    }
    findAll() {
        return this.tipoServicioRepository.find({
            where: {
                activo: 1
            },
            order: {
                id: "DESC"
            }
        });
    }
    async findOne(id) {
        const tipoServicioFound = await this.tipoServicioRepository.findOne({
            where: {
                id
            }
        });
        if (!tipoServicioFound) {
            return new common_1.HttpException('Tipo Servicio no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return tipoServicioFound;
    }
    async update(id, updateTipoServicioDto) {
        const tipoServicioFound = await this.tipoServicioRepository.findOne({
            where: {
                id
            }
        });
        if (!tipoServicioFound) {
            return new common_1.HttpException('Tipo Servicio no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return this.tipoServicioRepository.update({ id }, updateTipoServicioDto);
    }
    async remove(id) {
        const tipoServicioFound = await this.tipoServicioRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!tipoServicioFound) {
            return new common_1.HttpException('Tipo Servicio no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        tipoServicioFound.activo = 0;
        return this.tipoServicioRepository.update({ id }, tipoServicioFound);
    }
};
TipoServicioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipo_servicio_entity_1.TipoServicio)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TipoServicioService);
exports.TipoServicioService = TipoServicioService;
//# sourceMappingURL=tipo_servicio.service.js.map