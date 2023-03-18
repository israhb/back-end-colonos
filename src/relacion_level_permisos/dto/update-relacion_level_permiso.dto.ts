import { PartialType } from '@nestjs/swagger';
import { CreateRelacionLevelPermisoDto } from './create-relacion_level_permiso.dto';

export class UpdateRelacionLevelPermisoDto extends PartialType(CreateRelacionLevelPermisoDto) {}
