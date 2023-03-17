import { IsNotEmpty, Length } from "class-validator";

export class CreatePermisoDto {

    @IsNotEmpty()
    @Length(1, 50)
    name: string;
}
