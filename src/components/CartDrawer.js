import React from "react";

export default function CartDrawer({ isVisible, items, handleClick }) {
  console.log(items);
  let className;

  if (isVisible) {
    className = "drawer-container active";
  } else {
    className = "drawer-container";
  }

  return (
    <div className={className}>
      <h1>Shopping Cart</h1>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.game.id} className="cart-item">
              <img
                src={item.game.images.small}
                alt={item.game.name}
                width={70}
                height={70}
              />
              <span className="game-title">{item.game.name}</span>
              <span className="item-quantity">Qty: {item.quantity}</span>
              <small className="delete" onClick={() => handleClick(item.game)}>Delete</small>
              <span className="price">${item.game.price_ca}</span>
            </li>
          );
        }).reverse()}
      </ul>
      {items.length > 0 && <div className="cart-subtotal">
        <span>
          Subtotal: $
          {Math.floor(items.reduce((acc, item) => {
            return acc + item.game.price_ca * item.quantity;
          }, 0) * 100) / 100}
        </span>
      </div>}
      {items.length > 0 && <button type="button">Order Now</button>}
      {items.length <= 0 && <p>No items in cart.</p>}
    </div>
  );
}
