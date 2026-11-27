import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Inicio from './pages/Inicio';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
        </Route>
      </Route>
    </Routes>
  );
}
export default App;