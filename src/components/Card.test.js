import { render } from '@testing-library/react';
import Card from './Card';

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

describe('Family', () => {
  it('renders without crashing', () => {
    render(<Card games={games}/>);
  });
});
