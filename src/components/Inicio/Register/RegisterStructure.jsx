import React, { useState } from 'react';
import './Register.css'; 

export default function RegisterStructure() {
  const [docType, setDocType] = useState('dni'); // Estado para el tipo de documento
  const [docValue, setDocValue] = useState(''); // Estado para el valor del documento

  const handleDocTypeChange = (e) => {
    setDocType(e.target.value);
  };

  const handleDocValueChange = (e) => {
    setDocValue(e.target.value);
  };

  return (
    <div className='RegisterContainer'>
      <div className="Register">
        <h2 className="titleRegister">¡Bienvenido!</h2>
        <h3 className="descriptionRegister">
          Crea tu cuenta personal
        </h3>

        <div className="groupContainerRegister">
          <div className="inputGroup">
            <input type="text" placeholder="Nombre" />
          </div>
          <div className="inputGroup">
            <input type="text" placeholder="Apellido" />
          </div>
          <div className="inputGroup">
            <input type="email" placeholder="Correo Electrónico" />
          </div>
          <div className="inputGroup">
            <input type="text" placeholder="Celular" />
          </div>
          <div className="inputGroup">
            <select value={docType} onChange={handleDocTypeChange}>
              <option value="dni">DNI</option>
              <option value="passport">Pasaporte</option>
            </select>
          </div>
          <div className="inputGroup">
            <input
              type="text"
              placeholder={docType === 'dni' ? 'Número de DNI' : 'Número de Pasaporte'}
              value={docValue}
              onChange={handleDocValueChange}
            />
          </div>
          <div className="inputGroup">
            <input type="password" placeholder="Contraseña" />
          </div>
          <div className="inputGroup">
            <input type="password" placeholder="Repetir Contraseña" />
          </div>
        </div>
        <div className="termsContainer">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">Acepto los términos y condiciones</label>
        </div>
        <div className='registerButtonContainer'>
          <button className='registerButton'>REGISTRAR</button>
          <br /><br />
        </div>
      </div>
    </div>
  );
}
