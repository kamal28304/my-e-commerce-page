import React from "react";
import { HiShoppingBag } from "react-icons/hi"
import { Link } from "react-router-dom"



function Header({ productCount }) {
  return (
    <>
      <div className="p-2 bg-yellow-100 flex mx-auto justify-between fixed w-full ">

        <img className="w-32 " src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" />
        <div className="flex flex-col items-center">
      <Link  to= "/CartPage" 
        className="flex items-center justify-center text-5xl text-gray-500 hover:bg-indigo-300"> <HiShoppingBag /></Link>
          <span className="-m-7 text-white">{productCount}</span>
        </div>
      </div>

    </>
  )
}
export default Header;
