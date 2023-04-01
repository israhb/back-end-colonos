import { TipoServicioService } from './tipo_servicio.service';
import { CreateTipoServicioDto } from './dto/create-tipo_servicio.dto';
import { UpdateTipoServicioDto } from './dto/update-tipo_servicio.dto';
import { TipoServicio } from './entities/tipo_servicio.entity';
export declare class TipoServicioController {
    private tipoServicioService;
    constructor(tipoServicioService: TipoServicioService);
    create(createTipoServicioDto: CreateTipoServicioDto): Promise<TipoServicio | import("@nestjs/common").HttpException>;
    findAll(): Promise<TipoServicio[]>;
    findOne(id: number): Promise<TipoServicio | import("@nestjs/common").HttpException>;
    update(id: number, updateTipoServicioDto: UpdateTipoServicioDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
}
