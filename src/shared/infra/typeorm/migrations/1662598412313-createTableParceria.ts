import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableParceria1662598412313 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "parceria",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "logo_url",
            type: "varchar",
          },
          {
            name: "periodo_inicial",
            type: "timestamp",
          },
          {
            name: "periodo_final",
            type: "timestamp",
            isNullable: true,
            default: null,
          },
          {
            name: "link",
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
    await queryRunner.dropTable("parceria");
  }
}
