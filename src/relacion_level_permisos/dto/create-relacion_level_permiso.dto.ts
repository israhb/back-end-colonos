import { IsNotEmpty } from "class-validator";
export class CreateRelacionLevelPermisoDto {

    @IsNotEmpty()
    level_id: number;

    @IsNotEmpty()
    permiso_id: number;

}
