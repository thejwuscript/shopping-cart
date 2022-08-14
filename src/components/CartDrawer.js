import React from 'react';

export default function CartDrawer({ isVisible }) {
  let className;

  if (isVisible) {
    className = "drawer-container active";
  } else {
    className = "drawer-container";
  };

  return (
    <div className={className}>Your cart is empty.</div>
  );
};
