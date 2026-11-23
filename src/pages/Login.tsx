import styled from '@emotion/styled';

const Formulario = styled.form`
  background: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.large};
  border-radius: ${(props) => props.theme.radius};
  max-width: 350px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.medium};
`;

const Titulo = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  margin: 0;
  text-align: center;
`;

const Campo = styled.input`
  padding: ${(props) => props.theme.spacing.small};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.radius};
`;

const Boton = styled.button`
  padding: ${(props) => props.theme.spacing.small};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: ${(props) => props.theme.radius};
`;

function Login() {
  return (
    <Formulario>
      <Titulo>Iniciar sesión</Titulo>
      <Campo type="email" placeholder="Correo electrónico" />
      <Campo type="password" placeholder="Contraseña" />
      <Boton type="submit">Entrar</Boton>
    </Formulario>
  );
}

export default Login;