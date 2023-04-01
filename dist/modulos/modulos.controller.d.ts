import { ModulosService } from './modulos.service';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
import { Modulo } from './entities/modulo.entity';
export declare class ModulosController {
    private modulosService;
    constructor(modulosService: ModulosService);
    create(createModuloDto: CreateModuloDto): Promise<Modulo>;
    findAll(): Promise<Modulo[]>;
    findPermisosforLevel(level_id: number): Promise<any[]>;
    findOne(id: number): Promise<Modulo>;
    update(id: number, updateModuloDto: UpdateModuloDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
