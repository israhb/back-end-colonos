import { Estado } from "src/estado/entities/estado.entity";
import { Folio } from "src/folio/entities/folio.entity";
export declare class Fraccionamiento {
    id: number;
    name: string;
    activo: number;
    estado_id: number;
    estado: Estado;
    folio: Folio[];
}
