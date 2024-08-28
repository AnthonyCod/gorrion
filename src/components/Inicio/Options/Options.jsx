import React from 'react'
import uno from '../../../img/uno.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Options.css';

export default function Options() {

    const data = [
        {
            id:1,
            img:uno,
            name:'COMBOS PERSONALES' 
        },
        {
            id:2,
            img:uno,
            name:'COMBOS PARA 2' 
        },
        {
            id:3,
            img:uno,
            name:'COMBOS FAMILIARES' 
        },
        {
            id:4,
            img:uno,
            name:'COMBOS PATAS' 
        },
        {
            id:5,
            img:uno,
            name:'PARA COMPARTIR' 
        },
        {
            id:6,
            img:uno,
            name:'PROMOCIONES' 
        }
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
