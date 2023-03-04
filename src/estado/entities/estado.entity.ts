import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'estado'})
export class Estado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    name: string;

}
