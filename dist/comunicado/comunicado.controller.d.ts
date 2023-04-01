import { ComunicadoService } from './comunicado.service';
import { CreateComunicadoDto } from './dto/create-comunicado.dto';
import { UpdateComunicadoDto } from './dto/update-comunicado.dto';
import { Comunicado } from './entities/comunicado.entity';
export declare class ComunicadoController {
    private comunicadoService;
    constructor(comunicadoService: ComunicadoService);
    create(createComunicadoDto: CreateComunicadoDto): Promise<Comunicado | import("@nestjs/common").HttpException>;
    findAll(): Promise<Comunicado[]>;
    findOne(id: number): Promise<Comunicado | import("@nestjs/common").HttpException>;
    update(id: number, updateComunicadoDto: UpdateComunicadoDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
}
