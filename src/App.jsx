import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ProductListPage from "./ProductListPage";
import { Routes, Route } from "react-router-dom";
import AboutProduct from "./AboutProduct";
import NoFoundPage from './NoFoundPage';
import NextItemsPage from "./NextItemsPage";
import LastFourtyItemsPage from "./LastFourtyItemsPage";
import CartPage from "./CartPage"
import Login from "./Login"
import SignUp from "./SignUp"
import ForgotPassword from "./ForgotPassword"






function App() {
const [user,setUser]=useState()

  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const path = window.location.pathname;
  const [cart, setCart] = useState(savedData);
  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count }
    setCart(newCart);
  }
  
  function updateCart(newCart) {
    setCart(newCart)
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }

  const totalCount = Object.keys(cart).reduce(function(previous, current) {
    return previous + cart[current]
  }, 0);
  return (
    <div>
      <Header productCount={totalCount} />


      <Routes className="mt-10">

        <Route index element={<ProductListPage />}></Route>
        <Route path="/AboutProduct/:id" element={<AboutProduct onAddToCart={handleAddToCart} />}>
        </Route>
        <Route path="/Login" element={<Login setUser={setUser} user={user}/>} />
        <Route path="/NextItemsPage" element={<NextItemsPage />} />
        <Route path="/LastFourtyItemsPage" element={<LastFourtyItemsPage />}>
        </Route>
        <Route path="/CartPage" element={<CartPage cart={cart} setCart={updateCart} />} />
        <Route path="/SignUp"
          element={<SignUp  setUser={setUser} user={user}/>}
        ></Route>
        <Route path="/ForgotPassword"
          element={<ForgotPassword />}
        ></Route>

        <Route path="*" element={<NoFoundPage />}>
        </Route>
      </Routes>


      <Footer />
    </div>
  );
}


export default App;