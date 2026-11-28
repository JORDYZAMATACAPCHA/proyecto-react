export interface PerfilUsuario {
  nombre: string;
  username: string;
  email: string;
  role: string;
}

export interface RespuestaPerfil {
  data: PerfilUsuario;
}