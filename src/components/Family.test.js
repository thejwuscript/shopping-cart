import { screen, render } from '@testing-library/react';
import Family from './Family';

describe('Family', () => {
  it('renders without crashing', () => {
    render(<Family />);
  });
});
