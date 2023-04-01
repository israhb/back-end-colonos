import { HttpException } from '@nestjs/common';
import { CreateMonedaDto } from './dto/create-moneda.dto';
import { UpdateMonedaDto } from './dto/update-moneda.dto';
import { Moneda } from './entities/moneda.entity';
import { Repository } from 'typeorm';
export declare class MonedaService {
    private monedaRepository;
    constructor(monedaRepository: Repository<Moneda>);
    create(createMonedaDto: CreateMonedaDto): Promise<HttpException | Moneda>;
    findAll(): Promise<Moneda[]>;
    findOne(id: number): Promise<HttpException | Moneda>;
    update(id: number, updateMonedaDto: UpdateMonedaDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | HttpException>;
}
