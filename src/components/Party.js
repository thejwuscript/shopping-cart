import React from 'react';
import Game from './Game';

export default function Party({ games, onSubmit }) {
  return (
    <div>
      <ul className="games-grid-container">
        {games.map( gameObj => <Game key={gameObj.id} game={gameObj} onSubmit={onSubmit} />)}
      </ul>
    </div>
  );
};
