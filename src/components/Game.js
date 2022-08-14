import React, { useState } from "react";

export default function Game({ game, onSubmit }) {
  const [quantity, setQuantity] = useState('');

  const handleChange = (e) => {
    setQuantity(e.target.value);
  }
  
  return (
    <li key={game.id} className="game-item">
      <img src={game.images.small} alt="" width={140} height={140} />
      <h3>{game.name}</h3>
      <span>${game.price_ca}</span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(game, quantity);
        }}
      >
        <button type="submit">Add to Cart</button>
        <div>
          <label htmlFor="quantity">Qty: </label>
          <input type="number" id="quantity" name="quantity" min={0} max={5} value={quantity} onChange={handleChange}/>
        </div>
      </form>
    </li>
  );
}
