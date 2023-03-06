import { Estado } from "src/estado/entities/estado.entity";
import { Folio } from "src/folio/entities/folio.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'fraccionamiento'})
export class Fraccionamiento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    name: string;

    @Column()
    activo: number;

    @Column({name: 'estado_id'})
    estado_id: number;

    @ManyToOne(() => Estado, estado => estado.id)
    @JoinColumn({name: 'estado_id'})
    estado: Estado;

    @OneToMany(() => Folio, folio => folio.estado_id)
    folio: Folio[];
}
