import React, { useState } from "react"
import { ImCross } from "react-icons/im"
import Button from "./Button"
import Input from "./Input"
import Loading from "./Loading"



function CartRow({
  thumbnail,
  title,
  price,
  quantity,
  productId,
  cart,
  updateCart,
  onQuantityChange,

}) {

  const [loading, setLoading] = useState(false)

  function handleChange(event) {
    onQuantityChange(productId, +event.target.value)
  }

  function handleRemove(event) {
    const productKey = event.currentTarget.getAttribute("productid");
    const newCart = { ...cart }
    delete newCart[productKey]
    updateCart(newCart);
    setLoading(true);

  }
  if (loading) {
    return <Loading />
  }


  return (
    <>
      <div className="sm:hidden">
        <div className="border border-gray-300 flex justify-end p-2">
          <Button
            productid={productId}
            onClick={handleRemove}>
            <ImCross className="text-3xl text-red-300" /></Button>

        </div>
        <div className="border border-gray-300 p-2 flex justify-center">
          <img className="h-16 w-16" src={thumbnail} />
        </div>
        <div className="border border-gray-300 flex justify-between p-2">
          <h1>Product:</h1>
          <h1>{title}</h1>
        </div>
        <div className="border border-gray-300 flex justify-between p-2">
          <h1>Price:</h1>
          <h1>${price}</h1>
        </div>
        <div className="border border-gray-300 flex justify-between p-2">
          <h1>Quantity:</h1>
          <Input className="w-12 border border-gray-300"
            productid={productId}
            value={quantity}
            type="number"
            onChange={handleChange}
          />
        </div>
        <div className="border border-gray-300 flex justify-between p-2">
          <h1>Subtotal:</h1>
          <h1> ${price * quantity}</h1>
        </div>
      </div>


      {/* Responsive desktop view cart Row*/}
      <div className="hidden sm:block">
        <div className="flex items-center px-4 py-2 space-x-4 border border-gray-300 ">
          <span className="flex items-center w-10 h-10">
            <ImCross productid={productId} onClick={handleRemove} />
          </span>
          <div className="w-10 h-10">
            <img className="object-cover w-full h-full" src={thumbnail} />
          </div>
          <h3 className="grow">{title}</h3>
          <span className="w-20">${price}</span>
          <div className="w-32">
            <Input
              type="number"
              className="w-12 p-1 mx-2 border border-gray-300 rounded-md"
              productid={productId}
              value={quantity}
              onChange={handleChange}
            />
          </div>
          <span className="w-20">${price * quantity}</span>
        </div>
      </div>
    </>
  );
}

export default CartRow;