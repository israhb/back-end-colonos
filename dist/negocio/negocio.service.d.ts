import { HttpException } from '@nestjs/common';
import { CreateNegocioDto } from './dto/create-negocio.dto';
import { UpdateNegocioDto } from './dto/update-negocio.dto';
import { Negocio } from './entities/negocio.entity';
import { Repository } from 'typeorm';
import { ColonoService } from 'src/colono/colono.service';
import { TipoNegocioService } from 'src/tipo_negocio/tipo_negocio.service';
export declare class NegocioService {
    private negocioRepository;
    private colonoService;
    private tipoNegocioService;
    constructor(negocioRepository: Repository<Negocio>, colonoService: ColonoService, tipoNegocioService: TipoNegocioService);
    create(createNegocioDto: CreateNegocioDto): Promise<Negocio | HttpException>;
    findAll(): Promise<Negocio[]>;
    findOne(id: number): Promise<Negocio | HttpException>;
    update(id: number, updateNegocioDto: UpdateNegocioDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | HttpException>;
}
