import { IsNotEmpty, Length } from "class-validator";

export class CreateTipoVisitaDto {
    @IsNotEmpty()
    @Length(1, 50)
    name: string;
}
