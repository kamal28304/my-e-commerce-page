import React from "react";

function CartFooter(params) {
  return(
    <div className="sm:flex justify-between border border-gray-500 p-3 rounded-b-md">
    <div className="flex">
      <input placeholder="Coupen Code" 
        className="border"/>
      <button className="px-3 py-1 bg-red-500 text-white text-center ml-2">APPLY COUPON</button>
    </div>
      
      <button className="px-3 py-1 bg-red-500 text-white text-center">Update Cart</button>
    </div>
  );
}

export default CartFooter;