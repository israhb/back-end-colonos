import { IsNotEmpty, Length } from "class-validator";

export class CreateLoginCountDto {

    @IsNotEmpty()
    @Length(1, 50)
    folio: string;

    @IsNotEmpty()
    @Length(1, 200)
    mac: string;

    @IsNotEmpty()
    upload_date: string;
}
