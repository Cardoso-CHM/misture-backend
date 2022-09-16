import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";

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
  perfil: Perfil;
}

export { Usuario };
