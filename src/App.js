import './styles/normalize.css';
import './styles/styles.css';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
