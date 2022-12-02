
import React,{memo} from "react"
import Product from "./Product"
//import Links from "./Links"

function ProductList({ products }) {
  return (
    <div className="p-2">
      <div className="sm:grid grid-cols-3 gap-3 space-y-2 sm:space-y-0 ">
        {products.map(function(items) {
          return (<Product{...items}
    key={items.title} />);
        }
        )}
        <span className="w-72"></span>
        <span className="w-72"></span>
        <span className="w-72"></span>
        <span className="w-72"></span>

      </div>
    </div>
  );
}
export default memo(ProductList);
