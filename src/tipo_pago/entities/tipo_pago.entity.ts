import { Pago } from "src/pago/entities/pago.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'tipo_pago'})
export class TipoPago {
            
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    name: string;

    @Column()
    activo: number;

    @OneToMany(() => Pago, pago => pago.tipo_pago_id)
    @JoinColumn({name: 'id'})
    pago: Pago;
}
