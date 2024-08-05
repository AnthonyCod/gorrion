import React, {useState} from 'react'
import Gorrion from '../../img/gorrion.jpg'
import Circo from '../../img/circo.jpg'
import './Section.css'
import diaPollo from '../../img/diaPollo.jpg'

export default function Section() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const listImages = [
    {id:1, img:Gorrion},
    {id:2, img:Circo},
    {id:3, img:diaPollo}
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listImages.length);
  };

const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + listImages.length) % listImages.length);
  };


  return (
    <main className="carousel">
    <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
    <div className="carousel-slide">
        <img src={`path/to/images/${listImages[currentIndex].img}.jpg`} alt="Slide" />
    </div>
    <button className="carousel-btn next" onClick={nextSlide}>❯</button>
</main>
  )
}
