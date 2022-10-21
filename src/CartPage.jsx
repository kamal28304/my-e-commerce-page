import React, { useState, useEffect } from "react"
import CartList from "./CartList"
import Loading from "./Loading"
import { getProductByIds } from "./Api";
import { Link } from "react-router-dom";
import CartTotal from "./CartTotal"



function CartPage({ cart ,setCart}) {
  
  const [cartList, setCartList] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    const ProductIds = Object.keys(cart);
getProductByIds(ProductIds).then((responses)=> {
       setCartList(responses)
       setLoading(false);
    })
  }, [cart]);


  if (loading) {
    return <Loading />
  }
  return (
    
<div className="bg-white px-16 py-20 max-w-6xl mt-20">
        <CartList products={cartList} cart={cart} updateCart={setCart} />

         <div className="mt-10 self-end"> 
           <CartTotal />
         </div>

        <Link to="/" className="px-3 py-1 bg-gray-500 mt-5 self-center">
          Back
        </Link>
      </div>
  );
}


export default CartPage;