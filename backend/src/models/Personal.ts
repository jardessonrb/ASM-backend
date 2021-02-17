import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';
import CollaboratorSchedule from "./CollaboratorSchedule";


@Entity('personal')
export default class Personal{

    @PrimaryGeneratedColumn('increment')
    id_personal: number;

    @Column()
    name_personal: string;

    @Column()
    email_personal: string;

    @Column()
    user_personal: string;

    @Column()
    password_personal: string;
    
    @Column()
    description_personal: string;

    @OneToMany(() => CollaboratorSchedule, collaboratorschedule => collaboratorschedule.personal)
    schedules: CollaboratorSchedule[];
    
}