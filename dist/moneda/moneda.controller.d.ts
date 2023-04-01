import { MonedaService } from './moneda.service';
import { CreateMonedaDto } from './dto/create-moneda.dto';
import { UpdateMonedaDto } from './dto/update-moneda.dto';
import { Moneda } from './entities/moneda.entity';
export declare class MonedaController {
    private monedaService;
    constructor(monedaService: MonedaService);
    create(createMonedaDto: CreateMonedaDto): Promise<import("@nestjs/common").HttpException | Moneda>;
    findAll(): Promise<Moneda[]>;
    findOne(id: number): Promise<import("@nestjs/common").HttpException | Moneda>;
    update(id: number, updateMonedaDto: UpdateMonedaDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
}
