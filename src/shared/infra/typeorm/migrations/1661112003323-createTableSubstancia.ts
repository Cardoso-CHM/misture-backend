import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableSubstancia1661112003323 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "substancia",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "principio_ativo",
            type: "varchar",
          },
          {
            name: "classe_id",
            type: "uuid",
          },
          {
            name: "criado_em",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKClasseSubstancia",
            referencedTableName: "classe",
            referencedColumnNames: ["id"],
            columnNames: ["classe_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("substancia");
  }
}
