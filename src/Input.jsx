import React from "react"
import {useField} from "formik"

function Input({label,
                name,
                id,
                className,
               ...rest
               }) {
  const field=useField(name);
  const[data,meta]=field;
  const {value,onBlur,onChange}=data;
  const{touched,error}= meta;

  let borderClass="border-gray-200 focus:border-indigo-500"
  if (error && touched) {
    borderClass="border-red-500"
  }
  return(
    <div>
      <label htmlFor={id}
        className="sr-only">
      {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={"border-2 p-3 rounded-md focus:outline-none " + borderClass + " " + className}
        id={id}
        {...rest}
        />
      {touched && error && <h1 className="text-red-700">{error}*</h1>}
      </div>
  );
}

export default Input;
