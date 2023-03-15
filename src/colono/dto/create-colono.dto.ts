import { IsNotEmpty, Length } from "class-validator";

export class CreateColonoDto {

    @IsNotEmpty()
    folio_id: number;

    @IsNotEmpty()
    level_id: number;

    @IsNotEmpty()
    password: string;

    gps: string;

    @IsNotEmpty()
    @Length(0, 12)
    telefono: string;

    @IsNotEmpty()
    @Length(1, 100)
    nombre: string;

    @Length(0, 100)
    apellido_materno: string;

    @Length(0, 100)
    apellido_paterno: string;

    @Length(0, 100)
    calle: string;

    @Length(0, 5)
    numero_exterior: string;

    @Length(0, 5)
    numero_interior: string;

    @Length(0, 5)
    cp: string;

    @Length(0, 10)
    edificio: string;

    @Length(0, 10)
    manzana: string;

    @Length(0, 10)
    lote: string;

    @Length(0, 10)
    departamento: string;

    @Length(0, 10)
    casa: string;

    nuevo: string;

    registrado: string;

    token: string;

    upload_date: string;

    upload_time: string;
}
