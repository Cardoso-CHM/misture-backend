import { inject, injectable } from "tsyringe";

import { IPerfilRepository } from "@modules/app/repositories/IPerfilRepository";

interface IRequest {
  permissao: string;
  descricao: string;
}

@injectable()
class CreateProfileUseCase {
  constructor(
    @inject("PerfilRepository")
    private perfilRepository: IPerfilRepository
  ) {}

  async execute({ permissao, descricao }: IRequest) {
    const newProfile = await this.perfilRepository.create({
      permissao,
      descricao,
    });

    return newProfile;
  }
}

export { CreateProfileUseCase };
