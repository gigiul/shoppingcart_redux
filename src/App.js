import './App.css';
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './components/CartPage'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
      <Route exact path='/' element={<ProductCard />} />
      <Route path='/cart' element={<CartPage />} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
