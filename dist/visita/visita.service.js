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
exports.VisitaService = void 0;
const common_1 = require("@nestjs/common");
const visita_entity_1 = require("./entities/visita.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const colono_service_1 = require("../colono/colono.service");
const tipo_visita_service_1 = require("../tipo_visita/tipo_visita.service");
const tipo_servicio_service_1 = require("../tipo_servicio/tipo_servicio.service");
const tipo_transporte_service_1 = require("../tipo_transporte/tipo_transporte.service");
let VisitaService = class VisitaService {
    constructor(visitaRepository, colonoService, tipoVisitaService, tipoServicioService, tipoTransporteService) {
        this.visitaRepository = visitaRepository;
        this.colonoService = colonoService;
        this.tipoVisitaService = tipoVisitaService;
        this.tipoServicioService = tipoServicioService;
        this.tipoTransporteService = tipoTransporteService;
    }
    async create(createVisitaDto) {
        const tipoVisitaFound = await this.tipoVisitaService.findOne(createVisitaDto.tipo_visita_id);
        if (tipoVisitaFound.name == 'HttpException') {
            return new common_1.HttpException('Tipo Visita no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const tipoServicioFound = await this.tipoServicioService.findOne(createVisitaDto.tipo_servicio_id);
        if (tipoServicioFound.name == 'HttpException') {
            return new common_1.HttpException('Tipo Servicio no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const tipotransporteFound = await this.tipoTransporteService.findOne(createVisitaDto.tipo_transporte_id);
        if (tipotransporteFound.name == 'HttpException') {
            return new common_1.HttpException('Tipo Transporte no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const colonoFound = await this.colonoService.findOne(createVisitaDto.colono_id, true);
        if (!colonoFound) {
            return new common_1.HttpException('Colono no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const visitaFound = await this.visitaRepository.findOne({ where: { name: createVisitaDto.name } });
        if (visitaFound) {
            if (visitaFound.activo === 0) {
                visitaFound.activo = 1;
                const id = visitaFound.id;
                this.visitaRepository.update({ id }, visitaFound);
                return visitaFound;
            }
            return new common_1.HttpException('Visita ingresado ya existe en la base', common_1.HttpStatus.CONFLICT);
        }
        const newVisita = this.visitaRepository.create(createVisitaDto);
        return this.visitaRepository.save(newVisita);
    }
    findAll() {
        return this.visitaRepository.find({
            where: {
                activo: 1
            },
            order: {
                id: "DESC"
            },
            relations: ['colono', 'tipoVisita', 'tipoServicio', 'tipoTransporte']
        });
    }
    async findOne(id) {
        const visitaFound = await this.visitaRepository.findOne({
            where: {
                id
            }
        });
        if (!visitaFound) {
            return new common_1.HttpException('Visita no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return visitaFound;
    }
    async update(id, updateVisitaDto) {
        const tipoVisitaFound = await this.tipoVisitaService.findOne(updateVisitaDto.tipo_visita_id);
        if (tipoVisitaFound.name == 'HttpException') {
            return new common_1.HttpException('Tipo Visita no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const tipoServicioFound = await this.tipoServicioService.findOne(updateVisitaDto.tipo_servicio_id);
        if (tipoServicioFound.name == 'HttpException') {
            return new common_1.HttpException('Tipo Servicio no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const tipotransporteFound = await this.tipoTransporteService.findOne(updateVisitaDto.tipo_transporte_id);
        if (tipotransporteFound.name == 'HttpException') {
            return new common_1.HttpException('Tipo Transporte no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const colonoFound = await this.colonoService.findOne(updateVisitaDto.colono_id, true);
        if (!colonoFound) {
            return new common_1.HttpException('Colono no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const visitaFound = await this.visitaRepository.findOne({
            where: {
                id
            }
        });
        if (!visitaFound) {
            return new common_1.HttpException('Visita no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return this.visitaRepository.update({ id }, updateVisitaDto);
    }
    async remove(id) {
        const visitaFound = await this.visitaRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!visitaFound) {
            return new common_1.HttpException('Visita no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        visitaFound.activo = 0;
        return this.visitaRepository.update({ id }, visitaFound);
    }
};
VisitaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(visita_entity_1.Visita)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        colono_service_1.ColonoService,
        tipo_visita_service_1.TipoVisitaService,
        tipo_servicio_service_1.TipoServicioService,
        tipo_transporte_service_1.TipoTransporteService])
], VisitaService);
exports.VisitaService = VisitaService;
//# sourceMappingURL=visita.service.js.map