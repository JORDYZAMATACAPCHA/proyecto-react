import { useAuth } from '../hooks/useAuth';
import { Caja, Avatar, Titulo } from '../styles/Perfil.styles';
import { useGet } from '../hooks/useGet';

function Perfil() {
  const { usuario } = useAuth();
  const { datos } = useGet<unknown>('/auth/profile');

  return (
    <Caja>
      <Avatar>{usuario?.username.charAt(0).toUpperCase()}</Avatar>
      <Titulo>Mi perfil</Titulo>
      <p>Nombre de usuario: {usuario?.username}</p>
      <p>Rol: {usuario?.role}</p>
      <p>{JSON.stringify(datos)}</p>
    </Caja>
  );
}

export default Perfil;