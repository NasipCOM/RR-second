import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><NavLink exact to='/'>home</NavLink></li>
                <li><NavLink to='/blog'>blog</NavLink></li>
                <li><NavLink to='/about'>about</NavLink></li>
                <li><NavLink to='/contact'>contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;