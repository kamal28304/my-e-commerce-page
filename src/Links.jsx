import React, { useState } from "react";
import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="flex gap-3 mt-5">
      <Link className="p-3 hover:bg-red-500 bg-red-200 text-gray-500 border rounded-sm" to={"/"}>1</Link>
      <Link className="p-3 hover:bg-red-500 bg-red-200 border border-red-500 rounded-sm" to={"/NextItemsPage"}>2</Link>
      <Link className="p-3 hover:bg-red-500 bg-red-200 border border-red-500 rounded-sm" to={"/LastFourtyItemsPage"}>3</Link>

    </div>
  );
}
export default Links;