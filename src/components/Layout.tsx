import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Cuerpo, Principal } from '../styles/Layout.styles';

function Layout() {
  return (
    <div>
      <Navbar />
      <Cuerpo>
        <Sidebar />
        <Principal>
          <Outlet />
        </Principal>
      </Cuerpo>
    </div>
  );
}

export default Layout;