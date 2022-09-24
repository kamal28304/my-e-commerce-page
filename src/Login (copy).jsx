import React,{useState} from "react";
import {useFormik} from "formik"

import Button from "./Button";


function Login() {
const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("")

function callLoginApi(event) {  event.preventDefault();
    console.log("sending data",email,password)
        if(password.length < 8){
  setError("");
  return;
    }                      
  }
   function handleEmailChange(event) {
setEmail(event.target.value);
   }

  function handlePasswordChange(event) {
setPassword(event.target.value)
if(password.length >= 8){
  setError("");
    }
   }

  function handlePasswordOnBlur(event) {
    if(password.length < 8){
    setError("password must be 8 characters long*")

  }
  }
  function resetForm() {
  setPassword("");
  setEmail("");
  }
  
  
  return(
    <div className="bg-gray-300 p-2 h-screen flex flex-col justify-center items-center ">
    <form 
      onSubmit={callLoginApi}
      className="bg-white p-4 shadow-md">
      <h1 className="text-2xl font-bold my-3 text-gray-700">Login</h1>
    <div className="border border-gray-300 rounded-md p-5 flex flex-col">
      <label htmlFor="email">
        
      Username or email address
      </label>
      <input 
        placeholder="email address"
        onChange={handleEmailChange}
        className="border border-gray-200 p-2"
        id="email"
        type="email"
        required
        autoComplete="email"
        />
      
      <label htmlFor="password"
        className="mt-3">
      Password
      </label>
      <input 
        placeholder="Password"
      className="border border-gray-200  p-2"
        onChange={handlePasswordChange}
        onBlur={handlePasswordOnBlur}
        id="password"
        type="password"
   autoComplete="password"
        required
        />
     {error && <h1 className="text-red-500">{error}</h1>}
      
      <div className="flex my-3">
      <input 
        type="checkbox"
        className="border self-start"/>
        <h1 className="-mt-1 ml-1">Remember me</h1>
      </div>
      <div className="flex justify-between">
      <Button type="submit" 
    >LOG IN</Button>
      <Button type="button" 
       onClick={resetForm}>Reset</Button>
      </div>
     
      </div>
    </form>

   </div>
  );
}

export default Login;