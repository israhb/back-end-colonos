import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'tipo_visita'})
export class TipoVisita {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    name: string;

    @Column()
    activo: number;
}
