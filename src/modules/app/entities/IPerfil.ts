import { IUsuario } from "./IUsuario";

export interface IPerfil {
  id: string;
  descricao: string;
  permissao: string;
  criadoEm: Date;

  usuarios: IUsuario[];
}
