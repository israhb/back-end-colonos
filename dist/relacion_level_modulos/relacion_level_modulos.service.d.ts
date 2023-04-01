import { CreateRelacionLevelModuloDto } from './dto/create-relacion_level_modulo.dto';
import { UpdateRelacionLevelModuloDto } from './dto/update-relacion_level_modulo.dto';
import { RelacionLevelModulo } from './entities/relacion_level_modulo.entity';
import { Repository } from 'typeorm';
import { LevelService } from 'src/level/level.service';
import { ModulosService } from 'src/modulos/modulos.service';
export declare class RelacionLevelModulosService {
    private relacionlmRepository;
    private levelService;
    private modulosService;
    constructor(relacionlmRepository: Repository<RelacionLevelModulo>, levelService: LevelService, modulosService: ModulosService);
    create(createRelacionLevelModuloDto: CreateRelacionLevelModuloDto): Promise<RelacionLevelModulo>;
    findAll(): Promise<RelacionLevelModulo[]>;
    findOne(id: number): Promise<RelacionLevelModulo>;
    update(id: number, updateRelacionLevelModuloDto: UpdateRelacionLevelModuloDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
