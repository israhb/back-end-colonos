import { IsNotEmpty, Length } from "class-validator";
export class CreateFolioDto {
    @IsNotEmpty()
    estado_id: number;

    @IsNotEmpty()
    frac_id: number;
    
    @IsNotEmpty()
    @Length(1, 50)
    name: string;

    @IsNotEmpty()
    @Length(1, 200)
    mac: string;

    @IsNotEmpty()
    nuevo: number;

    @IsNotEmpty()
    upload_date: string;

    @IsNotEmpty()
    upload_time: string;
}
