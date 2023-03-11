import { IsNotEmpty, Length } from "class-validator";

export class CreateTipoComunicadoDto {
    
    @IsNotEmpty()
    @Length(1, 50)
    name: string;
    
}

