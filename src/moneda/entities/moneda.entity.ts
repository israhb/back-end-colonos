import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'moneda'})
export class Moneda {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    name: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    name_code: string;

    @Column()
    activo: number;
}
