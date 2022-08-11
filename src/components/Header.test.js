import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';


const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

describe('Header', () => {
  it('renders without crashing', () => {
    render(<MockHeader />);
  });

  it('displays a Home link', () => {
    render(<MockHeader />);
    const linkElement = screen.getByRole('link', { name: 'Home'});
    expect(linkElement.textContent).toBe('Home');
  });
  
  it('displays a Shop link', () => {
    render(<MockHeader />);
    const linkElement = screen.getByRole('link', { name: 'Shop'});
    expect(linkElement.textContent).toBe('Shop');
  });

  it('displays a Cart icon', () => {
    render(<MockHeader />);
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('data-icon', 'cart-shopping');
  })
});
