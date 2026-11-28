import { useEffect, useState } from 'react';
import { api } from '../services/api';

export function useGet<T>(ruta: string) {
  const [datos, setDatos] = useState<T | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setCargando(true);
    setError('');

    api(ruta)
      .then((respuesta) => setDatos(respuesta))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [ruta]);

  return { datos, cargando, error };
}