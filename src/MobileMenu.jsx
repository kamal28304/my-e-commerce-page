import React from "react"
import { Link } from "react-router-dom"


function MobileMenu() {
  return(
    <div className="flex flex-col">
      
      <Link to="/" className="border p-2 text-indigo-500 flex">Home</Link>
      <Link className="border p-2 text-indigo-500">About</Link>
      <Link to="/Login" className="border p-2 text-indigo-500">Login</Link>
      <Link to="/SignUp"className="border p-2 text-indigo-500 w-full">Sign Up</Link>
    
  </div>
  );
}
export default MobileMenu;
