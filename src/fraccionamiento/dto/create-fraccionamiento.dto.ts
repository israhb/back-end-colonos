import { IsNotEmpty, Length } from "class-validator";
export class CreateFraccionamientoDto {
    
    @IsNotEmpty()
    estado_id: number;
    
    @IsNotEmpty()
    @Length(1, 50)
    name: string;
}
