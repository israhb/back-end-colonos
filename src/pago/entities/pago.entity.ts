import { Colono } from "src/colono/entities/colono.entity";
import { TipoPago } from "src/tipo_pago/entities/tipo_pago.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'pago'})
export class Pago {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'colono_id', type: 'int', nullable: false })
    colono_id: number;

    @Column({name: 'tipo_pago_id', type: 'int', nullable: false })
    tipo_pago_id: number;

    @Column({ type: 'varchar', length: 45, nullable: false, unique: true })
    name: string;

    @Column({type: 'int', nullable: false })
    monto: number;

    @Column({ type: 'date', default: new Date(), nullable: false})
    upload_date: string;

    @Column({ type: 'time', default: '00:00:00', nullable: false })
    upload_time: string;

    @Column()
    activo: number;

    @ManyToOne(() => Colono, colono => colono.id)
    @JoinColumn({name: 'colono_id'})
    colono: Colono;

    @ManyToOne(() => TipoPago, tipo_pago => tipo_pago.id)
    @JoinColumn({name: 'tipo_pago_id'})
    tipoPago: TipoPago;
}
