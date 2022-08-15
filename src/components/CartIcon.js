import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function CartIcon({ onClick, count }) {
  return (
    <div aria-label='shopping-cart' className="cart-wrapper" onClick={onClick}>
      <FontAwesomeIcon icon={faCartShopping} />
      {count > 0 && <span className='badge'>{count}</span>}
    </div>
  );
};