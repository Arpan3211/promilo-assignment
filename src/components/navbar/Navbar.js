import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';
import logo from "../../promilo-logo.png"

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <nav className={`navbar ${showNav ? 'nav-active' : ''}`}>
            <div className="navbar-container">
                <img src={logo} alt="Logo" />


                <div className="menu-icon" onClick={toggleNav}>
                    {showNav ? <FaTimes /> : <FaBars />}
                </div>


                <ul className={`nav-menu ${showNav ? 'nav-menu-active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" onClick={() => { setShowNav(!showNav) }}>
                            About
                        </Link>
                        <Link to="/product-list" className="nav-link" onClick={() => { setShowNav(!showNav) }}>
                            Products
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
