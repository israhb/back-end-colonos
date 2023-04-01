import { TipoComunicadoService } from './tipo_comunicado.service';
import { CreateTipoComunicadoDto } from './dto/create-tipo_comunicado.dto';
import { UpdateTipoComunicadoDto } from './dto/update-tipo_comunicado.dto';
import { TipoComunicado } from './entities/tipo_comunicado.entity';
export declare class TipoComunicadoController {
    private tipoComunicadoService;
    constructor(tipoComunicadoService: TipoComunicadoService);
    create(createTipoComunicadoDto: CreateTipoComunicadoDto): Promise<TipoComunicado | import("@nestjs/common").HttpException>;
    findAll(): Promise<TipoComunicado[]>;
    findOne(id: number): Promise<TipoComunicado | import("@nestjs/common").HttpException>;
    update(id: number, updateTipoComunicadoDto: UpdateTipoComunicadoDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
}
