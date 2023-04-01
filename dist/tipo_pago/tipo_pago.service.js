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
exports.TipoPagoService = void 0;
const common_1 = require("@nestjs/common");
const tipo_pago_entity_1 = require("./entities/tipo_pago.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let TipoPagoService = class TipoPagoService {
    constructor(tipoPagoRepository) {
        this.tipoPagoRepository = tipoPagoRepository;
    }
    async create(createTipoPagoDto) {
        const tipoPagoFound = await this.tipoPagoRepository.findOne({
            where: {
                name: createTipoPagoDto.name
            }
        });
        if (tipoPagoFound) {
            if (tipoPagoFound.activo === 0) {
                tipoPagoFound.activo = 1;
                const id = tipoPagoFound.id;
                this.tipoPagoRepository.update({ id }, tipoPagoFound);
                return tipoPagoFound;
            }
            return new common_1.HttpException('Tipo Pago ingresado ya existe en la base', common_1.HttpStatus.CONFLICT);
        }
        const newTipoPago = this.tipoPagoRepository.create(createTipoPagoDto);
        return this.tipoPagoRepository.save(newTipoPago);
    }
    findAll() {
        return this.tipoPagoRepository.find({
            where: {
                activo: 1
            },
            order: {
                id: "DESC"
            }
        });
    }
    async findOne(id) {
        const tipoPagoFound = await this.tipoPagoRepository.findOne({
            where: {
                id
            }
        });
        if (!tipoPagoFound) {
            return new common_1.HttpException('Tipo Pago no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return tipoPagoFound;
    }
    async update(id, updateTipoPagoDto) {
        const tipoPagoFound = await this.tipoPagoRepository.findOne({
            where: {
                id
            }
        });
        if (!tipoPagoFound) {
            return new common_1.HttpException('Tipo Pago no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return this.tipoPagoRepository.update({ id }, updateTipoPagoDto);
    }
    async remove(id) {
        const tipoPagoFound = await this.tipoPagoRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!tipoPagoFound) {
            return new common_1.HttpException('Tipo Pago no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        tipoPagoFound.activo = 0;
        return this.tipoPagoRepository.update({ id }, tipoPagoFound);
    }
};
TipoPagoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(tipo_pago_entity_1.TipoPago)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TipoPagoService);
exports.TipoPagoService = TipoPagoService;
//# sourceMappingURL=tipo_pago.service.js.map