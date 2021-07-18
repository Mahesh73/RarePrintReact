import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <nav className="navbar">
                <Link className="navbar-brand" to="/">
                    <img src="./images/rareprintLogo.png" alt="" loading="lazy" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItem.map((item, index) => {
                        return (
                            <li key={index} className="nav-item">
                                <Link activeClassName="menu_active" className="nav-link" to={item.url} onClick={closeMobileMenu}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
