import { PartialType } from '@nestjs/swagger';
import { CreateTipoNegocioDto } from './create-tipo_negocio.dto';

export class UpdateTipoNegocioDto extends PartialType(CreateTipoNegocioDto) {}
