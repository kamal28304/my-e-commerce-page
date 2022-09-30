import React,{useContext,useState} from "react";
import {contextData} from "./CartList"
function CartFooter() {
const {updateCart,Cart}  = useContext(contextData)

  const [localCart,setLocalCart]=useState(Cart)

function handleChange(event) {
    const newValue= +event.target.value;
    const changedId= event.target.getAttribute("productid")
    
    const newLocalCart={...localCart,[changedId]:newValue}
    setLocalCart(newLocalCart)
  updateCart(localCart);
  }

  


  return (
    <div className="sm:flex justify-between border border-gray-500 p-3 rounded-b-md">
      <div className="flex">
        <input placeholder="Coupen Code"
          className="border" />
        <button className="px-3 py-1 bg-red-500 text-white text-center ml-2">APPLY COUPON</button>
      </div>

      <button className="px-3 py-1 bg-red-500 text-white text-center" onClick={handleChange}>Update Cart</button>
    </div>
  );
}

export default CartFooter;