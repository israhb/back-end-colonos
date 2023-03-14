import { IsNotEmpty, Length } from "class-validator";

export class CreateMonedaDto {
    
    @IsNotEmpty()
    @Length(1, 10)
    name: string;

    @IsNotEmpty()
    @Length(1, 10)
    name_code: string;
}
