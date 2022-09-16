import { ICreatePerfilDTO } from "../dtos/ICreatePerfilDTO";
import { IPerfil } from "../entities/IPerfil";

export interface IPerfilRepository {
  create(data: ICreatePerfilDTO): Promise<IPerfil>;
}
