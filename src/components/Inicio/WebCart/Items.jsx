import React from 'react'
import './Items.css'

export default function Items({id,image,title,paragraph}) {
  return (
    <div>      
        <div className="grid-item" id={id}>
            {image && <img src={image} className='grid-item-image'/> }
            <div className="overlay">
                <div className="cart-icon">
                    🛒
                </div>
            </div>
            <h3 className='grid-item-title'>{title}</h3>
            <p className='grid-item-paragraph'>{paragraph}</p>
        </div>
    </div>
  )
}
