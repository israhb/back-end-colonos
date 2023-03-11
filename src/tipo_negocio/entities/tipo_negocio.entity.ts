import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'tipo_negocio'})
export class TipoNegocio {
        
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    name: string;

    @Column()
    activo: number;
}
