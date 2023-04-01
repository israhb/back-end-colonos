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
exports.ComunicadoService = void 0;
const common_1 = require("@nestjs/common");
const comunicado_entity_1 = require("./entities/comunicado.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const tipo_comunicado_service_1 = require("../tipo_comunicado/tipo_comunicado.service");
const colono_service_1 = require("../colono/colono.service");
let ComunicadoService = class ComunicadoService {
    constructor(comunicadoRepository, tipoComunicado, colono) {
        this.comunicadoRepository = comunicadoRepository;
        this.tipoComunicado = tipoComunicado;
        this.colono = colono;
    }
    async create(createComunicadoDto) {
        const tipoComunicadoFound = await this.tipoComunicado.findOne(createComunicadoDto.tipo_comunicado_id);
        if (tipoComunicadoFound.name == 'HttpException') {
            return new common_1.HttpException('Tipo Comunicado no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const colonoFound = await this.colono.findOne(createComunicadoDto.colono_id, true);
        if (!colonoFound) {
            return new common_1.HttpException('Colono no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const comunicadoFound = await this.comunicadoRepository.findOne({
            where: {
                name: createComunicadoDto.name
            }
        });
        if (comunicadoFound) {
            if (comunicadoFound.activo === 0) {
                comunicadoFound.activo = 1;
                const id = comunicadoFound.id;
                this.comunicadoRepository.update({ id }, comunicadoFound);
                return comunicadoFound;
            }
            return new common_1.HttpException('Comunicado ya existe en la base', common_1.HttpStatus.CONFLICT);
        }
        const newComunicado = this.comunicadoRepository.create(createComunicadoDto);
        return this.comunicadoRepository.save(newComunicado);
    }
    findAll() {
        return this.comunicadoRepository.find({
            where: {
                activo: 1
            },
            order: {
                id: "DESC"
            },
            relations: ['colono', 'tipoComunicado']
        });
    }
    async findOne(id) {
        const comunicadoFound = await this.comunicadoRepository.findOne({
            where: {
                id
            }
        });
        if (!comunicadoFound) {
            return new common_1.HttpException('Comunicado no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return comunicadoFound;
    }
    async update(id, updateComunicadoDto) {
        const comunicadoFound = await this.comunicadoRepository.findOne({
            where: {
                id
            }
        });
        if (!comunicadoFound) {
            return new common_1.HttpException('Comunicado no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return this.comunicadoRepository.update({ id }, updateComunicadoDto);
    }
    async remove(id) {
        const comunicadoFound = await this.comunicadoRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!comunicadoFound) {
            return new common_1.HttpException('Comunicado no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        comunicadoFound.activo = 0;
        return this.comunicadoRepository.update({ id }, comunicadoFound);
    }
};
ComunicadoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(comunicado_entity_1.Comunicado)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        tipo_comunicado_service_1.TipoComunicadoService,
        colono_service_1.ColonoService])
], ComunicadoService);
exports.ComunicadoService = ComunicadoService;
//# sourceMappingURL=comunicado.service.js.map