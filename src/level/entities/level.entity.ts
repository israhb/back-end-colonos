import { Colono } from "src/colono/entities/colono.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'level'})
export class Level {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    name: string;

    @Column({ type: 'int', nullable: false })
    code_level: number;

    @Column()
    activo: number;

    @OneToMany(() => Colono, colono => colono.folio_id)
    colono: Colono[];
}
