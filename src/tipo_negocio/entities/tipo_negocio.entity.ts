import { Negocio } from "src/negocio/entities/negocio.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'tipo_negocio'})
export class TipoNegocio {
        
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    name: string;

    @Column()
    activo: number;

    @OneToMany(() => Negocio, negocio => negocio.tipo_negocio_id)
    @JoinColumn({name: 'id'})
    negocio: Negocio;
}
