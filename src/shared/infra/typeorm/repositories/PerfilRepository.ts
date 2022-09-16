import { getRepository, Repository } from "typeorm";

import { ICreatePerfilDTO } from "@modules/app/dtos/ICreatePerfilDTO";
import { IPerfil } from "@modules/app/entities/IPerfil";
import { IPerfilRepository } from "@modules/app/repositories/IPerfilRepository";

import { Perfil } from "../entities/Perfil";

class PerfilRepository implements IPerfilRepository {
  private repository: Repository<Perfil>;

  constructor() {
    this.repository = getRepository(Perfil);
  }

  async create({ permissao, descricao }: ICreatePerfilDTO): Promise<IPerfil> {
    const newProfile = this.repository.create({ permissao, descricao });

    await this.repository.save(newProfile);

    return newProfile;
  }
}

export { PerfilRepository };
