import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Barra, Logo, Menu, Avatar, Boton } from '../styles/Navbar.styles';

function Navbar() {
  const { usuario, cerrarSesion } = useAuth();
  const navigate = useNavigate();

  function salir() {
    cerrarSesion();
    navigate('/login');
  }

  return (
    <Barra>
      <Logo to="/">Dota 2 Admin</Logo>
      <Menu>
        <Link to="/perfil">Mi perfil</Link>
        <Avatar>{usuario?.username.charAt(0).toUpperCase()}</Avatar>
        <Boton onClick={salir}>Cerrar sesión</Boton>
      </Menu>
    </Barra>
  );
}

export default Navbar;