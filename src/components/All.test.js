import { screen, render } from '@testing-library/react';
import All from './All';

const MOCK_RESPONSE = {
  games: [
    {
      id: "one",
      name: "Game One",
    },
    {
      id: "two",
      name: "Game Two",
    }
  ]
};

global.fetch = () => Promise.resolve({
  json: () => Promise.resolve(MOCK_RESPONSE)
})

describe('All', () => {
  it('renders without crashing', () => {
    render(<All />);
  });

  it('renders a list of games from all categories', async () => {
    render(<All />);
    // expect(await screen.findByText('Game One')).toBeInTheDocument();
    // expect(await screen.findByText('Game Two')).toBeInTheDocument();
  })
})

