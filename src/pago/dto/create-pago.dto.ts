import { IsNotEmpty, Length } from "class-validator";
export class CreatePagoDto {

    @IsNotEmpty()
    colono_id: number;

    @IsNotEmpty()
    tipo_pago_id: number;
    
    @IsNotEmpty()
    @Length(1, 50)
    name: string;

    @IsNotEmpty()
    monto: number;

    @IsNotEmpty()
    upload_date: string;

    @IsNotEmpty()
    upload_time: string;

}
