import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
