import React, { useState } from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import logo from '../../../img/logo.png';

export default function Header() {
    const [selectIndex, setSelectedIndex] = useState(null);
    
    const location = useLocation(); 
    const currentPath = location.pathname;

    React.useEffect(() => {
        const currentLink = links.find(link => link.href === currentPath);
        if (currentLink) {
            setSelectedIndex(currentLink.id);
        }
    }, [currentPath]);

    const links = [
        { id: 1, text: 'INICIO', href: '/' },
        { id: 2, text: 'PROMOCIONES', href: '/promociones' },
        { id: 3, text: 'LOCALES', href: '/locales' },
        { id: 4, text: 'RESERVAS', href: '/reservas' }
    ];

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="list">
                <ul>
                    {links.map((link) => (
                        <li key={link.id}>
                            <Link
                                to={link.href}
                                className={selectIndex === link.id ? 'active' : ''}
                                onClick={() => setSelectedIndex(link.id)}
                            >
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="search-container">
                <input className='search-bar' type="text" placeholder='Busque aqui...' />
                <FaSearch className='iconSearch' />
            </div>

            <div className="contact">
                <h4 className='title'>Delivery:</h4>
                <h4 className='number'><a href="tel:(01) 645 4000">(01) 645 4000</a></h4>
            </div>

            <div className="cta">
                <button>¡Pide Online!</button>
            </div>
        </header>
    );
}
