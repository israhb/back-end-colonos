import { Colono } from "src/colono/entities/colono.entity";
import { TipoServicio } from "src/tipo_servicio/entities/tipo_servicio.entity";
import { TipoTransporte } from "src/tipo_transporte/entities/tipo_transporte.entity";
import { TipoVisita } from "src/tipo_visita/entities/tipo_visita.entity";
export declare class Visita {
    id: number;
    colono_id: number;
    tipo_visita_id: number;
    tipo_servicio_id: number;
    tipo_transporte_id: number;
    name: string;
    visita_date: string;
    visita_time: string;
    numero_acom: number;
    evento: number;
    placas: string;
    nota: string;
    gps: string;
    hash: string;
    upload_date: string;
    upload_time: string;
    activo: number;
    colono: Colono;
    tipoVisita: TipoVisita;
    tipoServicio: TipoServicio;
    tipoTransporte: TipoTransporte;
}
