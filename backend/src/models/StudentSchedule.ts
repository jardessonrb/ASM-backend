import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import Student from "./Student";

@Entity('schedule')

export default class Schedule{

    @PrimaryGeneratedColumn('increment')
    id_schedule: number;

    day_schedule: string;

    schedule_init: string;

    schedule_end: string;

    shift_training: string;
    //turno
    
    id_student: number;

    @ManyToOne(() => Student, student => student.schedules)
    student: Student;


}