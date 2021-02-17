import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class studentSchedule1610444525318 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "student_schedule",
            columns: [
                {
                    name: "id_schedule",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "day_schedule",
                    type: "varchar",
                },
                {
                    name: "schedule_init",
                    type: "varchar",
                },
                {
                    name: "schedule_end",
                    type: "varchar",
                },
                {
                    name: "shift_training",
                    type: "varchar",
                },
                {
                    name: "id_student",
                    type: "integer",
                }
            ],

            foreignKeys: [
                {
                    name: 'StudentSchedule',
                    columnNames: ['id_student'],
                    referencedTableName: 'student',
                    referencedColumnNames: ['id_student'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("student_schedule");
        //Desfaz todas as operaçãoes ...
    }

}
