import { Colono } from "src/colono/entities/colono.entity";
import { Estado } from "src/estado/entities/estado.entity";
import { Fraccionamiento } from "src/fraccionamiento/entities/fraccionamiento.entity";
export declare class Folio {
    id: number;
    name: string;
    mac: string;
    nuevo: number;
    upload_date: string;
    upload_time: string;
    activo: number;
    estado_id: number;
    frac_id: number;
    estado: Estado;
    fraccionamiento: Fraccionamiento;
    colono: Colono[];
}
