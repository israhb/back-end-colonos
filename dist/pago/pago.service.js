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
exports.PagoService = void 0;
const common_1 = require("@nestjs/common");
const pago_entity_1 = require("./entities/pago.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const colono_service_1 = require("../colono/colono.service");
const tipo_pago_service_1 = require("../tipo_pago/tipo_pago.service");
const tipo_pago_entity_1 = require("../tipo_pago/entities/tipo_pago.entity");
let PagoService = class PagoService {
    constructor(pagoRepository, colonoService, tipoPagoService) {
        this.pagoRepository = pagoRepository;
        this.colonoService = colonoService;
        this.tipoPagoService = tipoPagoService;
    }
    async create(createPagoDto) {
        const tipoPagoFound = await this.tipoPagoService.findOne(createPagoDto.tipo_pago_id);
        if (tipoPagoFound.name == 'HttpException') {
            return new common_1.HttpException('Tipo Pago no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const colonoFound = await this.colonoService.findOne(createPagoDto.colono_id, true);
        if (!colonoFound) {
            return new common_1.HttpException('Colono no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const pagoFound = await this.pagoRepository.findOne({ where: { name: createPagoDto.name } });
        if (pagoFound) {
            if (pagoFound.activo === 0) {
                pagoFound.activo = 1;
                const id = pagoFound.id;
                this.pagoRepository.update({ id }, pagoFound);
                return pagoFound;
            }
            return new common_1.HttpException('Pago ingresado ya existe en la base', common_1.HttpStatus.CONFLICT);
        }
        const newPago = this.pagoRepository.create(createPagoDto);
        return this.pagoRepository.save(newPago);
    }
    async getPagoColono(id) {
        return await this.pagoRepository.createQueryBuilder('pago')
            .select(['pago.id as id', 'pago.tipo_pago_id as tipo_pago_id', 'tp.name as tipo_pago_name', 'pago.name as name', 'pago.monto as monto', 'DATE_FORMAT(pago.upload_date, "%Y-%m-%d") as upload_date', 'pago.upload_time as upload_time'])
            .where('pago.tipo_pago_id = tp.id')
            .andWhere('pago.colono_id = :id', { id })
            .innerJoin(tipo_pago_entity_1.TipoPago, 'tp')
            .orderBy('pago.id', "DESC")
            .getRawMany();
    }
    findAll() {
        return this.pagoRepository.find({
            where: {
                activo: 1
            },
            order: {
                id: "DESC"
            },
            relations: ['colono', 'tipoPago']
        });
    }
    async findOne(id) {
        const pagoFound = await this.pagoRepository.findOne({
            where: {
                id
            }
        });
        if (!pagoFound) {
            return new common_1.HttpException('Pago no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return pagoFound;
    }
    async update(id, updatePagoDto) {
        const tipoPagoFound = await this.tipoPagoService.findOne(updatePagoDto.tipo_pago_id);
        if (tipoPagoFound.name == 'HttpException') {
            return new common_1.HttpException('Tipo Pago no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const colonoFound = await this.colonoService.findOne(updatePagoDto.colono_id, true);
        if (!colonoFound) {
            return new common_1.HttpException('Colono no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const pagoFound = await this.pagoRepository.findOne({
            where: {
                id
            }
        });
        if (!pagoFound) {
            return new common_1.HttpException('Pago no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return this.pagoRepository.update({ id }, updatePagoDto);
    }
    async remove(id) {
        const pagoFound = await this.pagoRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!pagoFound) {
            return new common_1.HttpException('Pago no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        pagoFound.activo = 0;
        return this.pagoRepository.update({ id }, pagoFound);
    }
};
PagoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(pago_entity_1.Pago)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        colono_service_1.ColonoService,
        tipo_pago_service_1.TipoPagoService])
], PagoService);
exports.PagoService = PagoService;
//# sourceMappingURL=pago.service.js.map