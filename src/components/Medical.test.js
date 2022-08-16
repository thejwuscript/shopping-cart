import { screen, render } from '@testing-library/react';
import Medical from './Medical';

const games = [
  {
    id: "one",
    name: "Game One",
    price_ca: "10.00",
    images: {
      small: "https://via.placeholder.com/150",
    }
  },
  {
    id: "two",
    name: "Game Two",
    price_ca: "20.00",
    images: {
      small: "https://via.placeholder.com/150",
    }
  },
];

describe('Puzzle', () => {
  it('renders without crashing', () => {
    render(<Medical games={games} />);
  });
});
