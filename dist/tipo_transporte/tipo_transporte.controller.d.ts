import { TipoTransporteService } from './tipo_transporte.service';
import { CreateTipoTransporteDto } from './dto/create-tipo_transporte.dto';
import { UpdateTipoTransporteDto } from './dto/update-tipo_transporte.dto';
import { TipoTransporte } from './entities/tipo_transporte.entity';
export declare class TipoTransporteController {
    private tipoTransporteService;
    constructor(tipoTransporteService: TipoTransporteService);
    create(createTipoTransporteDto: CreateTipoTransporteDto): Promise<TipoTransporte | import("@nestjs/common").HttpException>;
    findAll(): Promise<TipoTransporte[]>;
    findOne(id: number): Promise<TipoTransporte | import("@nestjs/common").HttpException>;
    update(id: number, updateTipoTransporteDto: UpdateTipoTransporteDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
}
