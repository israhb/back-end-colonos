import { IsNotEmpty, Length } from "class-validator";

export class CreateVisitaDto {

    @IsNotEmpty()
    colono_id: number;

    @IsNotEmpty()
    tipo_visita_id: number;

    @IsNotEmpty()
    tipo_servicio_id: number;

    @IsNotEmpty()
    tipo_transporte_id: number;
    
    @IsNotEmpty()
    @Length(1, 150)
    name: string;

    @IsNotEmpty()
    visita_date: string;

    @IsNotEmpty()
    visita_time: string;

    @IsNotEmpty()
    numero_acom: number;

    @IsNotEmpty()
    evento: number;

    placas: string;

    nota: string;

    gps: string;

    hash: string;

    @IsNotEmpty()
    upload_date: string;

    @IsNotEmpty()
    upload_time: string;
}
