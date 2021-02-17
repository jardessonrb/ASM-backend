import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from 'typeorm';
import TrainingSheet from "./TrainingSheet";

@Entity('training')

export default class Training{

    @PrimaryGeneratedColumn('increment')
    id_training: number;

    @Column()
    name_training: string;

    @Column()
    description_training: string;

    @Column()
    initials_training: string;

    @OneToOne(() => TrainingSheet)
    @JoinColumn()
    trainingsheet: TrainingSheet;
}