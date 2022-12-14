import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';



export default function Header({ onClick, count }) {
  return (
    <header>
      <Logo />
      <div className='header-right'>
        <Link to="/">Home</Link>
        <Link to="/shop/all">Shop</Link>
        <CartIcon count={count} onClick={onClick} />
      </div>
    </header>
  );
};
