import { HttpException } from '@nestjs/common';
import { CreateVisitaDto } from './dto/create-visita.dto';
import { UpdateVisitaDto } from './dto/update-visita.dto';
import { Visita } from './entities/visita.entity';
import { Repository } from 'typeorm';
import { ColonoService } from 'src/colono/colono.service';
import { TipoVisitaService } from 'src/tipo_visita/tipo_visita.service';
import { TipoServicioService } from 'src/tipo_servicio/tipo_servicio.service';
import { TipoTransporteService } from 'src/tipo_transporte/tipo_transporte.service';
export declare class VisitaService {
    private visitaRepository;
    private colonoService;
    private tipoVisitaService;
    private tipoServicioService;
    private tipoTransporteService;
    constructor(visitaRepository: Repository<Visita>, colonoService: ColonoService, tipoVisitaService: TipoVisitaService, tipoServicioService: TipoServicioService, tipoTransporteService: TipoTransporteService);
    create(createVisitaDto: CreateVisitaDto): Promise<Visita | HttpException>;
    findAll(): Promise<Visita[]>;
    findOne(id: number): Promise<Visita | HttpException>;
    update(id: number, updateVisitaDto: UpdateVisitaDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | HttpException>;
}
