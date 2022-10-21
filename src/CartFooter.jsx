import React from "react";

function CartFooter({updateCart}) {

return (
    <div className="sm:flex justify-between border border-gray-500 p-3 rounded-b-md">
      <div className="flex flex-col sm:flex-row">
        <input placeholder="Coupen Code"
          className="border" />
        <button className="px-3 py-1 bg-red-500 text-white text-center sm:ml-2 my-2 sm:my-0">APPLY COUPON</button>
      </div>

      <button className="px-3 py-1 bg-red-500 text-white text-center my-2 sm:my-0" onClick={updateCart}>Update Cart</button>
    </div>
  );
}

export default CartFooter;