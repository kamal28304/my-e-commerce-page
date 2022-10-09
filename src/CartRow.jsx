import React,{useState,useEffect} from "react"
import { ImCross } from "react-icons/im"
import Loading from "./Loading"



function CartRow({ 
  thumbnail, 
  title, 
  price,
  quantity,
  productId,
  cart,
  updateCart
}){
 const 
[localCart,setLocalCart]=useState(cart)
  const [loading , setLoading]=useState(false)

  useEffect(function() {
    setLocalCart(cart)
  },[cart])

  function handleRemove(event) {
    const productKey = event.currentTarget.getAttribute("productid");
    
    const newCart={...cart}
    delete newCart[productKey]
    updateCart(newCart);
    setLoading(true);
    
  }
  function handleChange(event) {
    const newValue= +event.target.value;
    const changedId= event.target.getAttribute("productid")
    
    const newLocalCart={...localCart,[changedId]:newValue}
    setLocalCart(newLocalCart)
    
  }
function updateMyCart(){
  updateCart(localCart)
}
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      {/* <div className="hidden sm:block">

        <div className="flex justify-between border border-gray-500 p-5">
          <div className="flex">

            <img className="w-16 h-16" src={thumbnail} />

            <h1 className="whitespace-normal">{title}</h1>
          </div>
          <div className="w-10 text-center">
            <h1>${price}</h1>
          </div>
          <div className="w-10 text-center">
            <input className="w-12 border border-gray-200"
value={quantity}
              
              type="number"
              />
          </div>
          <div className="w-10 text-center">
            <h1>subtotal</h1>
          </div>

        </div>
      </div>
     */ }

      <div className="">
        <div className="border border-gray-300 flex justify-end p-2">
          <button productid= {productId} onClick={handleRemove}>
          <ImCross className="text-3xl text-red-300" />
            </button>

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
          <input className="w-12 border border-gray-300"
            productid={productId}
            value={localCart[productId]}
            type="number"
            onChange={handleChange}
          />
        </div>
        <div className="border border-gray-300 flex justify-between p-2">
          <h1>Subtotal:</h1>
          <h1> ${price*quantity}</h1>
        </div>
      </div>
  <button className="px-3 py-1 bg-red-500"
    onClick={updateMyCart}
    >update product</button>
    </div>
  );
}

export default CartRow;