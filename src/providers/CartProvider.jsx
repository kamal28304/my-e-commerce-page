import React,{useState} from "react"
import { CartContext } from "../Contexts"


function CartProvider({children}){
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
     <CartContext.Provider value={{cart,setCart,totalCount,handleAddToCart,updateCart}}>
       {children}
     </CartContext.Provider>
  )
}

export default CartProvider;