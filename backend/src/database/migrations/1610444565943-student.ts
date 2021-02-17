import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class student1610444565943 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "student",
            columns: [
                {
                    name: "id_student",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name_student",
                    type: "varchar",
                },
                {
                    name: "email_student",
                    type: "varchar",
                },
                {
                    name: "user_student",
                    type: "varchar",
                },
                {
                    name: "password_student",
                    type: "varchar",
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("student");
        //Desfaz todas as operaçãoes ...
    }

}
