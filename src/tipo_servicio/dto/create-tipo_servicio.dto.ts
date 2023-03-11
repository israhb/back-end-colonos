import { IsNotEmpty, Length } from "class-validator";

export class CreateTipoServicioDto {
    @IsNotEmpty()
    @Length(1, 50)
    name: string;
}
