import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class collaboratorSchedule1610444470965 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "collaborator_schedule",
            columns: [
                {
                    name: "id_collaboratorschedule",
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
                    name: "id_personal",
                    type: "integer",
                }
            ],

            foreignKeys: [
                {
                    name: 'CollaboratorSchedule',
                    columnNames: ['id_personal'],
                    referencedTableName: 'personal',
                    referencedColumnNames: ['id_personal'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("collaborator_schedule");
        //Desfaz todas as operaçãoes ...
    }

}
