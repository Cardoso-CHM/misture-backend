import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableClasse1661111441674 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "classe",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "descricao",
            type: "varchar",
          },
          {
            name: "cor",
            type: "varchar",
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
    await queryRunner.dropTable("classe");
  }
}
