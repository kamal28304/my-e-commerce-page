import React from "react";

function CartPageMobile(){
  return(
    <div className="block sm:hidden">
      <div> 
      crossButton
        
      </div>
      <div className="border border-gray-300 p-2">
      <img className="h-16 w-16" src={thumbnail} />
      </div>
      <div className="border border-gray-300 flex justify-between p-2">
      <h1>Product:</h1>
        <h1>{title}</h1>
      </div>
    <div className="border border-gray-300 flex justify-between p-2">
    <h1>Price:</h1>
       <h1>{price}</h1>
    </div>
      <div className="border border-gray-300 flex justify-between p-2">
    <h1>Quantity:</h1>
       <input className="w-12 border border-gray-300"/>
    </div>
      <div className="border border-gray-300 flex justify-between p-2">
    <h1>Subtotal:</h1>
       <h1> 636 $</h1>
    </div>
    </div>
  );
  
}


export default CartPageMobile;