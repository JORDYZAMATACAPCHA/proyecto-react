import { useAuth } from '../hooks/useAuth';
import { Caja, Titulo } from '../styles/Inicio.styles';

function Inicio() {
  const { usuario } = useAuth();

  return (
    <Caja>
      <Titulo>Bienvenido, {usuario?.username}</Titulo>
      <p>Desde aquí gestionas los jugadores y los equipos de Dota 2.</p>
    </Caja>
  );
}

export default Inicio;
