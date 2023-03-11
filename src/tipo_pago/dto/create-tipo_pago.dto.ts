import { IsNotEmpty, Length } from "class-validator";

export class CreateTipoPagoDto {
    @IsNotEmpty()
    @Length(1, 50)
    name: string;
}
