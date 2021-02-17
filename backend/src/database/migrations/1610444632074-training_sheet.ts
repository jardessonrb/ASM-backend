import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class trainingSheet1610444632074 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "training_sheet",
            columns: [
                {
                    name: "id_trainingsheet",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "group_training",
                    type: "varchar",
                },
                {
                    name: "part_training",
                    type: "varchar",
                },
                {
                    name: "id_student",
                    type: "integer",
                },
                {
                    name: "id_Training",
                    type: "integer",
                }
            ],

            foreignKeys: [
                {
                    name: 'StudentTrainingSheet',
                    columnNames: ['id_student'],
                    referencedTableName: 'student',
                    referencedColumnNames: ['id_student'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },

                {
                    name: 'TrainingTrainingSheet',
                    columnNames: ['id_trainingsheet'],
                    referencedTableName: 'training',
                    referencedColumnNames: ['id_training'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("training_sheet");
        //Desfaz todas as operaçãoes ...
    }

}
