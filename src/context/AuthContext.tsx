import { createContext, useEffect, useState, type ReactNode } from 'react';

interface Usuario {
  username: string;
  role: string;
}

interface AuthContextType {
  usuario: Usuario | null;
  cargando: boolean;
  iniciarSesion: (token: string) => void;
  cerrarSesion: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

function leerUsuario(): Usuario | null {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const payload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    const datos = JSON.parse(atob(payload));
    return { username: datos.username, role: datos.role };
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setUsuario(leerUsuario());
    setCargando(false);
  }, []);

  function iniciarSesion(token: string) {
    localStorage.setItem('token', token);
    setUsuario(leerUsuario());
  }

  function cerrarSesion() {
    localStorage.removeItem('token');
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ usuario, cargando, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
}