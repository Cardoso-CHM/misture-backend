import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableReferencia1662598591501 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "referencia",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "link",
            type: "varchar",
          },
          {
            name: "pais",
            type: "varchar",
          },
          {
            name: "titulo",
            type: "varchar",
            isNullable: true,
            default: null,
          },

          {
            name: "criado_em",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("referencia");
  }
}
