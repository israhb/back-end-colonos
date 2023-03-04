import { PartialType } from '@nestjs/swagger';
import { CreateEstadoDto } from './create-estado.dto';
import { IsNotEmpty, Length } from "class-validator";

export class UpdateEstadoDto extends PartialType(CreateEstadoDto) {
    @IsNotEmpty()
    @Length(1, 50)
    name: string;
}
