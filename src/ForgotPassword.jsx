import React from "react";
import {useFormik} from "formik";
import * as yup from "yup";
import Button from "./Button";
import Input from "./Input"


function ForgotPassword() {

function callLoginApi(values) { 
    console.log("sending data",values.email,values.ResetPassword)
    }                     
  
const schema = yup.object().shape({
email: yup.string().email().required(),
ResetPassword: yup.string().min(8).required(),
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
    ResetPassword:"",
  },
  onSubmit:callLoginApi,
  validationSchema: schema,
});

  return(
    <div className="bg-gray-300 p-2 h-screen flex flex-col justify-center items-center overflow-scroll">
    <form 
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow-md w-96">
      <h1 className="text-2xl font-bold my-3 text-gray-700">Reset Password</h1>
    <div className="border border-gray-300 rounded-md p-5 flex flex-col">
      
      <Input 
        label="Email"
        placeholder="email address"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        name="email"
        className="border border-gray-200 p-2"
        id="email"
        type="email"
        touched={touched.email}
        error={errors.email}
         className="w-full rounded-b-none"
        />
     
      
      
      <Input 
        label="Password"
        placeholder="Reset Password"
        value={values.ResetPassword}
        name="ResetPassword"
      className="border border-gray-200  p-2"
        onChange={handleChange}
        onBlur={handleBlur}
        id="ResetPassword"
        type="password"
        touched={touched.ResetPassword}
        error={errors.ResetPassword}
         className="w-full rounded-t-none"
      
        />
    
      
      <div className="flex justify-between my-2">
      <Button type="submit"
        disabled={!!isValid}
    >Reset Pasword</Button>
      <button
        className="px-5 py-1 bg-red-500 text-white rounded-md"
    type="button"
    onClick={resetForm}>Reset</button>
      </div>
     
      </div>
      
    </form>
  

      
      </div>
  );
}

export default ForgotPassword;