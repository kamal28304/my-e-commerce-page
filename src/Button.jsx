import React, { memo } from "react"

function Button({ className, ...props }) {
  return (

    <div>
      <button {...props}
        className={"px-4 py-2 bg-red-400 rounded-md text-white hover:bg-red-700 " + className}>{props.children}
      </button>
    </div>
  );
}

export default memo(Button);