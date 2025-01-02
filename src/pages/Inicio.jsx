import Header from '../components/Inicio/Header/Header';
import Slider from '../components/Inicio/Slider/Slider'
import WebCart from '../components/Inicio/WebCart/WebCart';
import Footer from '../components/Inicio/Footer/Footer';

function Inicio() {
  return (
    <div>
      <Header/>
      <Slider/>
      <WebCart />
      <Footer />
    </div>
  );
}

export default Inicio;
