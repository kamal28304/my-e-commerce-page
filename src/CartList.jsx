import React,{useState} from "react"
import CartRow from "./CartRow"
//import CartHeader from "./CartHeader"
import CartFooter from "./CartFooter"


export const contextData=React.createContext();

function CartList({ products,Cart,updateCart}) {

  
  return (
    <div className="mt-16">
      <div className="hidden sm:block">
        { /*<CartHeader />*/}
      </div>

      {products.map(function(items) {
return <CartRow 
         {...items} 
         key={items.id}
         quantity= {Cart[items.id]} 
         cart={Cart}
        productId={items.id}
        updateCart={updateCart}
        />
      })

      }

<contextData.Provider value={updateCart,Cart} >
      <CartFooter />
  </contextData.Provider>
      
    </div>
  );
}

export default CartList;