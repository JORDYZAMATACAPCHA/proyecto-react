import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Navbar from '../components/Navbar';
import { Caja, Titulo, Boton } from '../styles/Inicio.styles';

function Inicio() {
  const navigate = useNavigate();
  const { usuario, cerrarSesion } = useAuth();

  function salir() {
    cerrarSesion();
    navigate('/login');
  }

  return (
    <>
      <Navbar />
      <Caja>
        <Titulo>Dota 2 Admin</Titulo>
        <p>Bienvenido, {usuario?.username}</p>
        <p>Panel de jugadores y equipos</p>
        <Boton onClick={salir}>Cerrar sesión</Boton>
      </Caja>
    </>
  );
}

export default Inicio;