import { IsNotEmpty, Length } from "class-validator";

export class CreateTipoTransporteDto {
    @IsNotEmpty()
    @Length(1, 50)
    name: string;
}
