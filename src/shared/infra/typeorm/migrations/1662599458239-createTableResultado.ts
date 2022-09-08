import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableResultado1662599458239 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "resultado",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "data_cadastro",
            type: "timestamp",
          },
          {
            name: "resultado",
            type: "integer",
          },
          {
            name: "status",
            type: "integer",
          },
          {
            name: "pesquisador_id",
            type: "uuid",
          },
          {
            name: "cultura_id",
            type: "uuid",
          },
          {
            name: "referencia_id",
            type: "uuid",
          },
          {
            name: "avaliador_id",
            type: "uuid",
            isNullable: true,
            default: null,
          },
          {
            name: "data_avaliacao",
            type: "timestamp",
            isNullable: true,
            default: null,
          },
          {
            name: "comentario",
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
        foreignKeys: [
          {
            name: "FKPesquisadorResultado",
            referencedTableName: "usuario",
            referencedColumnNames: ["id"],
            columnNames: ["pesquisador_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKCulturaResultado",
            referencedTableName: "cultura",
            referencedColumnNames: ["id"],
            columnNames: ["cultura_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKReferenciaResultado",
            referencedTableName: "referencia",
            referencedColumnNames: ["id"],
            columnNames: ["referencia_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKAvaliadorResultado",
            referencedTableName: "usuario",
            referencedColumnNames: ["id"],
            columnNames: ["avaliador_id"],
            onDelete: "SET NULL",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("resultado");
  }
}
