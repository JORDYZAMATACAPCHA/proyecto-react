import { Lateral, Enlace } from '../styles/Sidebar.styles';

function Sidebar() {
  return (
    <Lateral>
      <Enlace to="/jugadores">Jugadores</Enlace>
      <Enlace to="/equipos">Equipos</Enlace>
    </Lateral>
  );
}

export default Sidebar;