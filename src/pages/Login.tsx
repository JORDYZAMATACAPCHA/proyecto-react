import { useState, type FormEvent } from 'react';
import {
  Formulario,
  Titulo,
  Campo,
  Boton,
  TextoError,
  TextoListo,
} from '../styles/Login.styles';

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
      <Titulo>Dota 2 Admin</Titulo>
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