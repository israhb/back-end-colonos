import { HttpException } from '@nestjs/common';
import { CreateTipoTransporteDto } from './dto/create-tipo_transporte.dto';
import { UpdateTipoTransporteDto } from './dto/update-tipo_transporte.dto';
import { TipoTransporte } from './entities/tipo_transporte.entity';
import { Repository } from 'typeorm';
export declare class TipoTransporteService {
    private tipoTransporteRepository;
    constructor(tipoTransporteRepository: Repository<TipoTransporte>);
    create(createTipoTransporteDto: CreateTipoTransporteDto): Promise<TipoTransporte | HttpException>;
    findAll(): Promise<TipoTransporte[]>;
    findOne(id: number): Promise<TipoTransporte | HttpException>;
    update(id: number, updateTipoTransporteDto: UpdateTipoTransporteDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | HttpException>;
}
