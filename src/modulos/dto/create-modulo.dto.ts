import { IsNotEmpty, Length } from "class-validator";

export class CreateModuloDto {

    @IsNotEmpty()
    @Length(1, 50)
    name: string;
    
}
