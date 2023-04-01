import { HttpException } from '@nestjs/common';
import { CreateTipoComunicadoDto } from './dto/create-tipo_comunicado.dto';
import { UpdateTipoComunicadoDto } from './dto/update-tipo_comunicado.dto';
import { TipoComunicado } from './entities/tipo_comunicado.entity';
import { Repository } from 'typeorm';
export declare class TipoComunicadoService {
    private tipoComunicadoRepository;
    constructor(tipoComunicadoRepository: Repository<TipoComunicado>);
    create(createTipoComunicadoDto: CreateTipoComunicadoDto): Promise<TipoComunicado | HttpException>;
    findAll(): Promise<TipoComunicado[]>;
    findOne(id: number): Promise<TipoComunicado | HttpException>;
    update(id: number, updateTipoComunicadoDto: UpdateTipoComunicadoDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | HttpException>;
}
