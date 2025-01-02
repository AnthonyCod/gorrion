import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Locales from './pages/Locales';
import Nosotros from './pages/Nosotros';
import Login from './pages/Login';
import Register from './pages/Register';
import Brasas from './pages/Promociones-Pages/Brasas/Brasas';
import Parrillas from './pages/Promociones-Pages/Parrillas/Parrillas';
import Piqueos from './pages/Promociones-Pages/Piqueos/Piqueos';
import Ensaladas from './pages/Promociones-Pages/Ensaladas/Ensaladas';
import Bebidas from './pages/Promociones-Pages/Bebidas/Bebidas';
import Promociones from './pages/Promociones-Pages/Promociones/Promociones';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/promociones/brasas" element={<Brasas />} />
        <Route path="/locales" element={<Locales />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/promociones/parrillas" element={<Parrillas />} />
        <Route path="/promociones/piqueos" element={<Piqueos />} />
        <Route path="/promociones/promociones" element={<Promociones />} />
        <Route path="/promociones/ensaladas" element={<Ensaladas />} />
        <Route path="/promociones/bebidas" element={<Bebidas />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
