import { container } from "tsyringe";

import { IPerfilRepository } from "@modules/app/repositories/IPerfilRepository";
import { PerfilRepository } from "@shared/infra/typeorm/repositories/PerfilRepository";

container.registerSingleton<IPerfilRepository>(
  "PerfilRepository",
  PerfilRepository
);
