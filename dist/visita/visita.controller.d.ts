import { VisitaService } from './visita.service';
import { CreateVisitaDto } from './dto/create-visita.dto';
import { UpdateVisitaDto } from './dto/update-visita.dto';
import { Visita } from './entities/visita.entity';
export declare class VisitaController {
    private visitaService;
    constructor(visitaService: VisitaService);
    create(createVisitaDto: CreateVisitaDto): Promise<Visita | import("@nestjs/common").HttpException>;
    findAll(): Promise<Visita[]>;
    findOne(id: number): Promise<Visita | import("@nestjs/common").HttpException>;
    update(id: number, updateVisitaDto: UpdateVisitaDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
}
