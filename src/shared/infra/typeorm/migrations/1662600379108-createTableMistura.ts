import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableMistura1662600379108 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "mistura",
        columns: [
          {
            name: "substancia_id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "resultado_id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "dosagem_substancia",
            type: "numeric",
          },
          {
            name: "dosagem_comercial",
            type: "numeric",
            isNullable: true,
            default: null,
          },
          {
            name: "nome_comercial_id",
            type: "uuid",
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
            name: "FKSubstanciaMistura",
            referencedTableName: "substancia",
            referencedColumnNames: ["id"],
            columnNames: ["substancia_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKResultadoMistura",
            referencedTableName: "resultado",
            referencedColumnNames: ["id"],
            columnNames: ["resultado_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKNomeComercialMistura",
            referencedTableName: "nome_comercial",
            referencedColumnNames: ["id"],
            columnNames: ["nome_comercial_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("mistura");
  }
}
