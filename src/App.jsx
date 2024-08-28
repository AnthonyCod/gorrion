import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Promociones from './pages/Promociones';
import Locales from './pages/Locales';
import Reservas from './pages/Reservas';
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/locales" element={<Locales />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
