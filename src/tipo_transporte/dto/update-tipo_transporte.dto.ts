import { PartialType } from '@nestjs/swagger';
import { CreateTipoTransporteDto } from './create-tipo_transporte.dto';

export class UpdateTipoTransporteDto extends PartialType(CreateTipoTransporteDto) {}
