import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



export default function Header() {
  return (
    <header>
      <Logo />
      <div className='header-right'>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <div className="cart-container">
          <FontAwesomeIcon icon={faCartShopping} />
          <span className='badge'>2</span>
        </div>
      </div>
    </header>
  );
};
