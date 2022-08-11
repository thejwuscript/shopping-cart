import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

const MockHome = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
)

describe('Home', () => {
  it('renders the hero image', () => {
    render(<MockHome />);
    const image = screen.getByAltText('hero');
    expect(image.src).toContain('hero.jpg');
  })

  it('displays a welcome message', () => {
    render(<MockHome />);
    const message = screen.getByRole('heading', { name: 'Welcome!'});
    expect(message).toBeInTheDocument();
  })

  it('renders a link to the Shop page', () => {
    render(<MockHome />);
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/shop');
  })
});
