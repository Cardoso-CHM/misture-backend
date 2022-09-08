import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableApelido1662597560509 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "apelido",
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
            name: "substancia_id",
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
            name: "FKSubstanciaApelido",
            referencedTableName: "substancia",
            referencedColumnNames: ["id"],
            columnNames: ["substancia_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("apelido");
  }
}
