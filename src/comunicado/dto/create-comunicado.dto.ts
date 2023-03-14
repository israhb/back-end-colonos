import { IsNotEmpty, Length } from "class-validator";

export class CreateComunicadoDto {

    @IsNotEmpty()
    tipo_comunicado_id: number;

    @IsNotEmpty()
    colono_id:number;

    @IsNotEmpty()
    @Length(1, 50)
    name: string;

    foto_1: string;

    foto_2: string;

}
