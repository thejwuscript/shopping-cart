import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import All from "./All";

const games = [
  {
    id: "one",
    name: "Game One",
    price_ca: "10.00",
    images: {
      small: "https://via.placeholder.com/150",
    }
  },
  {
    id: "two",
    name: "Game Two",
    price_ca: "20.00",
    images: {
      small: "https://via.placeholder.com/150",
    }
  },
];

describe("All", () => {
  it("renders properly", () => {
    const tree = renderer.create(<All games={games} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders all games", () => {
    render(<All games={games} />);
    expect(screen.getByText("Game One")).toBeInTheDocument();
    expect(screen.getByText("Game Two")).toBeInTheDocument();
  });
});
