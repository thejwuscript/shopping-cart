import React from "react";
import Game from "./Game";

export default function All({ games }) {
  return (
    <div>
      <ul className="games-grid-container">
        {games.map( gameObj => <Game game={gameObj}/>)}
      </ul>
    </div>
  );
}
