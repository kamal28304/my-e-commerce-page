import React from "react";
import {HiShoppingBag} from "react-icons/hi"


 function Header({productCount}){
  return(
    <>
    <div className="p-2 bg-yellow-100 flex mx-auto justify-between max-w-6xl fixed w-full">
  
    <img className="w-32 " src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"/>
<div className="flex flex-col items-center">
      <HiShoppingBag className="text-5xl text-gray-500"/>
      <span className="-m-7 text-white">{productCount}</span>
  </div>
      </div>
      
  </>
  )
}
export default Header;
