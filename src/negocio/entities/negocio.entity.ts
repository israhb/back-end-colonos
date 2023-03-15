import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'negocio'})
export class Negocio {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'tipo_negocio_id', nullable: false})
    tipo_negocio_id: number;

    @Column({name: 'colono_id', nullable: false})
    colono_id: number;

    @Column({ type: 'varchar', length: 45, nullable: false, unique: true })
    name: string;

    @Column({name: 'telefono_1', type: 'varchar', length: 12, nullable: false })
    telefono_1: string;

    @Column({name: 'telefono_2', type: 'varchar', length: 12 })
    telefono_2: string;

    @Column({name: 'foto_1', type: 'text' })
    foto_1: string;

    @Column({name: 'foto_2', type: 'text' })
    foto_2: string;

    @Column({name: 'foto_3', type: 'text' })
    foto_3: string;

    @Column({name: 'foto_4', type: 'text' })
    foto_4: string;

    @Column({type: 'text', nullable: false })
    direccion: string;

    @Column({ type: 'date', default: new Date(), nullable: false})
    upload_date: string;

    @Column({ type: 'time', default: '00:00:00', nullable: false })
    upload_time: string;

    @Column()
    activo: number;
   
}
