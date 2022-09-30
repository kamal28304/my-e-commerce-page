import React from "react";
import { withFormik } from "formik";
import * as yup from "yup";
import Button from "./Button";
import { Link } from "react-router-dom"
import Input from "./Input"


function callLoginApi(values) {
  console.log("sending data", values.email, values.password)
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
})

const initialValues = {
  email: "",
  password: "",
}

export function Login({handleSubmit,values,touched,errors,handleBlur ,handleChange}) {
  return (
    <div className="bg-gray-300 p-2 h-screen overflow-scroll flex flex-col justify-center items-center ">

      <form onSubmit={handleSubmit}

        className="bg-white p-4 shadow-md w-96">
        <h1 className="text-2xl font-bold my-3 text-gray-700">Login</h1>
        <div className="border border-gray-300 rounded-md p-5 flex flex-col">

          <Input
            values={values.email}
            touched={touched.email}
            error={errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
            label="email address"
            placeholder="email address"
            name="email"
            id="email"
            type="email"
            autoComplete="email"
            required
            className=" w-full rounded-b-none"
          />

          <Input
            values={values.password}
            touched={touched.password}
            error={errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
            label="password"
            placeholder="Password"
            name="password"
            id="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full rounded-t-none"
          />

          <div className="flex my-3">
            <input
              type="checkbox"
              className="border self-start" />
            <h1 className="-mt-1 ml-1">Remember me</h1>
          </div>
          <div className="flex justify-between">
            <Button type="submit">LOG IN</Button>
          </div>

        </div>

      </form>

      <Link to="/SignUp"
        className="text-blue-500">don't have an account? SIGNUP</Link>

      <Link to="/ForgotPassword"
        className="text-blue-500">Forgot Password?</Link>
    </div>
  );
}

const myHOC = withFormik({ validationSchema: schema, initialValues: initialValues, onSubmit: callLoginApi })

const easyLogin = myHOC(Login)
export default easyLogin;