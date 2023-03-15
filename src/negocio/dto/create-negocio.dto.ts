import { IsNotEmpty, Length } from "class-validator";

export class CreateNegocioDto {

    @IsNotEmpty()
    tipo_negocio_id: number;

    @IsNotEmpty()
    colono_id: number;
    
    @IsNotEmpty()
    @Length(1, 45)
    name: string;

    @IsNotEmpty()
    @Length(1, 12)
    telefono_1: string;

    telefono_2: string;

    foto_1: string;

    foto_2: string;

    foto_3: string;

    foto_4: string;

    @IsNotEmpty()
    direccion: string;

    @IsNotEmpty()
    upload_date: string;

    @IsNotEmpty()
    upload_time: string;
}
