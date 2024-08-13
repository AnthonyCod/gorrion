import React, { useState } from 'react'
import './Header.css'
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa"
import { IoCartOutline } from "react-icons/io5";
import logo from '../../img/logo.png'

export default function Header() {

    const [selectIndex,setSelectedIndex] = useState(null);

    const handleClick = (id) => {
        setSelectedIndex(id);
    }

    const links = [
        { id: 1, text: 'INICIO' },
        { id: 2, text: 'PROMOCIONES' },
        { id: 3, text: 'LOCALES' },
        { id: 4, text: 'RESERVAS' }
    ];

  return (
    <header>
        <div className="logo">
            <img src={logo}/>
        </div>
        <div className="list">
            <ul>
                {links.map(link => (
                    <li key={link.id}>
                        <a href="#"
                        className={selectIndex === link.id ? 'active' : ''}
                        onClick={() => handleClick(link.id)}
                        >{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>

        <div className="search-container">
            <input className='search-bar' type="text" placeholder='Busque aqui...' />
            <FaSearch className='icon'/>
        </div>
        
        <div className="contact">
            <h4 className='title'>Delivery:</h4>
            <h4 className='number'><a href="">(01) 645 4000</a></h4>
        </div>

        <div className="cta">
            <button>¡Pide Online!</button>
        </div>

    </header>
  )
}
