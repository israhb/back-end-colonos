import { Folio } from "src/folio/entities/folio.entity";
import { Fraccionamiento } from "src/fraccionamiento/entities/fraccionamiento.entity";
export declare class Estado {
    id: number;
    name: string;
    activo: number;
    fraccionamientos: Fraccionamiento[];
    folio: Folio[];
}
