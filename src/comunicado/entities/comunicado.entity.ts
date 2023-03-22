import { Colono } from "src/colono/entities/colono.entity";
import { TipoComunicado } from "src/tipo_comunicado/entities/tipo_comunicado.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

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

    @ManyToOne(() => Colono, colono => colono.id)
    @JoinColumn({name: 'colono_id'})
    colono: Colono;

    @ManyToOne(() => TipoComunicado, tipo_comunicado => tipo_comunicado.id)
    @JoinColumn({name: 'tipo_comunicado_id'})
    tipoComunicado: TipoComunicado;
}
