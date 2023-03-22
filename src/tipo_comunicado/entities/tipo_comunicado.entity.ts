import { Comunicado } from "src/comunicado/entities/comunicado.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'tipo_comunicado'})
export class TipoComunicado {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    name: string;

    @Column()
    activo: number;

    @OneToMany(() => Comunicado, comunicado => comunicado.tipo_comunicado_id)
    @JoinColumn({name: 'id'})
    comunicado: Comunicado;
}
