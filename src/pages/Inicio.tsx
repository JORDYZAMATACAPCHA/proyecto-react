import { Link } from 'react-router-dom';
import { Caja, Titulo } from '../styles/Inicio.styles';

function Inicio() {
  return (
    <Caja>
      <Titulo>Dota 2 Admin</Titulo>
      <p>Panel de jugadores y equipos</p>
      <Link to="/login">Ir al login</Link>
    </Caja>
  );
}

export default Inicio;