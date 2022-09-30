import React, { memo } from "react"

function Button({ className, ...props }) {
  return (

    <div>
      <button {...props}
        className={"px-5 py-1 bg-red-500 rounded-md text-white disabled:bg-red-100 " + className}>{props.children}
      </button>
    </div>
  );
}

export default memo(Button);