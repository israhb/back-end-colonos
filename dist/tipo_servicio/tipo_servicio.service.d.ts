import { HttpException } from '@nestjs/common';
import { CreateTipoServicioDto } from './dto/create-tipo_servicio.dto';
import { UpdateTipoServicioDto } from './dto/update-tipo_servicio.dto';
import { TipoServicio } from './entities/tipo_servicio.entity';
import { Repository } from 'typeorm';
export declare class TipoServicioService {
    private tipoServicioRepository;
    constructor(tipoServicioRepository: Repository<TipoServicio>);
    create(createTipoServicioDto: CreateTipoServicioDto): Promise<TipoServicio | HttpException>;
    findAll(): Promise<TipoServicio[]>;
    findOne(id: number): Promise<TipoServicio | HttpException>;
    update(id: number, updateTipoServicioDto: UpdateTipoServicioDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | HttpException>;
}
