import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import pollo from '../../../img/pollo.svg';
import promociones from '../../../img/promocionesIcon.svg';
import parrillas from '../../../img/parrillasIcon.svg';
import piqueos from '../../../img/piqueosIcon.svg';
import ensaladas from '../../../img/ensaladasIcon.svg';
import bebidas from '../../../img/bebidasIcon.svg';
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
  const [activeId, setActiveId] = useState(null);
  const location = useLocation(); 
  const currentPath = location.pathname;

  useEffect(() => {
    const linkId = links.find(link => link.href === currentPath)?.id;
    if (linkId) {
      setActiveId(linkId);
    }
  }, [currentPath]);

  const handleIconClick = (id) => {
    setActiveId(id);
  }

  // Define the links
  const links = [
    { id: "icon1", text: 'PROMOCIONES', href: '/promociones/promociones', image:promociones },
    { id: "icon2", text: 'BRASAS', href: '/promociones/brasas' , image:pollo },
    { id: "icon3", text: 'PARRILLAS', href: '/promociones/parrillas', image:parrillas },
    { id: "icon4", text: 'PIQUEOS', href: '/promociones/piqueos' , image:piqueos},
    { id: "icon5", text: 'ENSALADAS', href: '/promociones/ensaladas' , image:ensaladas},
    { id: "icon6", text: 'BEBIDAS', href: '/promociones/bebidas' , image:bebidas}
  ];

  return (
    <div className="div">
      <div className='navBarGeneral'>
        {links.map((link) => (
          <IconExample
            key={link.id}
            id={link.id}
            image={link.image}
            title={link.text}
            isActive={activeId === link.id}
            onClick={handleIconClick}
            link={link.href}
          />
        ))}
      </div>
    </div>
  );
}
