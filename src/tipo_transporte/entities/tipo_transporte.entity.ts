import { Visita } from "src/visita/entities/visita.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'tipo_transporte'})
export class TipoTransporte {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    name: string;

    @Column()
    activo: number;

    @OneToMany(() => Visita, visita => visita.tipo_transporte_id)
    @JoinColumn({name: 'id'})
    visita: Visita;
}
