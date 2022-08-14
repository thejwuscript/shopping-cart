import React from "react";
import Game from "./Game";

export default function All({ games, onSubmit }) {
  return (
    <div>
      <ul className="games-grid-container">
        {games.map( gameObj => <Game game={gameObj} onSubmit={onSubmit} />)}
      </ul>
    </div>
  );
}
