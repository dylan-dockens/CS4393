import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import exhausts_banner from './Components/Assets/exhaust_banner.png'
import levers_banner from './Components/Assets/levers_banner.png'
import mirrors_banner from './Components/Assets/mirrors_banner.png'
import windshields_banner from './Components/Assets/windshields_banner.png'
import tail_banner from './Components/Assets/tail_banner.png'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/exhausts' element={<ShopCategory title="Exhausts" banner={exhausts_banner} category="exhaust"/>}/>
        <Route path='/levers' element={<ShopCategory title="Levers" banner={levers_banner} category="levers"/>}/>
        <Route path='/tail' element={<ShopCategory title="Fender Eliminators" banner={tail_banner} category="tails"/>}/>
        <Route path='/windshields' element={<ShopCategory title="Windshields" banner={windshields_banner} category="windshields"/>}/>
        <Route path='/mirrors' element={<ShopCategory title="Mirrors" banner={mirrors_banner} category="mirrors"/>}/>
        <Route path='product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
