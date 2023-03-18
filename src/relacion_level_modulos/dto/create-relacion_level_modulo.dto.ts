import { IsNotEmpty } from "class-validator";
export class CreateRelacionLevelModuloDto {

    @IsNotEmpty()
    level_id: number;

    @IsNotEmpty()
    modulo_id: number;

}
