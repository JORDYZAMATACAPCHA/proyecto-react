import { useState, type FormEvent } from 'react';
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

const TextoError = styled.p`
  color: ${(props) => props.theme.colors.error};
  margin: 0;
`;

const TextoListo = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  margin: 0;
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [listo, setListo] = useState(false);

  function enviar(e: FormEvent) {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Rellena todos los campos');
      setListo(false);
      return;
    }

    setError('');
    setListo(true);
  }

  return (
    <Formulario onSubmit={enviar}>
      <Titulo>Iniciar sesión</Titulo>
      <Campo
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Campo
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error !== '' && <TextoError>{error}</TextoError>}
      {listo && <TextoListo>Datos correctos para {email}</TextoListo>}
      <Boton type="submit">Entrar</Boton>
    </Formulario>
  );
}

export default Login;