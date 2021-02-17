import { Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn, Column } from "typeorm";
import Student from "./Student";
import Training from "./Training";

@Entity('TrainingSheet')

export default class TrainingSheet{

    @PrimaryGeneratedColumn('increment')
    id_trainingSheet: number;

    group_training: string;

    part_training: string;

    id_student: number;

    id_Training: number;

    @OneToOne(() => Student)
    @JoinColumn()
    student: Student;

    @OneToMany(() => Training, training => training.trainingsheet)
    training: Training[];


}