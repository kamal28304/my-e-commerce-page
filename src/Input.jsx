import React from "react"
import FormikHOC from "./FormikHOC"

export function Input({label,
                name,
                id,
                onChange,
                onBlur,
                value,
                className,
               ...rest
          }) {
  
  
  
  return(
    <div>
      <label
        className="sr-only">
      {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={"border-2 p-3 rounded-md focus:outline-none " + className}
        id={id}
        {...rest}
        />
      
      </div>
  );
}

 const FormikInput=FormikHOC(Input)

export default FormikInput;
