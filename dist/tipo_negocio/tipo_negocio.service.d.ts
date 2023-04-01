import { HttpException } from '@nestjs/common';
import { CreateTipoNegocioDto } from './dto/create-tipo_negocio.dto';
import { UpdateTipoNegocioDto } from './dto/update-tipo_negocio.dto';
import { TipoNegocio } from './entities/tipo_negocio.entity';
import { Repository } from 'typeorm';
export declare class TipoNegocioService {
    private tipoNegocioRepository;
    constructor(tipoNegocioRepository: Repository<TipoNegocio>);
    create(createTipoNegocioDto: CreateTipoNegocioDto): Promise<TipoNegocio | HttpException>;
    findAll(): Promise<TipoNegocio[]>;
    findOne(id: number): Promise<TipoNegocio | HttpException>;
    update(id: number, updateTipoNegocioDto: UpdateTipoNegocioDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | HttpException>;
}
