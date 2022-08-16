import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('has a link to all games', () => {
    render(<Navbar />, {wrapper: BrowserRouter});
    const link = screen.getByRole('link', { name: 'All'});
    expect(link).toHaveAttribute('href', '/shop/all');
  });

  it('has a link to strategy games', () => {
    render(<Navbar />, {wrapper: BrowserRouter});
    const link = screen.getByRole('link', { name: 'Party'});
    expect(link).toHaveAttribute('href', '/shop/party');
  });

  it('has a link to family games', () => {
    render(<Navbar />, {wrapper: BrowserRouter});
    const link = screen.getByRole('link', { name: 'Card Games'});
    expect(link).toHaveAttribute('href', '/shop/card');
  });

  it('has a link to party games', () => {
    render(<Navbar />, {wrapper: BrowserRouter});
    const link = screen.getByRole('link', { name: 'Medical'});
    expect(link).toHaveAttribute('href', '/shop/medical');
  });
})