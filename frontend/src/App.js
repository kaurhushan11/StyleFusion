import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Product from './Pages/Product';
import Home from './Pages/Home';
import HomeCat from './Pages/HomeCat';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from "./Components/Images/banner_mens.png";
import women_banner from "./Components/Images/banner_women.png";
import kid_banner from "./Components/Images/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/womens' element={<HomeCat banner={women_banner} category="women"/>}/>
          <Route path='/mens' element={<HomeCat banner={men_banner} category="men"/>}/>
          <Route path='/kids' element={<HomeCat banner={kid_banner} category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
