import { Colono } from "src/colono/entities/colono.entity";
import { TipoComunicado } from "src/tipo_comunicado/entities/tipo_comunicado.entity";
export declare class Comunicado {
    id: number;
    tipo_comunicado_id: number;
    colono_id: number;
    name: string;
    foto_1: string;
    foto_2: string;
    activo: number;
    colono: Colono;
    tipoComunicado: TipoComunicado;
}
