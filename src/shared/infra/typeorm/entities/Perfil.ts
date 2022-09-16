import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  Column,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { IPerfil } from "@modules/app/entities/IPerfil";

import { Usuario } from "./Usuario";

@Entity("perfil")
class Perfil implements IPerfil {
  @PrimaryColumn()
  id: string;

  @Column()
  descricao: string;

  @Column()
  permissao: string;

  @CreateDateColumn({ name: "criado_em" })
  criadoEm: Date;

  @OneToMany(() => Usuario, (usuario) => usuario.perfil)
  usuarios: Usuario[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Perfil };
