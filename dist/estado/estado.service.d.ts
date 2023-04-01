import { HttpException } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { Estado } from './entities/estado.entity';
import { Repository } from 'typeorm';
export declare class EstadoService {
    private estadoRepository;
    constructor(estadoRepository: Repository<Estado>);
    create(createEstadoDto: CreateEstadoDto): Promise<Estado | HttpException>;
    findAll(): Promise<Estado[]>;
    findOne(id: number): Promise<Estado | HttpException>;
    update(id: number, updateEstadoDto: UpdateEstadoDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | HttpException>;
}
