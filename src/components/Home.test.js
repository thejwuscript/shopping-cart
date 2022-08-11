import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders the hero image', () => {
    render(<Home />);
    const image = screen.getByAltText('hero');
    
    expect(image.src).toContain('hero.jpg');
  })
});
