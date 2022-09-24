import React from "react"

function Input({label,
                id,
                placeholder,
                value,
                onChange,
                onBlur,
                name,
                type,
                touched,
                error,
                autoComplete,
                required,
                className}) {
  return(
    <div>
      <label htmlFor={id}
        className="sr-only">
        
        {label}
      </label>
      <input 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        className={"border border-gray-200 p-3 rounded-md " + className}
        id={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        />
      {touched && error && <h1 className="text-red-700">{error}*</h1>}
      </div>
  );
}

export default Input;
