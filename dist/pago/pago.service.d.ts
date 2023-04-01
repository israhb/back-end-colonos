import { HttpException } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Pago } from './entities/pago.entity';
import { Repository } from 'typeorm';
import { ColonoService } from 'src/colono/colono.service';
import { TipoPagoService } from 'src/tipo_pago/tipo_pago.service';
export declare class PagoService {
    private pagoRepository;
    private colonoService;
    private tipoPagoService;
    constructor(pagoRepository: Repository<Pago>, colonoService: ColonoService, tipoPagoService: TipoPagoService);
    create(createPagoDto: CreatePagoDto): Promise<Pago | HttpException>;
    findAll(): Promise<Pago[]>;
    findOne(id: number): Promise<Pago | HttpException>;
    update(id: number, updatePagoDto: UpdatePagoDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | HttpException>;
}
