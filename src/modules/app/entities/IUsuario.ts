import { IPerfil } from "./IPerfil";

export interface IUsuario {
  id: string;
  email: string;
  senha: string;
  nome: string;
  perfilId: string;
  criadoEm: Date;

  perfil: IPerfil;
}
