import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProfileUseCase } from "./CreateProfileUseCase";

class CreateProfileController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(CreateProfileUseCase);

    const newProfile = await useCase.execute(req.body);

    return res.status(201).json(newProfile);
  }
}

export { CreateProfileController };
