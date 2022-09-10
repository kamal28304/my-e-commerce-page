import React,{useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ProductListPage from "./ProductListPage";
import {Routes,Route} from "react-router-dom";
import AboutProduct from "./AboutProduct";
import NoFoundPage from './NoFoundPage';
import NextItemsPage from "./NextItemsPage";
import LastFourtyItemsPage from "./LastFourtyItemsPage";


function App() {
const path=window.location.pathname;
const [cart, setCart]=useState({});
  function handleAddToCart(productId,count){
const oldCount=cart[productId] || 0;
setCart({...cart, [productId]:oldCount+count})
  }
  const totalCount= Object.keys(cart).reduce(function (previous,current) {
   return previous+cart[current]
  },0);

console.log("cart is",cart)
  return (
    <div>
       <Header  productCount={totalCount}/>
      
      <Routes>
        
        <Route index element={<ProductListPage/>}></Route>
        <Route path="/AboutProduct/:id" element={<AboutProduct         onAddToCart={handleAddToCart}/>}>  
        </Route>
    <Route path="/NextItemsPage" element={<NextItemsPage/>}>  
        </Route>
         <Route path="/LastFourtyItemsPage" element={<LastFourtyItemsPage/>}>  
        </Route>
    <Route path="*" element={<NoFoundPage/>}>
          
        </Route>
      </Routes>
    
      <Footer/>
      </div>
  );
}

export default App;