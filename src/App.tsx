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

const Texto = styled.p`
  color: ${(props) => props.theme.colors.secondary};
`;

function App() {
  return (
    <Caja>
      <Titulo>Proyecto Jordy</Titulo>
      <Texto>Contenido de la aplicación</Texto>
    </Caja>
  );
}

export default App;