import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersTable1703981889404 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: '100',
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: '255',
                        isNullable: false,
                        isUnique: true,
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
