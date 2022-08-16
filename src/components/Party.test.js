import { screen, render } from '@testing-library/react';
import Party from './Party';

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

describe('Party', () => {
  it('renders without crashing', () => {
    render(<Party games={games} />);
  });
});
