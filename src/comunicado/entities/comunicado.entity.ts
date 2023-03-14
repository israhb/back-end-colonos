import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'comunicado'})
export class Comunicado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'tipo_comunicado_id', type:'int'})
    tipo_comunicado_id: number;

    @Column({name: 'colono_id', type:'int'})
    colono_id: number;
    
    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    name: string;

    @Column({ name: 'foto_1', type: 'text' })
    foto_1: string;

    @Column({name: 'foto_2', type: 'text' })
    foto_2: string;

    @Column()
    activo: number;
}
