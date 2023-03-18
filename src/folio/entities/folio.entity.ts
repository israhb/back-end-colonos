import { Colono } from "src/colono/entities/colono.entity";
import { Estado } from "src/estado/entities/estado.entity";
import { Fraccionamiento } from "src/fraccionamiento/entities/fraccionamiento.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'folio'})
export class Folio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    name: string;

    @Column({ type: 'varchar', length: 200, nullable: true, unique: true })
    mac: string;

    @Column({ type: 'int', nullable: false })
    nuevo: number;

    @Column({ type: 'date', default: new Date(), nullable: false})
    upload_date: string;

    @Column({ type: 'time', default: '00:00:00', nullable: false })
    upload_time: string;

    @Column()
    activo: number;

    @Column({name: 'estado_id'})
    estado_id: number;

    @Column({name: 'frac_id'})
    frac_id: number;

    @ManyToOne(() => Estado, estado => estado.id)
    @JoinColumn({name: 'estado_id'})
    estado: Estado;

    @ManyToOne(() => Fraccionamiento, fraccionamiento => fraccionamiento.id)
    @JoinColumn({name: 'frac_id'})
    fraccionamiento: Fraccionamiento;

    @OneToMany(() => Colono, colono => colono.folio_id)
    @JoinColumn({name: 'folio_id'})
    colono: Colono[];
}
