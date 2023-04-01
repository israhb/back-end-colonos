import { NotFoundException } from '@nestjs/common';
import { CreateFolioDto } from './dto/create-folio.dto';
import { UpdateFolioDto } from './dto/update-folio.dto';
import { Folio } from './entities/folio.entity';
import { Repository } from 'typeorm';
import { EstadoService } from 'src/estado/estado.service';
import { FraccionamientoService } from 'src/fraccionamiento/fraccionamiento.service';
export declare class FolioService {
    private folioRepository;
    private estadoService;
    private fraccionamientoService;
    constructor(folioRepository: Repository<Folio>, estadoService: EstadoService, fraccionamientoService: FraccionamientoService);
    create(createFolioDto: CreateFolioDto): Promise<Folio | NotFoundException>;
    findAll(): Promise<Folio[]>;
    getFoliosNoRegistrados(): Promise<Folio[]>;
    findName(name: string): Promise<Folio>;
    findOne(id: number): Promise<Folio>;
    update(id: number, updateFolioDto: UpdateFolioDto): Promise<import("typeorm").UpdateResult | NotFoundException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | NotFoundException>;
}
