import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'colono'})
export class Colono {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'folio_id', type:'int', nullable: false})
    folio_id: number;

    @Column({name: 'level_id', type:'int', nullable: false})
    level_id: number;
    
    @Column({ type: 'varchar', length: 100, nullable: false })
    password: string;

    @Column({ name: 'gps', type: 'varchar', nullable: true })
    gps: string;

    @Column({type: 'varchar', length: 12, nullable: false, unique: true })
    telefono: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    nombre: string;

    @Column({name: 'apellido_materno', type: 'varchar', length: 100, nullable: true })
    apellido_materno: string;

    @Column({name: 'apellido_paterno', type: 'varchar', length: 100, nullable: true })
    apellido_paterno: string;

    @Column({type: 'varchar', length: 100, nullable: true })
    calle: string;

    @Column({name: 'numero_exterior', type: 'varchar', length: 5, nullable: true })
    numero_exterior: string;

    @Column({name: 'numero_interior', type: 'varchar', length: 5, nullable: true })
    numero_interior: string;

    @Column({type: 'varchar', length: 5, nullable: true })
    cp: string;

    @Column({type: 'varchar', length: 10, nullable: true })
    edificio: string;

    @Column({type: 'varchar', length: 10, nullable: true })
    manzana: string;

    @Column({type: 'varchar', length: 10, nullable: true })
    lote: string;

    @Column({type: 'varchar', length: 10, nullable: true })
    departamento: string;

    @Column({type: 'varchar', length: 10, nullable: true })
    casa: string;

    @Column({type: 'varchar', length: 1, default: 0 })
    nuevo: string;

    @Column({type: 'varchar', length: 1, default: 0 })
    registrado: string;

    @Column({type: 'text', nullable: true })
    token: string;

    @Column({ type: 'date', default: new Date(), nullable: false})
    upload_date: string;

    @Column({ type: 'time', default: '00:00:00', nullable: false })
    upload_time: string;

    @Column()
    activo: number;
}
