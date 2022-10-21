import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ProductListPage from "./ProductListPage";
import { Routes, Route } from "react-router-dom";
import AboutProduct from "./AboutProduct";
import NoFoundPage from './NoFoundPage';
import CartPage from "./CartPage"
import Login from "./Login"
import SignUp from "./SignUp"
import ForgotPassword from "./ForgotPassword"
import UserRoute from "./UserRoute"
import AuthRoute from "./AuthRoute"
import UserProvider from "./providers/UserProvider"
import AlertProvider from "./providers/AlertProvider"

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
const savedData = JSON.parse(savedDataString);

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

  const cartString = JSON.stringify(cart);
  localStorage.setItem("my-cart", cartString);


  return (
    <div>

      <UserProvider>
        <AlertProvider >

          <Header productCount={totalCount} />
          <div className="sm:p-8 p-5 bg-gray-300">

            <Routes>
              <Route index element={<UserRoute> <ProductListPage /> </UserRoute>} />
              <Route path="/AboutProduct/:id" element={<AboutProduct onAddToCart={handleAddToCart} />} />
              <Route path="/Login" element={<AuthRoute> <Login /> </AuthRoute>} />
              <Route path="/CartPage" element={<UserRoute><CartPage cart={cart} setCart={updateCart} /></UserRoute>} />
              <Route path="/SignUp"
                element={<AuthRoute><SignUp /></AuthRoute>} />
              <Route path="/ForgotPassword"
                element={<ForgotPassword />} />

              <Route path="*" element={<NoFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </AlertProvider>
      </UserProvider>
    </div>


  );
}


export default App;