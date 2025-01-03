import React, { useState } from 'react';
import './Header.css';
import { FaSearch, FaBars, FaPhoneAlt, FaShoppingCart } from 'react-icons/fa'; // Importa el ícono de carrito
import { IoCloseCircle } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import logo from '../../../img/logo.png';

export default function Header() {

    const links = [
        { id: 1, text: 'INICIO', href: '/' },
        { id: 2, text: 'PROMOCIONES', href: '/promociones/promociones' },
        { id: 3, text: 'LOCALES', href: '/locales' }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false); // Estado para manejar la visibilidad del carrito
    const [cartItems, setCartItems] = useState([]); // Estado para los productos en el carrito

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const addToCart = (product) => {
        setCartItems([...cartItems, product]); // Agregar producto al carrito
    };

    return (
        <header>
            <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                <div className="close">
                    <IoCloseCircle className='closeButton' onClick={toggleMenu} />
                </div>
                <div className="menuTittle">
                    <h3>MENU GORRION <img src={logo} alt="" /></h3>
                </div>
                <div className="listMenu">
                    <nav className="listCell">
                        <ul>
                            {links.map(({ id, text, href }) => (
                                <li key={id}>
                                    <NavLink to={href} className="linkText">
                                        {text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="bar">
                <FaBars onClick={toggleMenu} />
            </div>

            <div className="logo">
                <NavLink to="/">
                    <img src={logo} alt="Inicio" />
                </NavLink>
            </div>

            <nav className="list">
                <ul>
                    {links.map(({ id, text, href }) => (
                        <li key={id}>
                            <NavLink to={href} className={({ isActive }) => (isActive ? 'active' : '')}>
                                {text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="search-container">
                <input className='search-bar' type="text" placeholder='Busque aqui...' />
                <FaSearch className='iconSearch' />
            </div>

            <div className="contactCel">
                <a href="tel:(01) 645 4000">
                    <FaPhoneAlt className='celIcon' />
                </a>
            </div>

            <div className="contact">
                <h4 className='title'>Delivery:</h4>
                <h4 className='number'>
                    <a href="tel:(01) 645 4000">(01) 645 4000</a>
                </h4>
            </div>

            <div className="cart">
                <FaShoppingCart onClick={toggleCart} className="cartIcon" />
                <span className='counterCart'>{cartItems.length}</span> {/* Contador de productos */}
            </div>

            {/* Cart Modal */}
            {isCartOpen && (
                <div className="cart-modal">
                    <div className="cart-header">
                        <h3>Mi Carrito</h3>
                        <button className="close-button" onClick={closeCart}>X</button>
                    </div>

                    {/* Mostrar los productos en el carrito */}
                    {cartItems.length > 0 ? (
                        <div className="cart-items">
                            {cartItems.map((item, index) => (
                                <div key={index} className="card">
                                    <img src={item.image} alt={item.name} className="card-image" />
                                    <h3 className="card-title">{item.name}</h3>
                                    <div className="column">
                                        <h4 className="description">{item.description}</h4>
                                        <h4 className="price">{item.price}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No hay productos en el carrito</p> // Mensaje si el carrito está vacío
                    )}
                </div>
            )}

            <div className="cta">
                <NavLink to="/login" className='cta'>
                    <button>¡Pide Online!</button>
                </NavLink>
            </div>
        </header>
    );
}
