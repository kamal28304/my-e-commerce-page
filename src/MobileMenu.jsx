import React from "react"
import { Link } from "react-router-dom"
import Button from "./Button"



function MobileMenu({user,setUser}) {

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(undefined);
  }
  if (!user) {
    return <></>;
  }
  return(
   <div className="flex flex-col">
      
      <Link to="/" className="border p-2 text-indigo-500 flex">Home</Link>
      <Link className="border p-2 text-indigo-500">About</Link>
      {!user && <Link to="/Login" className="border p-2 text-indigo-500">Login</Link>}
      {!user &&<Link to="/SignUp"className="border p-2 text-indigo-500 w-full">Sign Up</Link>}
      <Button onClick={handleLogout}>LogOut</Button>
    
  </div>
  );
}
export default MobileMenu;
