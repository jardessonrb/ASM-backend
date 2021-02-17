import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';
import Schedule from "./StudentSchedule";

@Entity('Student')
export default class Student{
    @PrimaryGeneratedColumn("increment")
    id_student: number;

    @Column()
    name_student: string;

    @Column()
    email_student: string;

    @Column()
    user_student: string;

    @Column()
    password_student: string;

    @OneToMany(() => Schedule, schedule => schedule.student)
    schedules: Schedule[];
}