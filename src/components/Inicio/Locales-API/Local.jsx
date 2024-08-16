import React from 'react'
import './Local.css'
import Map from '../../Maps/Map';

export default function local() {

  const InfoSection = ({ title, subtitle, text, button }) => {
    return (
        <div className="info-section">
            <h3>{title}</h3>
            {subtitle && <h3>{subtitle}</h3>}
            {button && <button>{button}</button>}
            {text && <p>{text}</p>}
        </div>
    );}

  return (
    <div className='container'>
        <div className="info-column">
        <h2>NUESTROS LOCALES</h2>
        <InfoSection
          title="San Martin de Porres"
          subtitle="Av. Perú 2272"
          button="Abierto"
          text="De 10:00 am - 10:00 pm"
        />

<InfoSection
          title="Los Olivos"
          subtitle="Av. Alfredo Mendiola 3489"
          button="Abierto"
          text="De 10:00 am - 10:00 pm"
        />

<InfoSection
          title="Ventanilla"
          subtitle="Mz, A. A. Caceres 10"
          button="Abierto"
          text="De 10:00 am - 10:00 pm"
        />

<InfoSection
          title="Mi Peru"
          subtitle="Mi Perú 07056"
          button="Abierto"
          text="De 10:00 am - 10:00 pm"
        />
        
      </div>

      <div className="map-column">
            <Map />
      </div>
    </div>
  )
}
