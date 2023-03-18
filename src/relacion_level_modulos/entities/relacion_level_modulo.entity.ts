import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'relacion_level_modulos'})
export class RelacionLevelModulo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'level_id'})
    level_id: number;

    @Column({name: 'modulo_id'})
    modulo_id: number;

    @Column()
    activo: number;
}
