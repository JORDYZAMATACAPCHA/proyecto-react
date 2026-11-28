import { useAuth } from '../hooks/useAuth';
import { Caja, Avatar, Titulo } from '../styles/Perfil.styles';
import { useGet } from '../hooks/useGet';
import type { RespuestaPerfil } from '../types';

function Perfil() {
    const { usuario } = useAuth();
    const { datos, cargando, error } = useGet<RespuestaPerfil>('/auth/profile');

    if (cargando) {
        return <p>Cargando perfil...</p>;
    }

    if (error !== '') {
        return <p>{error}</p>;
    }
    return (
        <Caja>
            <Avatar>{usuario?.username.charAt(0).toUpperCase()}</Avatar>
            <Titulo>Mi perfil</Titulo>
            <p>Usuario: {datos?.data.username}</p>
            <p>Rol: {datos?.data.role}</p>
            <p>Nombre: {datos?.data.nombre}</p>
            <p>Correo: {datos?.data.email}</p>    </Caja>
    );
}

export default Perfil;