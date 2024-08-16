import React, { useState, useEffect } from 'react';
import Gorrion from '../../../img/gorrion.jpg';
import Mostro from '../../../img/1.jpg';
import Parrilla from '../../../img/2.jpg';
import Ceviche from '../../../img/3.jpg';
import './Section.css';


export default function Section() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([
      { id: 1, img: Gorrion },
      { id: 2, img: Mostro },
      { id: 3, img: Parrilla },
      { id: 4, img: Ceviche }
    ]);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (

    <main className="carousel">
      <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
      <div className="carousel-slide">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.img}
            alt={`Slide ${image.id}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
      <button className="carousel-btn next" onClick={nextSlide}>❯</button>
    </main>
  );
}
