import React,{memo ,useState,useEffect} from "react"
import { ImCross } from "react-icons/im"


function CartRow({thumbnail,title,price}) {
  return (
    <div>
      <div className="hidden sm:block">

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
            <input className="w-12 border border-gray-200" 
              value="1"/>
          </div>
          <div className="w-10 text-center">
            <h1>subtotal</h1>
          </div>

        </div>
      </div>

      <div className="block sm:hidden">
        <div className="border border-gray-300 flex justify-end p-2">
          <ImCross className="text-3xl text-red-300" />

        </div>
        <div className="border border-gray-300 p-2 flex justify-center">
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
          <input className="w-12 border border-gray-300"
     value="1"       
            />
        </div>
        <div className="border border-gray-300 flex justify-between p-2">
          <h1>Subtotal:</h1>
          <h1> 636 $</h1>
        </div>
      </div>

    </div>
  );
}

export default memo(CartRow);