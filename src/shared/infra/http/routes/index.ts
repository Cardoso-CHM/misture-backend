import { Router } from "express";

import profileRoutes from "./profile";
import userRoutes from "./user";

const appRoutes = Router();

appRoutes.use("/profile", profileRoutes);
appRoutes.use("/user", userRoutes);

export { appRoutes };
