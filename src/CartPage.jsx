import React,{useState,useEffect}from "react"
import CartList from "./CartList"
import Loading from "./Loading"

import {getProductData} from "./Api"
import { Link } from "react-router-dom"
function CartPage(id,{productCount}){
  const [cartList ,setCartList]=useState([])
const[loading,setLoading]=useState(true);
const savedDataString= localStorage.getItem("my-cart") ||"{}" ;
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);
  function getcartProducts(productId, Quantity) {
    const newCart = { ...cart}
    setCart(newCart)
  }
  
  useEffect(function() {
const myCart={...cart} 
  const promisses=Object.keys(myCart).map(function (productId) {
    return getProductData(productId)
  })

  const newPromise= Promise.all(promisses)

newPromise.then(function(responses){
  console.log(responses)
setCartList(responses)
  setLoading(false);
}) 
  }, [id]);

  if (loading) {
    return <Loading />
  }
  return (
    
    <div className="p-5 sm:p-12 bg-gray-100 max-w-5xl h-screen overflow-scroll">
      
    <div className="flex flex-col  justify-center p-5 bg-white" >
  
  <CartList products={cartList}/>
    
<div className="flex items-end justify-end flex-col mt-5">
  
      <div className="border bg-gray-200 border-gray-400  px-20 py-2">
      <h1>Cart Totals</h1>
      </div>
      <div className="border-2 bg-white border-gray-400 w-60 p-2">
  
        
        <div className="flex justify-between border-b-2 border-gray-500 p-2">
          
        <h1>Subtotal </h1>
        <h1>$ 636 </h1>
          </div>
        <div className="flex justify-between border-b-2 border-gray-500 p-2">
        <h1>Total </h1>
        <h1>$ 636 </h1>
          </div>
        <button className="px-4 py-2 bg-red-500 text-center my-3"> Procede to check out</button>
      </div>
      </div>
      <Link to="/" className="px-3 py-1 bg-gray-500 mt-5  self-center">Back</Link>
  </div>
      </div>
    );
}

export default CartPage;