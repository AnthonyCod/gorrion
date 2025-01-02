import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import React from 'react'
import gorrion from '../../../img/gorrion.jpg'
import './Slider.css'

export default function Slider() {

    const imagesCarrousel = [
        {
            original: gorrion,
        },
        {
            original: gorrion,
        },
        {
            original: gorrion,
        },
        {
            original: gorrion,
        },
    ]

  return (
    <div>
        <div className='galleryContainer'>
            <ImageGallery 
                className='galleryContent'
                items={imagesCarrousel}
                showPlayButton={false}
            />
        </div>
    </div>
  )
}
