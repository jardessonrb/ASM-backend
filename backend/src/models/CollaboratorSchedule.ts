import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import Personal from "./Personal";

@Entity('collaboratorschedule')
export default class CollaboratorSchedule{

    @PrimaryGeneratedColumn('increment')
    id_schedule: number;

    day_schedule: string;

    schedule_init: string;

    schedule_end: string;

    shift_training: string;
    //turno
    
    id_personal: number;

    @ManyToOne(() => Personal, personal => personal.schedules)
    personal: Personal;


}