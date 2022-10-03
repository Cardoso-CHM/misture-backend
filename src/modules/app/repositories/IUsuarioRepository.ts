import { ICreateUsuarioDTO } from "../dtos/ICreateUsuarioDTO";
import { IUsuario } from "../entities/IUsuario";

export interface IUsuarioRepository {
  create(data: ICreateUsuarioDTO): Promise<IUsuario>;
}
