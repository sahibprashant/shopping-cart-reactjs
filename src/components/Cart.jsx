import React, { useEffect, useState } from 'react'
import { cartContext } from '../context/Context'
import CartItem from './CartItem';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { state: { cart } } = cartContext();

  useEffect(() => {
    setTotalPrice(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
  }, [cart])

  if (cart.length === 0) {
    return (<div className='emptyCart'>
      <span>
        Oops! Cart is Empty.
      </span>
    </div>)
  }
  
  return (
    <div className='cartContainer'>
      <div className='cartItemContainer'>
        {
          cart.map((item) => {
            return (
              <CartItem key={item.id} data={item} />
            )
          })
        }
      </div>

      <div className='checkout'>
        <span style={{ fontFamily: 'bold', fontSize: '16px' }}>Buying {cart.length} Items</span>
        <div>
          <span>Total Price:  </span>
          <span>Rs. {totalPrice}/-</span>
        </div>
        <button className='checkoutbtn'>Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default Cart