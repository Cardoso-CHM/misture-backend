import { Router } from "express";

import { CreateProfileController } from "@modules/app/useCases/createProfile/CreateProfileController";

const createProfileController = new CreateProfileController();
const profileRoutes = Router();

profileRoutes.post("/", createProfileController.handle);

export default profileRoutes;
