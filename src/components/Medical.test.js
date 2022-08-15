import { screen, render } from '@testing-library/react';
import Medical from './Medical';

describe('Puzzle', () => {
  it('renders without crashing', () => {
    render(<Medical />);
  });
});
