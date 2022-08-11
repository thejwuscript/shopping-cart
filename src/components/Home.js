import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../images/hero.jpg';

export default function Home() {
  return (
    <div id="home">
      <Link to="/shop"><img src={Hero} alt="hero" id="hero" /></Link>
      <h1>Welcome!</h1>
    </div>
  );
};
