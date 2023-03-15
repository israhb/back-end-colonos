import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'login_count'})
export class LoginCount {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 100, nullable: false})
    folio: string;

    @Column({ type: 'varchar', length: 100, nullable: false})
    mac: string;

    @Column({ type: 'date', default: new Date(), nullable: false})
    upload_date: string;

}
