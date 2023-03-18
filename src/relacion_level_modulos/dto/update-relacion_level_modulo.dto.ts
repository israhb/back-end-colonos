import { PartialType } from '@nestjs/swagger';
import { CreateRelacionLevelModuloDto } from './create-relacion_level_modulo.dto';

export class UpdateRelacionLevelModuloDto extends PartialType(CreateRelacionLevelModuloDto) {}
