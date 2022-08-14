import React from 'react';

export default function CartDrawer({ isVisible, items }) {
  let className;

  if (isVisible) {
    className = "drawer-container active";
  } else {
    className = "drawer-container";
  };

  return (
    <div className={className}>
      <h1>Shopping Cart</h1>
      <ul>
        {items.map(item => {
          return <li>{item.name}</li>
        })}
      </ul>
    </div>
  );
};
