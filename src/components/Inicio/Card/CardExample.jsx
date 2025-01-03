import React from 'react';
import './Card.css';

export default function CardExample({ image, title, description, price, onAddProduct }) {
    const handleAddToCart = () => {
        // Verificar que onAddProduct es una función antes de llamarla
        if (typeof onAddProduct === 'function') {
            onAddProduct({ image, title, description, price }); // Llamar a la función pasada por props
            console.log("Producto agregado:", { image, title, description, price });
        } else {
            console.error('Error: onAddProduct no es una función.');
        }
    };

    return (
        <div className="CardGeneral">
            <div className="cardContainer">
                <div className="card">
                    <img src={image} alt={title} />
                    <h3 className="title">{title}</h3>
                    <div className="column">
                        <h4 className="description">{description}</h4>
                        <h4 className="price">{price}</h4>
                    </div>
                    <button onClick={handleAddToCart}>COMPRAR</button>
                </div>
            </div>
        </div>
    );
}
