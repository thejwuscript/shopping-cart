import React from "react";

export default function Game({ game }) {
  return (
    <li key={game.id} className="game-item">
      <img src={game.images.small} alt="" width={140} height={140} />
      <h3>{game.name}</h3>
      <span>${game.price_ca}</span>
      <form>
        <button type="submit">Add to Cart</button>
        <div>
          <label htmlFor="quantity">Qty: </label>
          <input type="number" id="quantity" name="quantity" min={0} max={5} />
        </div>
      </form>
    </li>
  );
}
