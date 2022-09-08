import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableUsuario1661110833637 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "usuario",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "senha",
            type: "varchar",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "perfil_id",
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
            name: "FKPerfilUsuario",
            referencedTableName: "perfil",
            referencedColumnNames: ["id"],
            columnNames: ["perfil_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("usuario");
  }
}
