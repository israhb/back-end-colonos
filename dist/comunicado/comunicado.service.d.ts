import { HttpException } from '@nestjs/common';
import { CreateComunicadoDto } from './dto/create-comunicado.dto';
import { UpdateComunicadoDto } from './dto/update-comunicado.dto';
import { Comunicado } from './entities/comunicado.entity';
import { Repository } from 'typeorm';
import { TipoComunicadoService } from 'src/tipo_comunicado/tipo_comunicado.service';
import { ColonoService } from 'src/colono/colono.service';
export declare class ComunicadoService {
    private comunicadoRepository;
    private tipoComunicado;
    private colono;
    constructor(comunicadoRepository: Repository<Comunicado>, tipoComunicado: TipoComunicadoService, colono: ColonoService);
    create(createComunicadoDto: CreateComunicadoDto): Promise<Comunicado | HttpException>;
    findAll(): Promise<Comunicado[]>;
    findOne(id: number): Promise<Comunicado | HttpException>;
    update(id: number, updateComunicadoDto: UpdateComunicadoDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | HttpException>;
}
