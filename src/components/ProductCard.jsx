import Ratings from './Ratings'
import { cartContext } from '../context/Context'

const ProductCard = ({ data }) => {
  const { state: { cart }, dispatch } = cartContext();

  function handleAdd() {
    dispatch({ type: "ADD_TO_CART", payload: data })
  }

  function handleRemove() {
    dispatch({ type: "REMOVE_FROM_CART", payload: data })
  }

  return (
    <div className='productCard'>
      <img src={data.img} alt={data.name} />
      <div className='prod-details'>
        <span className='name'>{data.name}</span>
        <span className='price'>Rs. {data.price}</span>
        {
          data.fastDelivery ?
            <span>Fast Delivery</span>
            : <span>5 Days Delivery</span>
        }
        <Ratings rating={data.rating} onClick={() => { }} />
        {
          data.inStock == 0 ?
            <button className='out-of-stock' disabled>Out of Stock</button>
            : (
              cart.some((items) => items.id === data.id) ? <button className='rm-cart-btn' onClick={handleRemove}>Remove from Cart</button>
                : <button className='add-cart-btn' onClick={handleAdd}>Add to Cart</button>
            )
        }
      </div>
    </div>
  )
}

export default ProductCard