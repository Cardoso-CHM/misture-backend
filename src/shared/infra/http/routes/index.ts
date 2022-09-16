import { Router } from "express";

import profileRoutes from "./profile";

const appRoutes = Router();

appRoutes.use("/profile", profileRoutes);

export { appRoutes };
