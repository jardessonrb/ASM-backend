import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class personal1610444580346 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "personal",
            columns: [
                {
                    name: "id_personal",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name_personal",
                    type: "varchar",
                },
                {
                    name: "email_personal",
                    type: "varchar",
                },
                {
                    name: "user_personal",
                    type: "varchar",
                },
                {
                    name: "password_personal",
                    type: "varchar",
                },
                {
                    name: "description_personal",
                    type: "varchar",
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("personal");
        //Desfaz todas as operaçãoes ...
    }

}
