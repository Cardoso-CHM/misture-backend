import { container } from "tsyringe";

import { IPerfilRepository } from "@modules/app/repositories/IPerfilRepository";
import { IUsuarioRepository } from "@modules/app/repositories/IUsuarioRepository";
import { PerfilRepository } from "@shared/infra/typeorm/repositories/PerfilRepository";
import { UsuarioRepository } from "@shared/infra/typeorm/repositories/UsuarioRepository";

container.registerSingleton<IPerfilRepository>(
  "PerfilRepository",
  PerfilRepository
);

container.registerSingleton<IUsuarioRepository>(
  "UsuarioRepository",
  UsuarioRepository
);
