import { CreateRelacionLevelPermisoDto } from './dto/create-relacion_level_permiso.dto';
import { UpdateRelacionLevelPermisoDto } from './dto/update-relacion_level_permiso.dto';
import { RelacionLevelPermiso } from './entities/relacion_level_permiso.entity';
import { Repository } from 'typeorm';
import { LevelService } from 'src/level/level.service';
import { PermisosService } from 'src/permisos/permisos.service';
export declare class RelacionLevelPermisosService {
    private relacionlpRepository;
    private levelService;
    private permisosService;
    constructor(relacionlpRepository: Repository<RelacionLevelPermiso>, levelService: LevelService, permisosService: PermisosService);
    create(createRelacionLevelPermisoDto: CreateRelacionLevelPermisoDto): Promise<RelacionLevelPermiso>;
    findAll(): Promise<RelacionLevelPermiso[]>;
    findOne(id: number): Promise<RelacionLevelPermiso>;
    update(id: number, updateRelacionLevelPermisoDto: UpdateRelacionLevelPermisoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
