import { HttpException } from '@nestjs/common';
import { CreateTipoVisitaDto } from './dto/create-tipo_visita.dto';
import { UpdateTipoVisitaDto } from './dto/update-tipo_visita.dto';
import { TipoVisita } from './entities/tipo_visita.entity';
import { Repository } from 'typeorm';
export declare class TipoVisitaService {
    private tipoVisitaRepository;
    constructor(tipoVisitaRepository: Repository<TipoVisita>);
    create(createTipoVisitaDto: CreateTipoVisitaDto): Promise<TipoVisita | HttpException>;
    findAll(): Promise<TipoVisita[]>;
    findOne(id: number): Promise<TipoVisita | HttpException>;
    update(id: number, updateTipoVisitaDto: UpdateTipoVisitaDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | HttpException>;
}
