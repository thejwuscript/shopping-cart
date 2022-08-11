import { screen, render } from '@testing-library/react';
import All from './All';

describe('All', () => {
  it('renders without crashing', () => {
    render(<All />);
  })
})