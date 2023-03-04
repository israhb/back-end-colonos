import { IsNotEmpty, Length } from "class-validator";

export class CreateEstadoDto {
    @IsNotEmpty()
    @Length(1, 50)
    name: string;
}
