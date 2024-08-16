import React from 'react';
import './WebCart.css'
import Items from './Items';
import inka from '../../../img/inka.png';
import pollo from '../../../img/pollo.jpg';
import grill from '../../../img/grill.jpg';
import parrilla from '../../../img/parrilla.jpg';
import piqueos from '../../../img/piqueos.jpg';
import ensalada from '../../../img/ensalada.jpg';

export default function WebCart() {
  return (
    <div className='webCart'>
        <h3 className='titleCart'>NUESTRA CARTA WEB</h3>
    <div className="grid-container">
        <Items
        id='1'
        image={pollo}
        title="Pollo a la Brasa"
        />

        <Items
        id='2'
        image={grill}
        title="Grill"
        />    

        <Items
        id='3'
        image={parrilla}
        title="Parrilla"
        />

        <Items
        id='4'
        image={piqueos}
        title="Piqueos"
        />

        <Items
        id='5'
        image={ensalada}
        title="Ensalada"
        />    

        <Items
        id='6'
        image={inka}
        title="Bebidas"
        />
    </div>
    </div>
  );
}
