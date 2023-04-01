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
exports.TipoNegocioService = void 0;
const common_1 = require("@nestjs/common");
const tipo_negocio_entity_1 = require("./entities/tipo_negocio.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let TipoNegocioService = class TipoNegocioService {
    constructor(tipoNegocioRepository) {
        this.tipoNegocioRepository = tipoNegocioRepository;
    }
    async create(createTipoNegocioDto) {
        const tipoNegocioFound = await this.tipoNegocioRepository.findOne({
            where: {
                name: createTipoNegocioDto.name
            }
        });
        if (tipoNegocioFound) {
            if (tipoNegocioFound.activo === 0) {
                tipoNegocioFound.activo = 1;
                const id = tipoNegocioFound.id;
                this.tipoNegocioRepository.update({ id }, tipoNegocioFound);
                return tipoNegocioFound;
            }
            return new common_1.HttpException('Tipo Negocio ingresado ya existe en la base', common_1.HttpStatus.CONFLICT);
        }
        const newTipoNegocio = this.tipoNegocioRepository.create(createTipoNegocioDto);
        return this.tipoNegocioRepository.save(newTipoNegocio);
    }
    findAll() {
        return this.tipoNegocioRepository.find({
            where: {
                activo: 1
            },
            order: {
                id: "DESC"
            },
        });
    }
    async findOne(id) {
        const tipoNegocioFound = await this.tipoNegocioRepository.findOne({
            where: {
                id
            }
        });
        if (!tipoNegocioFound) {
            return new common_1.HttpException('Tipo Negocio no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return tipoNegocioFound;
    }
    async update(id, updateTipoNegocioDto) {
        const tipoNegocioFound = await this.tipoNegocioRepository.findOne({
            where: {
                id
            }
        });
        if (!tipoNegocioFound) {
            return new common_1.HttpException('Tipo Negocio no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return this.tipoNegocioRepository.update({ id }, updateTipoNegocioDto);
    }
    async remove(id) {
        const tipoNegocioFound = await this.tipoNegocioRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!tipoNegocioFound) {
            return new common_1.HttpException('Tipo Negocio no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        tipoNegocioFound.activo = 0;
        return this.tipoNegocioRepository.update({ id }, tipoNegocioFound);
    }
};
TipoNegocioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(tipo_negocio_entity_1.TipoNegocio)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TipoNegocioService);
exports.TipoNegocioService = TipoNegocioService;
//# sourceMappingURL=tipo_negocio.service.js.map