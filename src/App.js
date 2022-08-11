import "./styles/normalize.css";
import "./styles/styles.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import All from "./components/All";
import Strategy from "./components/Strategy";
import Family from "./components/Family";
import Party from "./components/Party";
import Puzzle from "./components/Puzzle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
          <Route path="all" element={<All />} />
          <Route path="strategy" element={<Strategy />} />
          <Route path="family" element={<Family />} />
          <Route path="party" element={<Party />} />
          <Route path="puzzle" element={<Puzzle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
