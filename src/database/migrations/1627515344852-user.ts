import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class user1627515344852 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Users",
                columns:[
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "isBaptized",
                        type: "Boolean",
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "datetime",
                        default: "current_timestamp",
                    },
                    {
                        name: "updated_at",
                        type: "datetime",
                        default: "current_timestamp",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Users");
    }

}
