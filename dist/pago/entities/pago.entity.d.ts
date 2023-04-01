import { Colono } from "src/colono/entities/colono.entity";
import { TipoPago } from "src/tipo_pago/entities/tipo_pago.entity";
export declare class Pago {
    id: number;
    colono_id: number;
    tipo_pago_id: number;
    name: string;
    monto: number;
    upload_date: string;
    upload_time: string;
    activo: number;
    colono: Colono;
    tipoPago: TipoPago;
}
