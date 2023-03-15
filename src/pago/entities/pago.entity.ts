import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    activo: number;
}
