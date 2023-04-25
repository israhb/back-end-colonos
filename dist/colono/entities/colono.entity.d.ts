import { Comunicado } from "src/comunicado/entities/comunicado.entity";
import { Folio } from "src/folio/entities/folio.entity";
import { Level } from "src/level/entities/level.entity";
import { Negocio } from "src/negocio/entities/negocio.entity";
import { Pago } from "src/pago/entities/pago.entity";
export declare class Colono {
    id: number;
    folio_id: number;
    level_id: number;
    password: string;
    gps: string;
    telefono: string;
    nombre: string;
    apellido_materno: string;
    apellido_paterno: string;
    calle: string;
    numero_exterior: string;
    numero_interior: string;
    cp: string;
    edificio: string;
    manzana: string;
    lote: string;
    departamento: string;
    casa: string;
    nuevo: string;
    registrado: string;
    token: string;
    upload_date: string;
    upload_time: string;
    activo: number;
    folio: Folio;
    level: Level;
    pago: Pago;
    comunicado: Comunicado;
    negocio: Negocio;
    visita: Negocio;
}