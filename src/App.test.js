import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

jest.mock('./components/Home.js', () => () => (
  <>
    <h1>Home Screen</h1>
  </>
));

jest.mock('./components/Shop', () => () => (
  <>
    <p>Shop page</p>
  </>
));

describe('App', () => {
  it('renders the Shop screen when the Shop link is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    const link = screen.getByRole('link', { name: "Shop" });
    await user.click(link);
    expect(screen.getByText("Shop page")).toBeInTheDocument();
  });

  it('renders the Home screen when the Home link is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    const link = screen.getByRole('link', { name: 'Home' });
    await user.click(link);
    const heading = screen.getByRole('heading', { name: 'Home Screen'});
    expect(heading).toBeInTheDocument();
  });

  
});
