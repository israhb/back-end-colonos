import { PagoService } from './pago.service';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Pago } from './entities/pago.entity';
export declare class PagoController {
    private pagoService;
    constructor(pagoService: PagoService);
    create(createPagoDto: CreatePagoDto): Promise<Pago | import("@nestjs/common").HttpException>;
    getPagoColonoId(id: number): Promise<any[]>;
    findAll(): Promise<Pago[]>;
    findOne(id: number): Promise<Pago | import("@nestjs/common").HttpException>;
    update(id: number, updatePagoDto: UpdatePagoDto): Promise<import("@nestjs/common").HttpException | import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("@nestjs/common").HttpException | import("typeorm").UpdateResult>;
}
