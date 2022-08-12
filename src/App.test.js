import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

jest.mock("./components/All.js", () => () => (
  <>
    <p>All products page</p>
  </>
));

describe("App", () => {
  it("renders all products when the hero image is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);
    const image = screen.getByAltText("hero");
    await user.click(image);
    expect(screen.getByText("All products page")).toBeInTheDocument();
  });

  it("renders all products when the Shop link is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);
    const link = screen.getByRole("link", { name: "Shop" });
    await user.click(link);
    expect(screen.getByText("All products page")).toBeInTheDocument();
  });

  it('renders the Home screen when the Home link is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    const link = screen.getByRole('link', { name: 'Home' });
    await user.click(link);
    const heading = screen.getByRole('heading', { name: 'Welcome!'});
    expect(heading).toBeInTheDocument();
  });
});
