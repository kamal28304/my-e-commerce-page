import React from "react"
import CartRow from "./CartRow"
import CartHeader from "./CartHeader"
import CartFooter from "./CartFooter"


function CartList({products},Quantity){
  return(
    <div className="mt-16">
      <div className="hidden sm:block">
      <CartHeader /> 
      </div>
      
      {products.map(function (items) {
     return  <CartRow{...items} key={items.title}/> 
      })
        
      }

      
      <CartFooter />
</div>
  );
}

export default CartList;