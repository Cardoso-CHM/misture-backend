import { inject, injectable } from "tsyringe";

import { IUsuarioRepository } from "@modules/app/repositories/IUsuarioRepository";

interface IRequest {
  nome: string;
  email: string;
  senha: string;
  perfilId: string;
}

@injectable()
class CreateUsuarioUseCase {
  constructor(
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository
  ) {}

  async execute({ email, nome, senha, perfilId }: IRequest) {
    const newUser = await this.usuarioRepository.create({
      email,
      nome,
      senha,
      perfilId,
    });

    return newUser;
  }
}

export { CreateUsuarioUseCase };
