import React from "react"

function CartHeader() {
  return(
    <div className="bg-gray-200 flex justify-between border border-gray-300 p-4 rounded-t-MD space-x-5 px-5">
    <h1>Product</h1>
      <h1>Price</h1>
      <h1>Quantity</h1>
      <h1>Subtotal</h1>
    </div>
  );
}

export default CartHeader;