import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function CartIcon({ count }) {
  const handleClick = () => {
    const drawer = document.querySelector('.drawer-container');
    drawer.classList.add('active')
  }

  return (
    <div aria-label='shopping-cart' className="cart-wrapper" onClick={handleClick}>
      <FontAwesomeIcon icon={faCartShopping} />
      <span className='badge'>{count}</span>
    </div>
  );
};