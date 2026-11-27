import { Link } from 'react-router-dom';
import { Caja, Titulo } from '../styles/NotFound.styles';

function NotFound() {
  return (
    <Caja>
      <Titulo>404</Titulo>
      <p>Página no encontrada</p>
      <Link to="/">Volver al inicio</Link>
    </Caja>
  );
}

export default NotFound;