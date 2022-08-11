import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CartIcon from './CartIcon';

describe('CartIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CartIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('displays the shopping cart icon', () => {
    render(<CartIcon />);
    expect(screen.getByLabelText('shopping-cart')).toBeInTheDocument();
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('data-icon', 'cart-shopping');
  });

  it('displays the number of items in the cart', () => {
    render(<CartIcon count={3} />);
    expect(screen.getByText('3')).toBeInTheDocument();
  })
})