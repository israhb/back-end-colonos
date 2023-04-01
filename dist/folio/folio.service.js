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
exports.FolioService = void 0;
const common_1 = require("@nestjs/common");
const folio_entity_1 = require("./entities/folio.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const estado_service_1 = require("../estado/estado.service");
const fraccionamiento_service_1 = require("../fraccionamiento/fraccionamiento.service");
let FolioService = class FolioService {
    constructor(folioRepository, estadoService, fraccionamientoService) {
        this.folioRepository = folioRepository;
        this.estadoService = estadoService;
        this.fraccionamientoService = fraccionamientoService;
    }
    async create(createFolioDto) {
        const estadoFound = await this.estadoService.findOne(createFolioDto.estado_id);
        if (estadoFound.name == 'HttpException') {
            return new common_1.NotFoundException('Estado no Existe');
        }
        const fraccionamientoFound = await this.fraccionamientoService.findOne(createFolioDto.frac_id);
        if (fraccionamientoFound.name == 'HttpException') {
            return new common_1.NotFoundException('Fraccionamiento no Existe');
        }
        const folioFound = await this.folioRepository.findOne({ where: { name: createFolioDto.name } });
        if (folioFound) {
            if (folioFound.activo === 0) {
                folioFound.activo = 1;
                const id = folioFound.id;
                this.folioRepository.update({ id }, folioFound);
                return folioFound;
            }
            return new common_1.NotFoundException('Folio ingresado ya existe en la base');
        }
        const newFolio = this.folioRepository.create(createFolioDto);
        return this.folioRepository.save(newFolio);
    }
    findAll() {
        return this.folioRepository.find({
            where: {
                activo: 1
            },
            order: {
                id: "DESC"
            },
            relations: ['estado', 'fraccionamiento']
        });
    }
    getFoliosNoRegistrados() {
        return this.folioRepository.find({
            where: {
                activo: 1,
                nuevo: 0
            },
            relations: ['estado', 'fraccionamiento']
        });
    }
    async findName(name) {
        const folioFound = await this.folioRepository.findOne({
            where: {
                name
            },
            relations: ['estado', 'fraccionamiento']
        });
        if (!folioFound) {
            throw new common_1.NotFoundException('No se encntro Folio');
        }
        return folioFound;
    }
    async findOne(id) {
        const folioFound = await this.folioRepository.findOne({
            where: {
                id
            },
            relations: ['estado', 'fraccionamiento']
        });
        if (!folioFound) {
            throw new common_1.NotFoundException('No se encntro Folio');
        }
        return folioFound;
    }
    async update(id, updateFolioDto) {
        const folioFound = await this.folioRepository.findOne({
            where: {
                id
            }
        });
        if (!folioFound) {
            return new common_1.NotFoundException('Folio no Existe');
        }
        return this.folioRepository.update({ id }, updateFolioDto);
    }
    async remove(id) {
        const folioFound = await this.folioRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!folioFound) {
            return new common_1.NotFoundException('Folio no Existe');
        }
        folioFound.activo = 0;
        return this.folioRepository.update({ id }, folioFound);
    }
};
FolioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(folio_entity_1.Folio)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        estado_service_1.EstadoService,
        fraccionamiento_service_1.FraccionamientoService])
], FolioService);
exports.FolioService = FolioService;
//# sourceMappingURL=folio.service.js.map