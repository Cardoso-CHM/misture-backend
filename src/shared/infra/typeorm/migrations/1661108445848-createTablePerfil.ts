import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTablePerfil1661108445848 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "perfil",
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
            name: "permissao",
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
    await queryRunner.dropTable("perfil");
  }
}
