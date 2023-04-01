import { TipoVisitaService } from './tipo_visita.service';
import { CreateTipoVisitaDto } from './dto/create-tipo_visita.dto';
import { UpdateTipoVisitaDto } from './dto/update-tipo_visita.dto';
import { TipoVisita } from './entities/tipo_visita.entity';
export declare class TipoVisitaController {
    private tipoVisitaService;
    constructor(tipoVisitaService: TipoVisitaService);
    create(createTipoVisitaDto: CreateTipoVisitaDto): Promise<TipoVisita | import("@nestjs/common").HttpException>;
    findAll(): Promise<TipoVisita[]>;
    findOne(id: number): Promise<TipoVisita | import("@nestjs/common").HttpException>;
    update(id: number, updateTipoVisitaDto: UpdateTipoVisitaDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
}
