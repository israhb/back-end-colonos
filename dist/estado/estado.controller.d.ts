import { EstadoService } from './estado.service';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { Estado } from './entities/estado.entity';
export declare class EstadoController {
    private estadoService;
    constructor(estadoService: EstadoService);
    create(createEstadoDto: CreateEstadoDto): Promise<Estado | import("@nestjs/common").HttpException>;
    findAll(): Promise<Estado[]>;
    findOne(id: number): Promise<Estado | import("@nestjs/common").HttpException>;
    update(id: number, updateEstadoDto: UpdateEstadoDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
}
