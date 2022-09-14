import React from "react"
import CartRow from "./CartRow"
import CartHeader from "./CartHeader"
import CartFooter from "./CartFooter"


function CartList({carts}){
  return(
    <div className="mt-16">
     <CartHeader /> {carts.map(function(items){
return <CartRow {...items}/>
  })
      } 
      <CartFooter />
</div>
  );
}

export default CartList;