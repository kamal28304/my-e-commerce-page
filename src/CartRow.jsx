import React from"react"
import CartHeader from "./CartHeader"

function CartRow({thumbnail,title,price,id}){
  return(
    <div>

    <div className="flex justify-between border border-gray-500 p-5">
      <div className="flex">
        
    <img className="w-16 h-16"
      src={thumbnail} />
      <h1 className="whitespace-normal">{title}</h1>
        </div>
      <div className="w-10 text-center">
        <h1>${price}</h1>
      </div>
      <div className="w-10 text-center">
      <input className="w-12 border border-gray-200"/>
      </div>
      <div className="w-10 text-center">
      <h1>subtotal</h1>
      </div>
      
    </div>
      </div>
  );
}

export default CartRow;