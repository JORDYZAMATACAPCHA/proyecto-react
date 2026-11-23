import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Caja = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.large};
  border-radius: ${(props) => props.theme.radius};
  max-width: 600px;
  margin: 60px auto;
  text-align: center;
`;

const Titulo = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  margin: 0;
`;

function Inicio() {
  return (
    <Caja>
      <Titulo>Proyecto Jordy</Titulo>
      <p>Página de inicio</p>
      <Link to="/login">Ir al login</Link>
    </Caja>
  );
}

export default Inicio;