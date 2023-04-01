import { RelacionLevelPermisosService } from './relacion_level_permisos.service';
import { CreateRelacionLevelPermisoDto } from './dto/create-relacion_level_permiso.dto';
import { UpdateRelacionLevelPermisoDto } from './dto/update-relacion_level_permiso.dto';
import { RelacionLevelPermiso } from './entities/relacion_level_permiso.entity';
export declare class RelacionLevelPermisosController {
    private relacionLevelPermisosService;
    constructor(relacionLevelPermisosService: RelacionLevelPermisosService);
    create(createRelacionLevelPermisoDto: CreateRelacionLevelPermisoDto): Promise<RelacionLevelPermiso>;
    findAll(): Promise<RelacionLevelPermiso[]>;
    findOne(id: number): Promise<RelacionLevelPermiso>;
    update(id: number, updateRelacionLevelPermisoDto: UpdateRelacionLevelPermisoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
