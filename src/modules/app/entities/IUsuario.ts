import { IPerfil } from "./IPerfil";

export interface IUsuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
  criadoEm: Date;
  perfilId: string;

  perfil: IPerfil;
}
