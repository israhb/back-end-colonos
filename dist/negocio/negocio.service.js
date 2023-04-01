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
exports.NegocioService = void 0;
const common_1 = require("@nestjs/common");
const negocio_entity_1 = require("./entities/negocio.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const colono_service_1 = require("../colono/colono.service");
const tipo_negocio_service_1 = require("../tipo_negocio/tipo_negocio.service");
let NegocioService = class NegocioService {
    constructor(negocioRepository, colonoService, tipoNegocioService) {
        this.negocioRepository = negocioRepository;
        this.colonoService = colonoService;
        this.tipoNegocioService = tipoNegocioService;
    }
    async create(createNegocioDto) {
        const tipoNegocioFound = await this.tipoNegocioService.findOne(createNegocioDto.tipo_negocio_id);
        if (tipoNegocioFound.name == 'HttpException') {
            return new common_1.HttpException('Tipo Negocio no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const colonoFound = await this.colonoService.findOne(createNegocioDto.colono_id, true);
        if (!colonoFound) {
            return new common_1.HttpException('Colono no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const negocioFound = await this.negocioRepository.findOne({ where: { name: createNegocioDto.name } });
        if (negocioFound) {
            if (negocioFound.activo === 0) {
                negocioFound.activo = 1;
                const id = negocioFound.id;
                this.negocioRepository.update({ id }, negocioFound);
                return negocioFound;
            }
            return new common_1.HttpException('Pago ingresado ya existe en la base', common_1.HttpStatus.CONFLICT);
        }
        const newNegocio = this.negocioRepository.create(createNegocioDto);
        return this.negocioRepository.save(newNegocio);
    }
    findAll() {
        return this.negocioRepository.find({
            where: {
                activo: 1
            },
            order: {
                id: "DESC"
            },
            relations: ['colono', 'tipoNegocio']
        });
    }
    async findOne(id) {
        const negocioFound = await this.negocioRepository.findOne({
            where: {
                id
            }
        });
        if (!negocioFound) {
            return new common_1.HttpException('Negocio no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return negocioFound;
    }
    async update(id, updateNegocioDto) {
        const tipoNegocioFound = await this.tipoNegocioService.findOne(updateNegocioDto.tipo_negocio_id);
        if (tipoNegocioFound.name == 'HttpException') {
            return new common_1.HttpException('Tipo Negocio no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const colonoFound = await this.colonoService.findOne(updateNegocioDto.colono_id, true);
        if (!colonoFound) {
            return new common_1.HttpException('Colono no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const negocioFound = await this.negocioRepository.findOne({
            where: {
                id
            }
        });
        if (!negocioFound) {
            return new common_1.HttpException('Negocio no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return this.negocioRepository.update({ id }, updateNegocioDto);
    }
    async remove(id) {
        const negocioFound = await this.negocioRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!negocioFound) {
            return new common_1.HttpException('Negocio no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        negocioFound.activo = 0;
        return this.negocioRepository.update({ id }, negocioFound);
    }
};
NegocioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(negocio_entity_1.Negocio)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        colono_service_1.ColonoService,
        tipo_negocio_service_1.TipoNegocioService])
], NegocioService);
exports.NegocioService = NegocioService;
//# sourceMappingURL=negocio.service.js.map