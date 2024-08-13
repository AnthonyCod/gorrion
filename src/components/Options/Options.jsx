import React from 'react'
import burguer from '../../img/burguer.jpeg';
import pizza from '../../img/pizza.jpeg';
import bebidas from '../../img/bebidas.jpeg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../components/Options/Options.css';

export default function Options() {

    const data = [
        {
            id:1,
            img:burguer,
            name:'HAMBURGUESA' 
        },
        {
            id:2,
            img:pizza,
            name:'PIZZA' 
        },
        {
            id:3,
            img:bebidas,
            name:'BEBIDAS' 
        },
        {
            id:1,
            img:burguer,
            name:'HAMBURGUESA' 
        },
        {
            id:2,
            img:pizza,
            name:'PIZZA' 
        },
        {
            id:3,
            img:bebidas,
            name:'BEBIDAS' 
        },
    ];
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

  return (
    
    <div>
        <h2 className='principal'>
        ¿QUE TANTA HAMBRE TIENES?
        </h2>
        <div className='list-box'>
        <Slider {...settings}>
            {data.map((d) => (
                <div key={d.id} className='item'>
                    <div className='image-containe'>
                        <img src={d.img} alt="" />
                        <div className='text-overla'>
                            <h2>{d.name}</h2>
                        </div>
                    </div> 
                </div>  
            ))}
        </Slider>
        </div>
    </div>
  )
}
