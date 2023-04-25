import { HttpException } from '@nestjs/common';
import { CreateColonoDto } from './dto/create-colono.dto';
import { UpdateColonoDto } from './dto/update-colono.dto';
import { Colono } from './entities/colono.entity';
import { Repository } from 'typeorm';
import { FolioService } from 'src/folio/folio.service';
import { LevelService } from 'src/level/level.service';
import { ServiceGeneralService } from 'src/service-general/service-general/service-general.service';
import { LoginCountService } from 'src/login_count/login_count.service';
import { PermisosService } from 'src/permisos/permisos.service';
import { ModulosService } from 'src/modulos/modulos.service';
export declare class ColonoService {
    private colonoRepository;
    private folioService;
    private levelService;
    private loginCount;
    private permisosService;
    private modulosService;
    private serviceGeneralService;
    createDtoColono: CreateColonoDto;
    updateColonoDto: UpdateColonoDto;
    constructor(colonoRepository: Repository<Colono>, folioService: FolioService, levelService: LevelService, loginCount: LoginCountService, permisosService: PermisosService, modulosService: ModulosService, serviceGeneralService: ServiceGeneralService);
    create(createColonoDto: CreateColonoDto): Promise<Colono | HttpException>;
    findAll(): Promise<Colono[]>;
    findAllTipoColonosLevel(): Promise<Colono[]>;
    registerColonoData(body: any): Promise<import("typeorm").UpdateResult>;
    registerColono(body: any): Promise<Colono>;
    loginColono(folio_pass: any): Promise<Colono | {
        colono: Colono;
        permisos: {
            actions: string[];
            modulos: string[];
        };
    }>;
    findOne(id: number, externo?: boolean): Promise<false | Colono | HttpException>;
    update(id: number, updateColonoDto: UpdateColonoDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | HttpException>;
}
