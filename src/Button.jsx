import React from "react"

function Button(props) {
  return(
    <div>
      <button className="px-5 py-1 bg-red-500 rounded-md text-white disabled:bg-red-200">{props.children}</button>
      </div>
  );
}

export default Button;