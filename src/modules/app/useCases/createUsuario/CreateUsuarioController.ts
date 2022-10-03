import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";

class CreateUsuarioController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(CreateUsuarioUseCase);

    const newUser = await useCase.execute(req.body);

    return res.status(201).json(newUser);
  }
}

export { CreateUsuarioController };
