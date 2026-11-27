import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Principal } from '../styles/Layout.styles';

function Layout() {
  return (
    <div>
      <Navbar />
      <Principal>
        <Outlet />
      </Principal>
    </div>
  );
}

export default Layout;