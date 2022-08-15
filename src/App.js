import "./styles/normalize.css";
import "./styles/styles.css";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import All from "./components/All";
import Strategy from "./components/Strategy";
import Family from "./components/Family";
import Party from "./components/Party";
import Puzzle from "./components/Puzzle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [games, setGames] = useState([]);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCartClick = () => {
    cartVisibility ? setCartVisibility(false) : setCartVisibility(true);
  };

  const handleAddSubmit = (gameObj, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.game.id === gameObj.id
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.game.id === gameObj.id
            ? { ...item, quantity: (Number(item.quantity) + Number(quantity)).toString() }
            : item
        );
      } else {
        return [...prevItems, { game: gameObj, quantity }];
      }
    })
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.boardgameatlas.com/api/search?limit=9&order_by=rank&client_id=R7JYD2LOOW"
      );
      const data = await response.json();
      setGames(data.games);
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter basename="/">
      <Header onClick={handleCartClick} />
      <main>
        <CartDrawer isVisible={cartVisibility} items={cartItems} />
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
          <Route path={process.env.PUBLIC_URL + "/shop"} element={<Shop />}>
            <Route path="all" element={<All games={games} onSubmit={handleAddSubmit}/>} />
            <Route path="strategy" element={<Strategy />} />
            <Route path="family" element={<Family />} />
            <Route path="party" element={<Party />} />
            <Route path="puzzle" element={<Puzzle />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
