import { screen, render } from '@testing-library/react';
import Strategy from './Strategy';

describe('Strategy', () => {
  it('renders without crashing', () => {
    render(<Strategy />);
  });
});
