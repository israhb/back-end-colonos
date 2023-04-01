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
exports.TipoVisitaService = void 0;
const common_1 = require("@nestjs/common");
const tipo_visita_entity_1 = require("./entities/tipo_visita.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let TipoVisitaService = class TipoVisitaService {
    constructor(tipoVisitaRepository) {
        this.tipoVisitaRepository = tipoVisitaRepository;
    }
    async create(createTipoVisitaDto) {
        const tipoVisitaFound = await this.tipoVisitaRepository.findOne({
            where: {
                name: createTipoVisitaDto.name
            }
        });
        if (tipoVisitaFound) {
            if (tipoVisitaFound.activo === 0) {
                tipoVisitaFound.activo = 1;
                const id = tipoVisitaFound.id;
                this.tipoVisitaRepository.update({ id }, tipoVisitaFound);
                return tipoVisitaFound;
            }
            return new common_1.HttpException('Tipo Visita ya existe en la base', common_1.HttpStatus.CONFLICT);
        }
        const newTipoVisita = this.tipoVisitaRepository.create(createTipoVisitaDto);
        return this.tipoVisitaRepository.save(newTipoVisita);
    }
    findAll() {
        return this.tipoVisitaRepository.find({
            where: {
                activo: 1
            },
            order: {
                id: "DESC"
            }
        });
    }
    async findOne(id) {
        const tipoVisitaFound = await this.tipoVisitaRepository.findOne({
            where: {
                id
            }
        });
        if (!tipoVisitaFound) {
            return new common_1.HttpException('Tipo Visita no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return tipoVisitaFound;
    }
    async update(id, updateTipoVisitaDto) {
        const tipoVisitaFound = await this.tipoVisitaRepository.findOne({
            where: {
                id
            }
        });
        if (!tipoVisitaFound) {
            return new common_1.HttpException('Tipo Visita no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return this.tipoVisitaRepository.update({ id }, updateTipoVisitaDto);
    }
    async remove(id) {
        const tipoVisitaFound = await this.tipoVisitaRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!tipoVisitaFound) {
            return new common_1.HttpException('Tipo Visita no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        tipoVisitaFound.activo = 0;
        return this.tipoVisitaRepository.update({ id }, tipoVisitaFound);
    }
};
TipoVisitaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(tipo_visita_entity_1.TipoVisita)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TipoVisitaService);
exports.TipoVisitaService = TipoVisitaService;
//# sourceMappingURL=tipo_visita.service.js.map