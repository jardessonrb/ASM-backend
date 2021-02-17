import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class training1610444612565 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "training",
            columns: [
                {
                    name: "id_training",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name_training",
                    type: "varchar",
                },
                {
                    name: "description_training",
                    type: "varchar",
                },
                {
                    name: "initials_training",
                    type: "varchar",
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("training");
        //Desfaz todas as operaçãoes ...
    }

}
