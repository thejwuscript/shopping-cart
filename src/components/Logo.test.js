import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Logo from './Logo';

describe('Logo', () => {
  it('renders without crashing', () => {
    render(<Logo />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays the text in logo', () => {
    render(<Logo />);
    const logoElement = screen.getByRole('heading', { name: "Games 'n Pieces" });
    expect(logoElement.textContent).toMatch(/Games 'n Pieces/);
  });
});