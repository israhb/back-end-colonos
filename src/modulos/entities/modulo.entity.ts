import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'modulos'})
export class Modulo {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
    name: string;

    @Column()
    activo: number;
}
