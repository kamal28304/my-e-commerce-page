import React from "react";

function NoMatching({ children }) {
  return (
    <div className="h-screen">
      <div className="bg-red-500 text-white p-5 flex text-3xl justify-center items-center mt-5 ">{children}</div>
    </div>
  );
}
export default NoMatching;