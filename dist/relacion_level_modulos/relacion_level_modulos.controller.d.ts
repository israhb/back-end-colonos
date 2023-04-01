import { RelacionLevelModulosService } from './relacion_level_modulos.service';
import { CreateRelacionLevelModuloDto } from './dto/create-relacion_level_modulo.dto';
import { UpdateRelacionLevelModuloDto } from './dto/update-relacion_level_modulo.dto';
import { RelacionLevelModulo } from './entities/relacion_level_modulo.entity';
export declare class RelacionLevelModulosController {
    private relacionLevelModulosService;
    constructor(relacionLevelModulosService: RelacionLevelModulosService);
    create(createRelacionLevelModuloDto: CreateRelacionLevelModuloDto): Promise<RelacionLevelModulo>;
    findAll(): Promise<RelacionLevelModulo[]>;
    findOne(id: number): Promise<RelacionLevelModulo>;
    update(id: number, updateRelacionLevelModuloDto: UpdateRelacionLevelModuloDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
