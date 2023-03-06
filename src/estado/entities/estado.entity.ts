import { Folio } from "src/folio/entities/folio.entity";
import { Fraccionamiento } from "src/fraccionamiento/entities/fraccionamiento.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'estado'})
export class Estado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    name: string;

    @Column()
    activo: number;

    @OneToMany(() => Fraccionamiento, fraccionamiento => fraccionamiento.estado_id)
    fraccionamientos: Fraccionamiento[];

    @OneToMany(() => Folio, folio => folio.estado_id)
    folio: Folio[];
}
