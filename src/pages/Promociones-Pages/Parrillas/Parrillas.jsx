import React from 'react'
import polloChaufa from '../../../img/polloChaufa.jpg';
import Header from '../../../components/Inicio/Header/Header'
import Footer from '../../../components/Inicio/Footer/Footer'
import NavBar from '../../../components/Inicio/NavBar/NavBar'
import CardExample from '../../../components/Inicio/Card/CardExample'
import { dataParrillas } from '../../../components/Inicio/data';

export default function Parrillas() {

  const selectedData = dataParrillas;

  return (
    <div>
      <Header/>
      <NavBar/>
      <div className="CardContainer">
        {selectedData.map(item => (
          <CardExample
          key={item.id}
          image={item.image}
          title={item.nameProduct}
          description={item.desp}
          price={`$${item.price}`}
          />
        ))}
      </div>
      <Footer/>
    </div>
  )
}
