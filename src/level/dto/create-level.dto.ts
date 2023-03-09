import { IsNotEmpty, Length } from "class-validator";

export class CreateLevelDto {

    @IsNotEmpty()
    @Length(1, 50)
    name: string;

    @IsNotEmpty()
    code_level: number;
}
