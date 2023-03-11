import { PartialType } from '@nestjs/swagger';
import { CreateTipoComunicadoDto } from './create-tipo_comunicado.dto';

export class UpdateTipoComunicadoDto extends PartialType(CreateTipoComunicadoDto) {}
