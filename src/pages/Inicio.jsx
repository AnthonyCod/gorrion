import Header from '../components/Inicio/Header/Header';
import Section from '../components/Inicio/Section/Section';
import Options from '../components/Inicio/Options/Options';
import WebCart from '../components/Inicio/WebCart/WebCart';
import Footer from '../components/Inicio/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Promociones from './Promociones';

function Inicio() {
  return (
    <div>
      <Header/>
      <Section />
      <Options />
      <WebCart />
      <Footer />
    </div>
  );
}

export default Inicio;
