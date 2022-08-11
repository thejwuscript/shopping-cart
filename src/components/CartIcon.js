import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function CartIcon({ count }) {
  return (
    <div aria-label='shopping-cart' className="cart-wrapper">
      <FontAwesomeIcon icon={faCartShopping} />
      <span className='badge'>{count}</span>
    </div>
  );
};