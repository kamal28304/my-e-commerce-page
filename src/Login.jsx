import React from "react";
import {useFormik} from "formik";
import * as yup from "yup";
import Button from "./Button";
import { Link } from "react-router-dom"



function Login() {

function callLoginApi(values) { 
    console.log("sending data",values.email,values.password)
    }                     
  
const schema = yup.object().shape({
email: yup.string().email().required(),
password: yup.string().min(8).required(),
})
  
const {
  handleSubmit,
  values,
  handleChange,
  resetForm,
  errors,
  touched,
  handleBlur,
  isValid,
  dirty,
}=useFormik({
  initialValues:{
    email:"",
    password:"",
  },
  onSubmit:callLoginApi,
  validationSchema: schema,
});

  return(
    <div className="bg-gray-300 p-2 h-screen flex flex-col justify-center items-center ">
    <form 
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow-md w-96">
      <h1 className="text-2xl font-bold my-3 text-gray-700">Login</h1>
    <div className="border border-gray-300 rounded-md p-5 flex flex-col">
      <label htmlFor="email">
        
      Username or email address
      </label>
      <input 
        placeholder="email address"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        name="email"
        className="border border-gray-200 p-2"
        id="email"
        type="email"
        />
      {touched.email && errors.email && <h1 className="text-red-700">{errors.email}*</h1>}
      
      <label htmlFor="password"
        className="mt-3">
      Password
      </label>
      <input 
        placeholder="Password"
        value={values.password}
        name="password"
      className="border border-gray-200  p-2"
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        type="password"
      
        />
     {touched.password && errors.password && (<h1 className="text-red-700">{errors.password}*</h1>)}
      <div className="flex my-3">
      <input 
        type="checkbox"
        className="border self-start"/>
        <h1 className="-mt-1 ml-1">Remember me</h1>
      </div>
      <div className="flex justify-between">
      <Button type="submit"
        disabled={!!isValid}
    >LOG IN</Button>
      <button
        className="px-5 py-1 bg-red-500 text-white rounded-md"
    type="button"
    onClick={resetForm}>Reset</button>
      </div>
     
      </div>
      
    </form>
  <Link to="/SignUp"
        className="text-blue-500">don't have an account? SIGNUP</Link>

      
      </div>
  );
}

export default Login;