import React from 'react'
import { useState } from 'react'
import Header from '../../../components/Inicio/Header/Header'
import Footer from '../../../components/Inicio/Footer/Footer'
import NavBar from '../../../components/Inicio/NavBar/NavBar'
import CardExample from '../../../components/Inicio/Card/CardExample'
import { dataPromociones } from '../../../components/Inicio/data';


export default function Promociones() {

  const [allProducts,setAllProducts] = useState([])
  const [total,setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)

  const selectedData = dataPromociones

  return (
    <div>
      <Header allProducts={allProducts} 
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
      />

      <NavBar/>
      <div className="CardContainer" allProducts={allProducts} 
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      SetCountProducts
      >
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
