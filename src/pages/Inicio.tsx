import { useNavigate } from 'react-router-dom';
import { Caja, Titulo, Boton } from '../styles/Inicio.styles';

function Inicio() {
  const navigate = useNavigate();

  function cerrarSesion() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <Caja>
      <Titulo>Dota 2 Admin</Titulo>
      <p>Panel de jugadores y equipos</p>
      <Boton onClick={cerrarSesion}>Cerrar sesión</Boton>
    </Caja>
  );
}

export default Inicio;