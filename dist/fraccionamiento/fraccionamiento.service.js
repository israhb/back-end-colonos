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
exports.FraccionamientoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fraccionamiento_entity_1 = require("./entities/fraccionamiento.entity");
const typeorm_2 = require("typeorm");
const estado_service_1 = require("../estado/estado.service");
let FraccionamientoService = class FraccionamientoService {
    constructor(fraccionamientoRepository, estadoService) {
        this.fraccionamientoRepository = fraccionamientoRepository;
        this.estadoService = estadoService;
    }
    async create(createFraccionamientoDto) {
        const estadoFound = await this.estadoService.findOne(createFraccionamientoDto.estado_id);
        if (estadoFound.name == 'HttpException') {
            return new common_1.HttpException('Estado no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const fracFound = await this.fraccionamientoRepository.findOne({ where: { name: createFraccionamientoDto.name } });
        if (fracFound) {
            if (fracFound.activo === 0) {
                fracFound.activo = 1;
                const id = fracFound.id;
                this.fraccionamientoRepository.update({ id }, fracFound);
                return estadoFound;
            }
            return new common_1.HttpException('Fraccionamiento ingresado ya existe en la base', common_1.HttpStatus.CONFLICT);
        }
        const newFraccionamiento = this.fraccionamientoRepository.create(createFraccionamientoDto);
        return this.fraccionamientoRepository.save(newFraccionamiento);
    }
    findAll() {
        return this.fraccionamientoRepository.find({
            where: {
                activo: 1
            },
            order: {
                id: "DESC"
            },
            relations: ['estado']
        });
    }
    async findforEstado(estado_id) {
        const estadoFound = await this.estadoService.findOne(estado_id);
        if (estadoFound.name == 'HttpException') {
            return new common_1.HttpException('Estado no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const fracFound = await this.fraccionamientoRepository.find({
            where: {
                estado_id: estado_id
            },
            order: {
                id: "DESC"
            }
        });
        if (!fracFound) {
            return new common_1.HttpException('Fraccionamiento no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return fracFound;
    }
    async findOne(id) {
        const fracFound = await this.fraccionamientoRepository.findOne({
            where: {
                id
            },
            relations: ['estado']
        });
        if (!fracFound) {
            return new common_1.HttpException('Fraccionamiento no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return fracFound;
    }
    async update(id, updateFraccionamientoDto) {
        const fraccFound = await this.fraccionamientoRepository.findOne({
            where: {
                id
            }
        });
        if (!fraccFound) {
            return new common_1.HttpException('Fraccionamiento no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return this.fraccionamientoRepository.update({ id }, updateFraccionamientoDto);
    }
    async remove(id) {
        const fracFound = await this.fraccionamientoRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!fracFound) {
            return new common_1.HttpException('Fraccionamiento no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        fracFound.activo = 0;
        return this.fraccionamientoRepository.update({ id }, fracFound);
    }
};
FraccionamientoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(fraccionamiento_entity_1.Fraccionamiento)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        estado_service_1.EstadoService])
], FraccionamientoService);
exports.FraccionamientoService = FraccionamientoService;
//# sourceMappingURL=fraccionamiento.service.js.map