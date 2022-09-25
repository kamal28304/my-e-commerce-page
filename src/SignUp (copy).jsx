import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./Input";
import Button from "./Button";


function SignUp() {

  function callLoginApi(values) {
    console.log("sending data from signUp", values.email, values.password)
  }

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup.string().min(8).required(),
    FirstName: yup.string().required(),
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
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      FirstName: "",
      LastName: "",
      confirmPassword: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
  });

  return (
    <div className="bg-gray-300 p-2 h-screen overflow-scroll flex flex-col justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 shadow-md w-96">
        <h1 className="text-2xl font-bold my-3 text-gray-700">SIGNUP</h1>
        <div className="border border-gray-300 rounded-md p-5 flex flex-col">

          <Input
            label="Last Name"
            placeholder="First Name"
            value={values.FirstName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="FirstName"
            className="border border-gray-200 p-2 my-2"
            id="FirstName"
            type="text"
            touched={touched.FirstName}
            error={errors.FirstName}
             className="w-full rounded-b-none"
          />


          <Input
            label="Last Name"
            placeholder="Last Name"
            value={values.LastName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="LastName"
            className="border border-gray-200 p-2 my-2"
            id="LastName"
            type="text"
            touched={touched.LastName}
            error={errors.LastName}
             className="w-full rounded-t-none rounded-b-none"
          />



          <Input
            label="email address"
            placeholder="email address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            className="border border-gray-200 p-2 my-2"
            id="email"
            type="email"
            touched={touched.email}
            error={errors.email}
            className="w-full rounded-t-none rounded-b-none"
          />



          <Input
            label="Password"
            placeholder="Password"
            value={values.password}
            name="password"
            className="border border-gray-200 p-2 my-2 focus:border-indigo-500"
            onChange={handleChange}
            onBlur={handleBlur}
            id="password"
            type="password"
            touched={touched.password}
            error={errors.password}
            className=" w-full rounded-t-none rounded-b-none "
          />



          <Input
            label="Confirm Password"
            placeholder="re-enter Password"
            value={values.confirmPassword}
            name="confirmPassword"
            className="border border-gray-200 p-2 my-2 focus:border-indigo-500"
            onChange={handleChange}
            onBlur={handleBlur}
            id="confirmPassword"
            type="password"
            touched={touched.confirmPassword}
            error={errors.confirmPassword}
             className="w-full rounded-t-none"
          />


          <div className="flex my-3">
            <input
              type="checkbox"
              className="border self-start" />
            <h1 className="-mt-1 ml-1">Remember me</h1>
          </div>
          <div className="flex justify-between">
            <Button type="submit"
              disabled={!isValid}
            >Sign Up</Button>
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

export default SignUp;