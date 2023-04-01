import { FraccionamientoService } from './fraccionamiento.service';
import { CreateFraccionamientoDto } from './dto/create-fraccionamiento.dto';
import { UpdateFraccionamientoDto } from './dto/update-fraccionamiento.dto';
import { Fraccionamiento } from './entities/fraccionamiento.entity';
export declare class FraccionamientoController {
    private fraccionamientoService;
    constructor(fraccionamientoService: FraccionamientoService);
    create(createFraccionamientoDto: CreateFraccionamientoDto): Promise<Fraccionamiento | import("../estado/entities/estado.entity").Estado | import("@nestjs/common").HttpException>;
    findAll(): Promise<Fraccionamiento[]>;
    findForEstado(estado_id: number): Promise<Fraccionamiento[] | import("@nestjs/common").HttpException>;
    findOne(id: number): Promise<Fraccionamiento | import("@nestjs/common").HttpException>;
    update(id: number, updateFraccionamientoDto: UpdateFraccionamientoDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
}
