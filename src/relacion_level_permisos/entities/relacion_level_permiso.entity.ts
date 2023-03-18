import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'relacion_level_permisos'})
export class RelacionLevelPermiso {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'level_id'})
    level_id: number;

    @Column({name: 'permiso_id'})
    permiso_id: number;

    @Column()
    activo: number;
}
