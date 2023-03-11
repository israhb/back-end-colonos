import { IsNotEmpty, Length } from "class-validator";

export class CreateTipoNegocioDto {
    @IsNotEmpty()
    @Length(1, 50)
    name: string;
}
