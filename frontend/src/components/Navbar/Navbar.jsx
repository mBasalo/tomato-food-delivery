import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" onClick={() => setMenu('home')}  /></Link>

      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""} onClick={() => setMenu('home')}>home</li>
        <li className={menu === "menu" ? "active" : ""} onClick={() => setMenu('menu')}>menu</li>
        <li className={menu === "mobile-app" ? "active" : ""} onClick={() => setMenu('mobile-app')}>mobile-app</li>
        <li className={menu === "contact-us" ? "active" : ""} onClick={() => setMenu('contact-us')}>contact us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
