import { ColonoService } from './colono.service';
import { CreateColonoDto } from './dto/create-colono.dto';
import { UpdateColonoDto } from './dto/update-colono.dto';
import { Colono } from './entities/colono.entity';
export declare class ColonoController {
    private colonoService;
    constructor(colonoService: ColonoService);
    create(createColonoDto: CreateColonoDto): Promise<Colono | import("@nestjs/common").HttpException>;
    findAll(): Promise<Colono[]>;
    findAllColonos(): Promise<Colono[]>;
    registerColono(body: any): Promise<Colono>;
    loginColono(body: any): Promise<Colono | {
        colono: Colono;
        permisos: {
            actions: string[];
            modulos: string[];
        };
    }>;
    findOne(id: number): Promise<false | Colono | import("@nestjs/common").HttpException>;
    update(id: number, updateColonoDto: UpdateColonoDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
}
