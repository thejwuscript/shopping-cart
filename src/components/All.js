import React from "react";

export default function All({ games }) {

  return (
    <div>
      <ul>
        {games.map((game) => {
          return <li key={game.id}>{game.name}</li>;
        })}
      </ul>
    </div>
  );
}
