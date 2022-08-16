import React from "react";
import Game from "./Game";

export default function All({ games, onSubmit }) {
  console.log(games);

  return (
    <div>
      <ul className="games-grid-container">
        {games.map( gameObj => <Game key={gameObj.id} game={gameObj} onSubmit={onSubmit} />)}
      </ul>
    </div>
  );
}
