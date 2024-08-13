import React, { useState, useEffect } from 'react';
import Gorrion from '../../img/gorrion.jpg';
import Circo from '../../img/circo.jpg';
import diaPollo from '../../img/diaPollo.jpg';
import './Section.css';

export default function Section() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([
      { id: 1, img: Gorrion },
      { id: 2, img: Circo },
      { id: 3, img: diaPollo }
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
