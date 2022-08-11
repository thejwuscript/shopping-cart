import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

jest.mock('./components/Home.js', () => () => (
  <>
    <h1>Home Screen</h1>
  </>
));

describe('App', () => {
  it('renders the Home screen when the Home link is clicked', () => {
    const user = userEvent.setup();
    render(<App />);
    const link = screen.getByRole('link', { name: 'Home' });
    user.click(link);
    const heading = screen.getByRole('heading', { name: 'Home Screen'});
    expect(heading).toBeInTheDocument();
  });
});
