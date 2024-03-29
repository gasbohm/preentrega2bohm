import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CheckOut } from '../src/Components/CheckOut/CheckOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './Components/Error';
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from './Components/Cart/Cart';
import CartProvider from "./Components/Context/CartContext";
import LoaderComponent from '../src/Components/LoaderComponent';
import React from 'react';
import Footer from './Components/Footer';
import './Components/Firebase/config';




function App() {
    return (
      <div className="App">
      <BrowserRouter>
      <LoaderComponent/>
      <CartProvider>
      <NavBar />
      
      <Routes> 
  
       <Route path={'/'} element={ <ItemListContainer /> } />
       <Route path={'/category/:id'} element={ <ItemListContainer /> } />
       <Route path={'/item/:id'} element={ <ItemDetailContainer /> } />
       <Route path={"/cart"} element={<Cart/>} />
       <Route path={"/checkout"} element={<CheckOut/>} />
       <Route path={'*'} element={ <Error /> } />
  
      </Routes>
  
   </CartProvider>
    </BrowserRouter>
    {/* Footer */}
    <Footer />
      </div>
    );
  }
  
  export default App;