import { TipoPagoService } from './tipo_pago.service';
import { CreateTipoPagoDto } from './dto/create-tipo_pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo_pago.dto';
import { TipoPago } from './entities/tipo_pago.entity';
export declare class TipoPagoController {
    private tipoPagoService;
    constructor(tipoPagoService: TipoPagoService);
    create(createTipoPagoDto: CreateTipoPagoDto): Promise<TipoPago | import("@nestjs/common").HttpException>;
    findAll(): Promise<TipoPago[]>;
    findOne(id: number): Promise<TipoPago | import("@nestjs/common").HttpException>;
    update(id: number, updateTipoPagoDto: UpdateTipoPagoDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
}
