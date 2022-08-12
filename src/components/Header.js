import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';



export default function Header() {
  return (
    <header>
      <Logo />
      <div className='header-right'>
        <Link to="/shopping-cart">Home</Link>
        <Link to="/shop/all">Shop</Link>
        <CartIcon count={4} />
      </div>
    </header>
  );
};
