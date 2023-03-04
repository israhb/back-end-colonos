import { PartialType } from '@nestjs/swagger';
import { CreateFraccionamientoDto } from './create-fraccionamiento.dto';

export class UpdateFraccionamientoDto extends PartialType(CreateFraccionamientoDto) {}
