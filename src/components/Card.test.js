import { render } from '@testing-library/react';
import Card from './Card';

describe('Family', () => {
  it('renders without crashing', () => {
    render(<Card />);
  });
});
