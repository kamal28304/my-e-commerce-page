import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Button from "./Button";
import { Link } from "react-router-dom"
import Input from "./Input"




function SignUp() {

  function callLoginApi(values) {
    console.log("sending data", values.email, values.password)
  }

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    ConfirmPassword: yup.string().min(8).required(),
    FullName: yup.string().required(),

  })

  const initialValues = {
    email: "",
    password: "",
    FirstName: "",
    ConfirmPassword: "",
  }
  return (
    <div className="bg-gray-300 p-2 h-screen overflow-scroll flex flex-col justify-center items-center ">
      <Formik
        initialValues={initialValues}
        onSubmit={callLoginApi}
        validationSchema={schema}
        validateOnMount
      >
        <Form

          className="bg-white p-4 shadow-md w-96">
          <h1 className="text-2xl font-bold my-3 text-gray-700">SIGNUP</h1>
          <div className="border border-gray-300 rounded-md p-5 flex flex-col">

            <Input
              label="Full Name"
              placeholder="Full Name"
              name="FullName"
              id="FullName"
              type="text"
              required
              className="w-full rounded-b-none "
            />



            <Input
              label="email address"
              placeholder="email address"
              name="email"
              id="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-b-none rounded-t-none"
            />

            <Input
              label="password"
              placeholder="Password"
              name="password"
              id="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full rounded-t-none rounded-b-none"
            />

            <Input
              label="Confirm password"
              placeholder="re-enter Password"
              name="ConfirmPassword"
              id="ConfirmPassword"
              type="password"
              autoComplete="current-password"
              required
              className=" w-full rounded-t-none"
            />

            <div className="flex my-3">
              <input
                type="checkbox"
                className="border self-start" />
              <h1 className="-mt-1 ml-1">Remember me</h1>
            </div>
            <div className="flex justify-between">
              <Button type="submit"

              >SignUp</Button>
            </div>

          </div>

        </Form>
      </Formik>
      <Link to="/Login"
        className="text-blue-500">Already have an account? Login</Link>


    </div>
  );
}

export default SignUp;