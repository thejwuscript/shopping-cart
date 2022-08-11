import { screen, render } from '@testing-library/react';
import Party from './Party';

describe('Party', () => {
  it('renders without crashing', () => {
    render(<Party />);
  });
});
