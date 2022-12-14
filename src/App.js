import "./styles/normalize.css";
import "./styles/styles.css";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import All from "./components/All";
import Card from "./components/Card";
import Party from "./components/Party";
import Medical from "./components/Medical";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [games, setGames] = useState([]);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const partyGames = games.filter((game) =>
    game.categories.some((category) => category.id === "X8J7RM6dxX")
  );

  const cardGames = games.filter((game) =>
    game.categories.some((category) => category.id === "eX8uuNlQkQ")
  );

  const medicalGames = games.filter((game) =>
    game.categories.some((category) => category.id === "AeWXMxbm91")
  );

  const handleCartClick = () => {
    cartVisibility ? setCartVisibility(false) : setCartVisibility(true);
  };

  const handleAddSubmit = (gameObj, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.game.id === gameObj.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.game.id === gameObj.id
            ? {
                ...item,
                quantity: (Number(item.quantity) + Number(quantity)).toString(),
              }
            : item
        );
      } else {
        return [...prevItems, { game: gameObj, quantity }];
      }
    });
  };

  const handleDelete = (gameObj) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.game.id !== gameObj.id);
    });
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.boardgameatlas.com/api/search?limit=19&order_by=rank&client_id=R7JYD2LOOW"
      );
      const data = await response.json();
      let promises = data.games.map(async (game) => {
        let img = new Image();
        img.src = game.image_url;
        try {
          await img.decode();
        } catch (error) {
          return game.id;
        }
      });
      let noImageGameIds = (await Promise.all(promises)).filter(Boolean);
      let filteredGames = data.games.filter(
        (game) => !noImageGameIds.includes(game.id)
      );
      setGames(filteredGames);
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header onClick={handleCartClick} count={cartItems.length} />
      <main>
        <CartDrawer
          isVisible={cartVisibility}
          items={cartItems}
          handleClick={handleDelete}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route
              path="all"
              element={<All games={games} onSubmit={handleAddSubmit} />}
            />
            <Route
              path="party"
              element={<Party games={partyGames} onSubmit={handleAddSubmit} />}
            />
            <Route
              path="card"
              element={<Card games={cardGames} onSubmit={handleAddSubmit} />}
            />
            <Route
              path="medical"
              element={
                <Medical games={medicalGames} onSubmit={handleAddSubmit} />
              }
            />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
