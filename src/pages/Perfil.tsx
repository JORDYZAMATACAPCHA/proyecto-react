import { useAuth } from '../hooks/useAuth';
import { Caja, Avatar, Titulo } from '../styles/Perfil.styles';

function Perfil() {
  const { usuario } = useAuth();

  return (
    <Caja>
      <Avatar>{usuario?.username.charAt(0).toUpperCase()}</Avatar>
      <Titulo>Mi perfil</Titulo>
      <p>Nombre de usuario: {usuario?.username}</p>
      <p>Rol: {usuario?.role}</p>
    </Caja>
  );
}

export default Perfil;