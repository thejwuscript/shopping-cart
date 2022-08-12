import { screen, render } from "@testing-library/react";
import renderer from 'react-test-renderer';
import { act } from "react-dom/test-utils";
import All from "./All";

const MOCK_RESPONSE = {
  games: [
    {
      id: "one",
      name: "Game One",
    },
    {
      id: "two",
      name: "Game Two",
    },
  ],
};

global.fetch = () =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_RESPONSE),
  });

describe("All", () => {
  it("renders properly", async () => {
    let component;
    await act(async () => {
      component = renderer.create(<All />);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders all games", async () => {
    render(<All />);
    expect(await screen.findByText('Game One')).toBeInTheDocument();
    expect(await screen.findByText('Game Two')).toBeInTheDocument();
  });

  // it('renders a list of games from all categories', async () => {
  //   render(<All />);
  //   expect(await screen.findByText('Game One')).toBeInTheDocument();
  //   // expect(await screen.findByText('Game Two')).toBeInTheDocument();
  // })
});
