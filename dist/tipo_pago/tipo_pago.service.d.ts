import { HttpException } from '@nestjs/common';
import { CreateTipoPagoDto } from './dto/create-tipo_pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo_pago.dto';
import { TipoPago } from './entities/tipo_pago.entity';
import { Repository } from 'typeorm';
export declare class TipoPagoService {
    private tipoPagoRepository;
    constructor(tipoPagoRepository: Repository<TipoPago>);
    create(createTipoPagoDto: CreateTipoPagoDto): Promise<TipoPago | HttpException>;
    findAll(): Promise<TipoPago[]>;
    findOne(id: number): Promise<TipoPago | HttpException>;
    update(id: number, updateTipoPagoDto: UpdateTipoPagoDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | HttpException>;
}
