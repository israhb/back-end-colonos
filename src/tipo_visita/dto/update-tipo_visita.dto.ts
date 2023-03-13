import { PartialType } from '@nestjs/swagger';
import { CreateTipoVisitaDto } from './create-tipo_visita.dto';

export class UpdateTipoVisitaDto extends PartialType(CreateTipoVisitaDto) {}
