import { HttpException } from '@nestjs/common';
import { CreateFraccionamientoDto } from './dto/create-fraccionamiento.dto';
import { UpdateFraccionamientoDto } from './dto/update-fraccionamiento.dto';
import { Fraccionamiento } from './entities/fraccionamiento.entity';
import { Repository } from 'typeorm';
import { EstadoService } from 'src/estado/estado.service';
export declare class FraccionamientoService {
    private fraccionamientoRepository;
    private estadoService;
    constructor(fraccionamientoRepository: Repository<Fraccionamiento>, estadoService: EstadoService);
    create(createFraccionamientoDto: CreateFraccionamientoDto): Promise<Fraccionamiento | import("../estado/entities/estado.entity").Estado | HttpException>;
    findAll(): Promise<Fraccionamiento[]>;
    findforEstado(estado_id: number): Promise<Fraccionamiento[] | HttpException>;
    findOne(id: number): Promise<Fraccionamiento | HttpException>;
    update(id: number, updateFraccionamientoDto: UpdateFraccionamientoDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | HttpException>;
}
