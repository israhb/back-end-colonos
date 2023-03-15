import { PartialType } from '@nestjs/swagger';
import { CreateColonoDto } from './create-colono.dto';

export class UpdateColonoDto extends PartialType(CreateColonoDto) {}
