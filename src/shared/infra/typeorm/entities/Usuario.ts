import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { IUsuario } from "@modules/app/entities/IUsuario";

import { Perfil } from "./Perfil";

@Entity("usuario")
class Usuario implements IUsuario {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  nome: string;

  @Column({ name: "perfil_id" })
  perfilId: string;

  @CreateDateColumn({ name: "criado_em" })
  criadoEm: Date;

  @ManyToOne(() => Perfil, (perfil) => perfil.usuarios)
  @JoinColumn({
    name: "perfil_id",
  })
  perfil: Perfil;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Usuario };
