import React from "react";

export default function All({ games }) {
  return (
    <div>
      <ul className="games-grid-container">
        {games.map((game) => {
          return (
            <li key={game.id} className="game-item">
              <img src={game.images.small} alt="" width={150} height={150} />
              <h3>{game.name}</h3>
              <span>${game.price_ca}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
