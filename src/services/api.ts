const API_URL = import.meta.env.VITE_API_URL;

export async function api(ruta: string, opciones: RequestInit = {}) {
  const token = localStorage.getItem('token');

  const respuesta = await fetch(API_URL + ruta, {
    ...opciones,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: 'Bearer ' + token } : {}),
    },
  });

  const datos = await respuesta.json();

  if (!respuesta.ok) {
    throw new Error(datos.message || 'Error en la peticion');
  }

  return datos;
}