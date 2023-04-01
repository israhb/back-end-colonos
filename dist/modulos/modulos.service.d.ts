import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
import { Modulo } from './entities/modulo.entity';
import { Repository } from 'typeorm';
export declare class ModulosService {
    private moduloRepository;
    constructor(moduloRepository: Repository<Modulo>);
    create(createModuloDto: CreateModuloDto): Promise<Modulo>;
    findAll(): Promise<Modulo[]>;
    findModulosforLevel(level_id: number): Promise<any[]>;
    findOne(id: number): Promise<Modulo>;
    update(id: number, updateModuloDto: UpdateModuloDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
