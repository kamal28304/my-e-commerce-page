import React, { useState, useEffect } from "react"
import CartRow from "./CartRow"
import CartFooter from "./CartFooter"

function CartList({ products, cart, updateCart }) {
  const
    [localCart, setLocalCart] = useState(cart)

  useEffect(function() {
    setLocalCart(cart)
  }, [cart])

  function handleChange(productId, newValue) {
    const newLocalCart = { ...localCart, [productId]: newValue }
    setLocalCart(newLocalCart)
  }
  function updateMyCart(){
    updateCart(localCart)
  }
  return (
    <div>
      <div className="hidden sm:block">
        <div className="flex px-4 py-2 space-x-4 bg-gray-100 border border-gray-300">
          <span className="ml-28 grow">Product</span>
          <span className="w-20">Price</span>
          <span className="w-32">Quantity</span>
          <span className="w-20">Subtotal</span>
        </div>
      </div>

      <div>
        {products.map(function(items) {
          return <CartRow
            {...items}
            key={items.id}
            quantity={localCart[items.id]}
            cart={cart}
            productId={items.id}
            updateCart={updateCart}
            onQuantityChange={handleChange}
          />
        })}
        <CartFooter updateCart={updateMyCart} />
      </div>
    </div>
  );
}

export default CartList;