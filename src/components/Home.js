import React from 'react';
import Hero from '../images/hero.jpg';

export default function Home() {
  return (
    <div>
      <img src={Hero} alt="hero" />
      <h1>Welcome!</h1>
    </div>
  );
};
