import React,{memo} from "react"
import FormikHOC from "./FormikHOC"

 function Input({
  name,
  label,
  id,
  className,
  touched,
  error,
  ...rest
}) {
  let borderClass="hover:border-indigo-500"
  
  if(touched && error){
    borderClass= "border-red-500"
  }

  return (
    <div>
      <label
        className="sr-only">
        {label}
      </label>
      <input
        className={"border-2 p-3 rounded-md focus:outline-none " + className + " " + borderClass}
        id={id}
        {...rest}
      />
      {touched && error && <h1 className="text-red-500">{error}</h1>}

    </div>
  );
}

export const FormikInput = FormikHOC(Input)

export default memo(Input);
