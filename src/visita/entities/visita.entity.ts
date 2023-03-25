import { Colono } from "src/colono/entities/colono.entity";
import { TipoServicio } from "src/tipo_servicio/entities/tipo_servicio.entity";
import { TipoTransporte } from "src/tipo_transporte/entities/tipo_transporte.entity";
import { TipoVisita } from "src/tipo_visita/entities/tipo_visita.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'visita'})
export class Visita {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'colono_id', nullable: false})
    colono_id: number;

    @Column({name: 'tipo_visita_id', nullable: false})
    tipo_visita_id: number;

    @Column({name: 'tipo_servicio_id', nullable: false})
    tipo_servicio_id: number;

    @Column({name: 'tipo_transporte_id', nullable: false})
    tipo_transporte_id: number;

    @Column({ type: 'varchar', length: 150, nullable: false })
    name: string;

    @Column({name: 'visita_date', type: 'date', default: new Date(), nullable: false})
    visita_date: string;

    @Column({name: 'visita_time', type: 'time', default: '00:00:00', nullable: false })
    visita_time: string;

    @Column({name: 'numero_acom', nullable: false})
    numero_acom: number;

    @Column({nullable: false})
    evento: number;

    @Column({type: 'varchar', length: 10 })
    placas: string;

    @Column({type: 'text' })
    nota: string;
    
    @Column({type: 'text' })
    gps: string;

    @Column({type: 'text' })
    hash: string;

    @Column({ type: 'date', default: new Date(), nullable: false})
    upload_date: string;

    @Column({ type: 'time', default: '00:00:00', nullable: false })
    upload_time: string;

    @Column()
    activo: number;

    @ManyToOne(() => Colono, colono => colono.id)
    @JoinColumn({name: 'colono_id'})
    colono: Colono;

    @ManyToOne(() => TipoVisita, tipo_visita => tipo_visita.id)
    @JoinColumn({name: 'tipo_visita_id'})
    tipoVisita: TipoVisita;

    @ManyToOne(() => TipoServicio, tipo_servicio => tipo_servicio.id)
    @JoinColumn({name: 'tipo_servicio_id'})
    tipoServicio: TipoServicio;

    @ManyToOne(() => TipoTransporte, tipo_transporte => tipo_transporte.id)
    @JoinColumn({name: 'tipo_transporte_id'})
    tipoTransporte: TipoTransporte;
}
