import React from 'react'
import './Footer.css'
import logobn from '../../../img/logobn.png'
import visa from '../../../img/visa.svg'
import mastercard from '../../../img/mastercard.svg'
import american from '../../../img/american.svg'
import paypal from '../../../img/paypal.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <div className="grid-container-footer">
      <div className="grid-items">
        <img className='logo' src={logobn}/>
        <p>"En Pollería Gorrión, disfruta del sabor único de nuestro pollo fresco y jugoso, cocinado con el cariño de una tradición familiar. ¡Ven y prueba el auténtico placer del pollo a la brasa!"</p>
        </div>
      <div className="grid-items">
        <h3>MAPA DEL SITIO</h3>
        <a href="">Carta</a>
        <a href="">Promociones</a>
        <a href="">Locales</a>
        <a href="">Nosotros</a>
      </div>
      <div className="grid-items">
        <h3>LEGAL</h3>
        <a href="">Términos y condiciones</a>
        <a href="">Políticas de privacidad</a>
        <a href="">Legales</a>
        <a href="">Razones Sociales y Ruc</a>
      </div>
      <div className="grid-items">
        <h3>FORMAS DE PAGO</h3>
        <div className='pagos'>
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
            <img src={american} alt="" />
            <img src={paypal} alt="" />
        </div>
        <h3>SIGUENOS EN:</h3>
        <div className="icons">
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
  )
}
