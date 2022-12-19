import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header-logo">
                <img src={logo} alt="" />
            </div>
            <div className="header-nav">
                <nav>
                     <a href="/home">Home</a>
                     <a href="/profile">Profile</a>
                     <a href="/salary">Salary</a>
                     <a href="/more">More</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;