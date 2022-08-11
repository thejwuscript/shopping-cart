import { screen, render } from '@testing-library/react';
import Puzzle from './Puzzle';

describe('Puzzle', () => {
  it('renders without crashing', () => {
    render(<Puzzle />);
  });
});
