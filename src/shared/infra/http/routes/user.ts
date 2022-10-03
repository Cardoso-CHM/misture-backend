import { Router } from "express";

import { CreateUsuarioController } from "@modules/app/useCases/createUsuario/CreateUsuarioController";

const createUsuarioController = new CreateUsuarioController();
const userRoutes = Router();

userRoutes.post("/", createUsuarioController.handle);

export default userRoutes;
