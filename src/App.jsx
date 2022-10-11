import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ProductListPage from "./ProductListPage";
import { Routes, Route } from "react-router-dom";
import AboutProduct from "./AboutProduct";
import Loading from "./Loading"
import NoFoundPage from './NoFoundPage';
import NextItemsPage from "./NextItemsPage";
import LastFourtyItemsPage from "./LastFourtyItemsPage";
import CartPage from "./CartPage"
import Login from "./Login"
import SignUp from "./SignUp"
import ForgotPassword from "./ForgotPassword"
import axios from "axios"
import UserRoute from "./UserRoute"
import AuthRoute from "./AuthRoute"
import { UserContext, AlertContext } from "./Contexts"
import Alert from "./Alert"




function App() {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const [alert, setAlert] = useState();

  const token = localStorage.getItem("token")

  useEffect(() => {
    if (token) {
      axios.get("https://myeasykart.codeyogi.io/me", { headers: { Authorization: token, } })
        .then((response) => {
          setUser(response.data)
          setLoading(false)
        });
    } else {
      setLoading(false)
    }
  }, [token]);

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

  const cartString = JSON.stringify(cart);
  localStorage.setItem("my-cart", cartString);

  function removeAlert() {
    setAlert('');
  }
  if (loading) {
    return <Loading />
  }

  return (
    <div>

      <UserContext.Provider value={{ user, setUser }} >
        <AlertContext.Provider value={{ alert, setAlert, removeAlert }} >

          <Header productCount={totalCount} />
          <div className="bg-gray-300 flex flex-col justify-center">
            <div className="mt-20">
              <Alert />
            </div>
            <Routes className="mt-10">
              <Route index element={<UserRoute><ProductListPage /></UserRoute>} />
              <Route path="/AboutProduct/:id" element={<AboutProduct onAddToCart={handleAddToCart} />}>
              </Route>
              <Route path="/Login" element={<AuthRoute ><Login /></AuthRoute>} />
              <Route path="/NextItemsPage" element={<NextItemsPage />} />
              <Route path="/LastFourtyItemsPage" element={<LastFourtyItemsPage />}>
              </Route>
              <Route path="/CartPage" element={<UserRoute><CartPage cart={cart} setCart={updateCart} /></UserRoute>} />
              <Route path="/SignUp"
                element={<AuthRoute><SignUp /></AuthRoute>}
              />
              <Route path="/ForgotPassword"
                element={<ForgotPassword />}
              ></Route>

              <Route path="*" element={<NoFoundPage />}>
              </Route>
            </Routes>
          </div>
          <Footer />
        </AlertContext.Provider>
      </UserContext.Provider>
    </div>


  );
}


export default App;