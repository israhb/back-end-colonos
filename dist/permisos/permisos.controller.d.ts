import { PermisosService } from './permisos.service';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';
import { Permiso } from './entities/permiso.entity';
export declare class PermisosController {
    private permisosService;
    constructor(permisosService: PermisosService);
    create(createPermisoDto: CreatePermisoDto): Promise<Permiso>;
    findAll(): Promise<Permiso[]>;
    findPermisosforLevel(level_id: number): Promise<any[]>;
    findOne(id: number): Promise<Permiso>;
    update(id: number, updatePermisoDto: UpdatePermisoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
