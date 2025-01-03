import React from 'react';
import './Login.css'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function LoginStructure() {
  return (
    <div className='loginContainer'>
      <div className="login">
        <h2 className="titleLogin">INICIA SESIÓN</h2>
        <h3 className="description">
          ¿No tienes una cuenta? <Link to="/register" className="registerLink">Únete Ahora</Link>
        </h3>

        <div className="groupContainer">
          <div className="inputGroup">
            <h3 style={{ margin: 0 }}>Correo Electrónico</h3>
            <input type="text" placeholder="Correo Electrónico*" />
          </div>

          <div className="inputGroup">
            <h3 style={{ margin: 0 }}>Contraseña</h3>
            <input type="password" placeholder="Contraseña*" />
          </div>
        </div>
        <button className='boton'>INICIAR SESIÓN</button><br /><br />
        <a className='passLink' href="">Olvidé mi contraseña</a><br /><br />
        <div className="buttonColumn">
          <button className="gridButton1">
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
            FACEBOOK
          </button>
          <button className="gridButton2">
            <FontAwesomeIcon icon={faGoogle} className="icon" />
            GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
}
