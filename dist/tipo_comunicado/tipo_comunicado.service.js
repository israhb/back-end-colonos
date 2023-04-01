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
exports.TipoComunicadoService = void 0;
const common_1 = require("@nestjs/common");
const tipo_comunicado_entity_1 = require("./entities/tipo_comunicado.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let TipoComunicadoService = class TipoComunicadoService {
    constructor(tipoComunicadoRepository) {
        this.tipoComunicadoRepository = tipoComunicadoRepository;
    }
    async create(createTipoComunicadoDto) {
        const tipoComunicadoFound = await this.tipoComunicadoRepository.findOne({
            where: {
                name: createTipoComunicadoDto.name
            }
        });
        if (tipoComunicadoFound) {
            if (tipoComunicadoFound.activo === 0) {
                tipoComunicadoFound.activo = 1;
                const id = tipoComunicadoFound.id;
                this.tipoComunicadoRepository.update({ id }, tipoComunicadoFound);
                return tipoComunicadoFound;
            }
            return new common_1.HttpException('Tipo Comunicado ingresado ya existe en la base', common_1.HttpStatus.CONFLICT);
        }
        const newTipoComunicado = this.tipoComunicadoRepository.create(createTipoComunicadoDto);
        return this.tipoComunicadoRepository.save(newTipoComunicado);
    }
    findAll() {
        return this.tipoComunicadoRepository.find({
            where: {
                activo: 1
            },
            order: {
                id: "DESC"
            }
        });
    }
    async findOne(id) {
        const tipoComunicadoFound = await this.tipoComunicadoRepository.findOne({
            where: {
                id
            }
        });
        if (!tipoComunicadoFound) {
            return new common_1.HttpException('Tipo Comunicado no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return tipoComunicadoFound;
    }
    async update(id, updateTipoComunicadoDto) {
        const tipoComunicadoFound = await this.tipoComunicadoRepository.findOne({
            where: {
                id
            }
        });
        if (!tipoComunicadoFound) {
            return new common_1.HttpException('Tipo Comunicado no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return this.tipoComunicadoRepository.update({ id }, updateTipoComunicadoDto);
    }
    async remove(id) {
        const tipoComunicadoFound = await this.tipoComunicadoRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!tipoComunicadoFound) {
            return new common_1.HttpException('Tipo Comunicado no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        tipoComunicadoFound.activo = 0;
        return this.tipoComunicadoRepository.update({ id }, tipoComunicadoFound);
    }
};
TipoComunicadoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(tipo_comunicado_entity_1.TipoComunicado)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TipoComunicadoService);
exports.TipoComunicadoService = TipoComunicadoService;
//# sourceMappingURL=tipo_comunicado.service.js.map