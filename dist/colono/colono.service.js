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
exports.ColonoService = void 0;
const common_1 = require("@nestjs/common");
const colono_entity_1 = require("./entities/colono.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const folio_service_1 = require("../folio/folio.service");
const level_service_1 = require("../level/level.service");
const service_general_service_1 = require("../service-general/service-general/service-general.service");
const login_count_service_1 = require("../login_count/login_count.service");
const permisos_service_1 = require("../permisos/permisos.service");
const modulos_service_1 = require("../modulos/modulos.service");
let ColonoService = class ColonoService {
    constructor(colonoRepository, folioService, levelService, loginCount, permisosService, modulosService, serviceGeneralService) {
        this.colonoRepository = colonoRepository;
        this.folioService = folioService;
        this.levelService = levelService;
        this.loginCount = loginCount;
        this.permisosService = permisosService;
        this.modulosService = modulosService;
        this.serviceGeneralService = serviceGeneralService;
    }
    async create(createColonoDto) {
        const folioFound = await this.folioService.findOne(createColonoDto.folio_id);
        if (folioFound.name == 'HttpException') {
            return new common_1.HttpException('Folio no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const levelFound = await this.levelService.findOne(createColonoDto.level_id);
        if (levelFound.name == 'HttpException') {
            return new common_1.HttpException('Nivel no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const colonoFound = await this.colonoRepository.findOne({ where: { telefono: createColonoDto.telefono } });
        if (colonoFound) {
            if (colonoFound.activo === 0) {
                colonoFound.activo = 1;
                const id = colonoFound.id;
                this.colonoRepository.update({ id }, colonoFound);
                return colonoFound;
            }
            return new common_1.HttpException('Colono ingresado ya existe en la base', common_1.HttpStatus.CONFLICT);
        }
        const newColono = this.colonoRepository.create(createColonoDto);
        return this.colonoRepository.save(newColono);
    }
    findAll() {
        return this.colonoRepository.find({
            where: {
                activo: 1
            },
            order: {
                id: "DESC"
            },
            relations: ['folio', 'level']
        });
    }
    findAllTipoColonosLevel() {
        return this.colonoRepository.find({
            where: {
                activo: 1,
                level_id: 4
            },
            order: {
                id: "DESC"
            },
            relations: ['folio', 'level']
        });
    }
    async registerColonoData(body) {
        const folioFound = await this.folioService.findOne(body.folio_id);
        if (!folioFound) {
            throw new common_1.NotFoundException('No se encontro Folio');
        }
        if (folioFound.nuevo == 1) {
            const colonoFound = await this.colonoRepository.findOne({
                where: {
                    folio_id: folioFound.id,
                    password: body.password
                }
            });
            if (!colonoFound) {
                throw new common_1.NotFoundException('No se encontro Colono');
            }
            if (colonoFound.registrado == "0") {
                this.updateColonoDto = Object.assign({}, body);
                return this.colonoRepository.update(body.id, this.updateColonoDto);
            }
            else if (colonoFound.registrado == "1") {
                throw new common_1.NotFoundException('Colono Ya fue registrado');
            }
        }
        else {
            throw new common_1.NotFoundException('Folio aun no esta dado de alta');
        }
    }
    async registerColono(body) {
        const folioFound = await this.folioService.findOne(body.folio_id);
        if (!folioFound) {
            throw new common_1.NotFoundException('No se encontro Folio');
        }
        if (folioFound.nuevo == 0) {
            folioFound.nuevo = 1;
            folioFound.mac = body.mac;
            folioFound.upload_date = this.serviceGeneralService.getDateNowAMD();
            folioFound.upload_time = this.serviceGeneralService.getHourNow();
            this.folioService.update(folioFound.id, folioFound);
            const keys = Object.keys(body);
            const indexKeyToDelete = 0;
            delete body[keys[indexKeyToDelete]];
            this.createDtoColono = Object.assign({}, body);
            const newColono = this.colonoRepository.create(this.createDtoColono);
            return this.colonoRepository.save(newColono);
        }
        else {
            throw new common_1.NotFoundException('Folio ya registrado');
        }
    }
    async loginColono(folio_pass) {
        const folioFound = await this.folioService.findName(folio_pass.name);
        if (!folioFound) {
            throw new common_1.NotFoundException('No se encontro Folio');
        }
        const colonoFound = await this.colonoRepository.findOne({
            where: {
                folio_id: folioFound.id,
                password: folio_pass.password
            },
            relations: ['folio', 'level']
        });
        if (!colonoFound) {
            throw new common_1.NotFoundException('No se encontro Colono');
        }
        if (colonoFound.level_id == 1 || colonoFound.level_id == 2 || colonoFound.level_id == 3) {
            const permisosName = [];
            const modulosName = [];
            const arrayPermisos = await this.permisosService.findPermisosforLevel(colonoFound.level_id);
            const arrayModulos = await this.modulosService.findModulosforLevel(colonoFound.level_id);
            arrayPermisos.forEach(element => {
                permisosName.push(element.name);
            });
            arrayModulos.forEach(element => {
                modulosName.push(element.name);
            });
            const permisos = {
                actions: permisosName,
                modulos: modulosName
            };
            const colono = {
                colono: colonoFound,
                permisos
            };
            return colono;
        }
        else {
            if (colonoFound.level_id == 4) {
                const countFolios = {
                    name: folio_pass.name
                };
                const foundLoginCount = this.loginCount.findAllFolio(countFolios);
                if ((await foundLoginCount).length < 5) {
                    const comparraFM = {
                        name: folio_pass.name,
                        mac: folio_pass.mac
                    };
                    const foundLogin = await this.loginCount.findAllFolioMac(comparraFM);
                    if (!foundLogin) {
                        const crearFolioR = {
                            folio: folio_pass.name,
                            mac: folio_pass.mac,
                            upload_date: this.serviceGeneralService.getDateNowAMD()
                        };
                        this.loginCount.create(crearFolioR);
                        return colonoFound;
                    }
                    else {
                        return colonoFound;
                    }
                }
                else {
                    const comparraFM = {
                        name: folio_pass.name,
                        mac: folio_pass.mac
                    };
                    const foundLogin = await this.loginCount.findAllFolioMac(comparraFM);
                    if (!foundLogin) {
                        throw new common_1.NotFoundException('Se exedieron los usuarios por cuenta');
                    }
                    else {
                        return colonoFound;
                    }
                }
            }
        }
    }
    async findOne(id, externo) {
        const colonoFound = await this.colonoRepository.findOne({
            where: {
                id
            },
            relations: ['folio', 'level']
        });
        if (!colonoFound) {
            if (externo)
                return false;
            return new common_1.HttpException('Colono no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return colonoFound;
    }
    async update(id, updateColonoDto) {
        const folioFound = await this.folioService.findOne(updateColonoDto.folio_id);
        if (folioFound.name == 'HttpException') {
            return new common_1.HttpException('Folio no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const levelFound = await this.levelService.findOne(updateColonoDto.level_id);
        if (levelFound.name == 'HttpException') {
            return new common_1.HttpException('Nivel no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        const colonoFound = await this.colonoRepository.findOne({
            where: {
                id
            }
        });
        if (!colonoFound) {
            return new common_1.HttpException('Colono no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        return this.colonoRepository.update({ id }, updateColonoDto);
    }
    async remove(id) {
        const colonoFound = await this.colonoRepository.findOne({
            where: {
                id,
                activo: 1
            }
        });
        if (!colonoFound) {
            return new common_1.HttpException('Colono no Existe', common_1.HttpStatus.NOT_FOUND);
        }
        colonoFound.activo = 0;
        return this.colonoRepository.update({ id }, colonoFound);
    }
};
ColonoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(colono_entity_1.Colono)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        folio_service_1.FolioService,
        level_service_1.LevelService,
        login_count_service_1.LoginCountService,
        permisos_service_1.PermisosService,
        modulos_service_1.ModulosService,
        service_general_service_1.ServiceGeneralService])
], ColonoService);
exports.ColonoService = ColonoService;
//# sourceMappingURL=colono.service.js.map