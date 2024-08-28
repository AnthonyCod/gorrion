import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pollo from '../../../img/pollo.svg';
import './NavBar.css';

const IconExample = ({ id, image, title, isActive, onClick, link }) => {
  return (
    <div 
      className={`navBarContainer ${isActive ? 'active' : ''}`}
    >
      <Link to={link} className="navBar" onClick={() => onClick(id)}>
        <img className='image' src={image} alt={title} />
        <h3 className="title">{title}</h3>
      </Link>
    </div>
  );
}

export default function NavBar() {
  const [activeId, setActiveId] = useState("icon1");

  const handleIconClick = (id) => {
    setActiveId(id);
  }

  return (
    <div className="div">
      <div className='navBarGeneral'>
        <IconExample
          id="icon1"
          image={pollo}
          title="BRASAS"
          isActive={activeId === "icon1"}
          onClick={handleIconClick}
        />
        <IconExample
          id="icon2"
          image={pollo}
          title="PARRILLAS"
          isActive={activeId === "icon2"}
          onClick={handleIconClick}
        />
        <IconExample
          id="icon3"
          image={pollo}
          title="CRIOLLO"
          isActive={activeId === "icon3"}
          onClick={handleIconClick}
        />
        <IconExample
          id="icon4"
          image={pollo}
          title="HAMBURGUESAS"
          isActive={activeId === "icon4"}
          onClick={handleIconClick}
        />
        <IconExample
          id="icon5"
          image={pollo}
          title="PIQUEOS"
          isActive={activeId === "icon5"}
          onClick={handleIconClick}
        />
        <IconExample
          id="icon6"
          image={pollo}
          title="PROMOCIONES"
          isActive={activeId === "icon6"}
          onClick={handleIconClick}
        />
      </div>
    </div>
  );
}
