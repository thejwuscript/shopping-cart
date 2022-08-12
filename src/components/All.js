import React, { useState, useEffect } from 'react';

export default function All() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch('https://api.boardgameatlas.com/api/search?limit=2&client_id=R7JYD2LOOW')
      .then(response => response.json())
      .then(data => {
        setGames(data.games);
      })
  }, [])

  return (
    <div>
      <ul>
        {games.map(game => {
          return <li key={game.id}>{game.name}</li>;
        })}
      </ul>
    </div>
  );
};
