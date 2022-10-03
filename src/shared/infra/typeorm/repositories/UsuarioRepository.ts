import { getRepository, Repository } from "typeorm";

import { ICreateUsuarioDTO } from "@modules/app/dtos/ICreateUsuarioDTO";
import { IUsuario } from "@modules/app/entities/IUsuario";
import { IUsuarioRepository } from "@modules/app/repositories/IUsuarioRepository";

import { Usuario } from "../entities/Usuario";

class UsuarioRepository implements IUsuarioRepository {
  private repository: Repository<Usuario>;

  constructor() {
    this.repository = getRepository(Usuario);
  }

  async create(payload: ICreateUsuarioDTO): Promise<IUsuario> {
    const newUser = this.repository.create(payload);

    await this.repository.save(newUser);

    return newUser;
  }
}

export { UsuarioRepository };
