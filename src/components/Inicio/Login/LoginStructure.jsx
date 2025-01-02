import React from 'react';
import './Login.css'; 
import { Link, link } from 'react-router-dom'

export default function LoginStructure() {
  return (
    <div className='loginContainer'>
      <div className="login">
        <h2 className="titleLogin">INICIA SESION</h2>
        <h3 className="description">¿No tienes una cuenta? <Link to="/register" className="registerLink">Unete Ahora</Link></h3>

        <div className="groupContainer">
        <div className="inputGroup">
          <h3 style={{ margin: 0 }}>Correo Electronico</h3>
          <input type="text" placeholder="Correo Electronico*" />
        </div>

        <div className="inputGroup">
          <h3 style={{ margin: 0 }}>Contraseña</h3>
          <input type="text" placeholder="Contraseña*" />
        </div>
        </div>
        <button className='boton'>INICIAR SESION</button><br /><br />
        <a className='passLink' href="">Olvide mi contraseña</a><br /><br />
        <div className="buttonColumn">
          <button className="gridButton1">FACEBOOK</button>
          <button className="gridButton2">GOOGLE</button>
        </div>
      </div>
   </div>
  );
}