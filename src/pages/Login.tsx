import { useState, type FormEvent } from 'react';
import {
  Formulario,
  Titulo,
  Campo,
  Boton,
  TextoError,
  TextoListo,
} from '../styles/Login.styles';

const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [listo, setListo] = useState('');

  async function enviar(e: FormEvent) {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Rellena todos los campos');
      setListo('');
      return;
    }

    setError('');
    setListo('');

    try {
      const res = await fetch(API_URL + '/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const datos = await res.json();
      console.log(datos);

      if (!res.ok) {
        setError(datos.message || 'Error ' + res.status);
        return;
      }

      setListo('Login correcto');
    } catch {
      setError('No se pudo conectar con el servidor');
    }
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
      {listo !== '' && <TextoListo>{listo}</TextoListo>}
      <Boton type="submit">Entrar</Boton>
    </Formulario>
  );
}

export default Login;