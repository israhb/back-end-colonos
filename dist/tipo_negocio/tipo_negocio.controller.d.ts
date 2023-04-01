import { TipoNegocioService } from './tipo_negocio.service';
import { CreateTipoNegocioDto } from './dto/create-tipo_negocio.dto';
import { UpdateTipoNegocioDto } from './dto/update-tipo_negocio.dto';
import { TipoNegocio } from './entities/tipo_negocio.entity';
export declare class TipoNegocioController {
    private tipoNegocioService;
    constructor(tipoNegocioService: TipoNegocioService);
    create(createTipoNegocioDto: CreateTipoNegocioDto): Promise<TipoNegocio | import("@nestjs/common").HttpException>;
    findAll(): Promise<TipoNegocio[]>;
    findOne(id: number): Promise<TipoNegocio | import("@nestjs/common").HttpException>;
    update(id: number, updateTipoNegocioDto: UpdateTipoNegocioDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
}
