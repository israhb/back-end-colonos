import { NegocioService } from './negocio.service';
import { CreateNegocioDto } from './dto/create-negocio.dto';
import { UpdateNegocioDto } from './dto/update-negocio.dto';
import { Negocio } from './entities/negocio.entity';
export declare class NegocioController {
    private negocioService;
    constructor(negocioService: NegocioService);
    create(createNegocioDto: CreateNegocioDto): Promise<Negocio | import("@nestjs/common").HttpException>;
    findAll(): Promise<Negocio[]>;
    findOne(id: number): Promise<Negocio | import("@nestjs/common").HttpException>;
    update(id: number, updateNegocioDto: UpdateNegocioDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
}
