import React, { useState, useEffect } from "react";

export default function All() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.boardgameatlas.com/api/search?limit=2&client_id=R7JYD2LOOW"
      );
      const data = await response.json();
      setGames(data.games);
    }
    fetchData();
  }, []);

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
