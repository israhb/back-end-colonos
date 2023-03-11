import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'tipo_pago'})
export class TipoPago {
            
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    name: string;

    @Column()
    activo: number;
}
