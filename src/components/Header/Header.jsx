import React from 'react';
import './Header.css';
import LogoImg from '../../decoration/img/logo.png';

const Header = () => {
    return (
        <div className="header">
            
            <h1 className="header-text"><img className="logoImg" src={LogoImg} alt="logo"/>CrypCat</h1>
            <h5 className="header-text">cryptocurrency manager</h5>
        </div>
    )
}

export default Header
