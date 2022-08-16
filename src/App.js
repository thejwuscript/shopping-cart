import "./styles/normalize.css";
import "./styles/styles.css";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import All from "./components/All";
import Family from "./components/Family";
import Party from "./components/Party";
import Medical from "./components/Medical";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [games, setGames] = useState([]);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const familyGames = games.filter((game) => game.categories.some((category) => category.id === "7rV11PKqME"))

  const partyGames = games.filter((game) => game.categories.some((category) => category.id === "X8J7RM6dxX"))

  const medicalGames = games.filter((game) => game.categories.some((category) => category.id === "AeWXMxbm91"))

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

  const handleDelete = (gameObj) => {
    setCartItems(prevItems => {
      return prevItems.filter(item => item.game.id !== gameObj.id);
    });
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.boardgameatlas.com/api/search?limit=10&order_by=rank&client_id=R7JYD2LOOW"
      );
      const data = await response.json();
      console.log(data);
      let games = data.games;
      let filtered = games.filter(game => {
        let img = new Image();
        img.src = game.image_url;
        return img.naturalWidth > 0 && img.naturalHeight > 0;
      })
      console.log(filtered);
      setGames(filtered);
    };
    fetchData();
  }, []);

  console.log(process.env.PUBLIC_URL);
  console.log(games);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header onClick={handleCartClick} count={cartItems.length}/>
      <main>
        <CartDrawer isVisible={cartVisibility} items={cartItems} handleClick={handleDelete} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route path="all" element={<All games={games} onSubmit={handleAddSubmit}/>} />
            <Route path="family" element={<Family games={familyGames} onSubmit={handleAddSubmit} />} />
            <Route path="party" element={<Party games={partyGames} onSubmit={handleAddSubmit}/>} />
            <Route path="medical" element={<Medical games={medicalGames} onSubmit={handleAddSubmit}/>} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
