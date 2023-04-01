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
exports.TipoTransporteService = void 0;
const common_1 = require("@nestjs/common");
const tipo_transporte_entity_1 = require("./entities/tipo_transporte.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let TipoTransporteService = class TipoTransporteService {
    constructor(tipoTransporteRepository) {
        this.tipoTransporteRepository = tipoTransporteRepository;
    }
    async create(createTipoTransporteDto) {
        const tipoTransporteFound = await this.tipoTransporteRepository.findOne({
            where: {
                name: createTipoTransporteDto.name
            }
        });
        if (tipoTransporteFound) {
            if (tipoTransporteFound.activo === 0) {
                tipoTransporteFound.activo = 1;
                const id = tipoTransporteFound.id;
                this.tipoTransporteRepository.update({ id }, tipoTransporteFound);
                return tipoTransporteFound;
            }
            return new common_1.HttpException('Tipo Transporte ya existe en la base', common_1.HttpStatus.CONFLICT);
        }
        const newTipoTransporte = this.tipoTransporteRepository.create(createTipoTransporteDto);
        return this.tipoTransporteRepository.save(newTipoTransporte);
    }
    findAll() {
        return this.tipoTransporteRepository.find({
            where: {
                activo: 1
            },
            order: {
                id: "DESC"
            }
        });
    }
    async findOne(id) {
        const tipoTransporteFound = await this.tipoTransporteRepository.findOne({
            where: {
                id
            }
        });
        if (!tipoTransporteFound) {
            return new common_1.HttpException('Tipo Transporte no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return tipoTransporteFound;
    }
    async update(id, updateTipoTransporteDto) {
        const tipoTransporteFound = await this.tipoTransporteRepository.findOne({
            where: {
                id
            }
        });
        if (!tipoTransporteFound) {
            return new common_1.HttpException('Tipo Transporte no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return this.tipoTransporteRepository.update({ id }, updateTipoTransporteDto);
    }
    async remove(id) {
        const tipoTransporteFound = await this.tipoTransporteRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!tipoTransporteFound) {
            return new common_1.HttpException('Tipo Transporte no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        tipoTransporteFound.activo = 0;
        return this.tipoTransporteRepository.update({ id }, tipoTransporteFound);
    }
};
TipoTransporteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(tipo_transporte_entity_1.TipoTransporte)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TipoTransporteService);
exports.TipoTransporteService = TipoTransporteService;
//# sourceMappingURL=tipo_transporte.service.js.map