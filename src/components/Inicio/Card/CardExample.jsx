import React from 'react';
import './Card.css';

export default function CardExample ({ image, title, description, price, allProducts,setAllProducts }) {

  const onAddProduct = () => {
    console.log("add")
    }
    
  return (
  <div className="CardGeneral">
    <div className='cardContainer'>
      <div className="card">
        <img src={image} alt={title} />
        <h3 className='title'>{title}</h3>
        <div className="column">
          <h4 className='description'>{description}</h4>
          <h4 className='price'>{price}</h4>
        </div>
        <button onClick={onAddProduct}>COMPRAR</button>
      </div>
    </div>
  </div>
  );
};
