import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'permisos'})
export class Permiso {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
    name: string;

    @Column()
    activo: number;
}
