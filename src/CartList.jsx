import React from "react"
import CartRow from "./CartRow"
import CartHeader from "./CartHeader"
import CartFooter from "./CartFooter"


function CartList({carts}){
  return(
    <div className="mt-16">
      <div className="hidden sm:block">
      <CartHeader /> 
      </div>
     {carts.map(function(items){
return <CartRow {...items}/>
  })
      } 
      <CartFooter />
</div>
  );
}

export default CartList;