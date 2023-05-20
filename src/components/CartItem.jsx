import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { cartContext } from '../context/Context'

const CartItem = ({ data }) => {

    const { dispatch } = cartContext();

    function handleUpdateQty(val) {
        dispatch({ type: 'UPDATE_CART', payload: { ...data, qty: val } })
    }

    function removeItem() {
        dispatch({ type: 'REMOVE_FROM_CART', payload: data })
    }

    return (
        <div className='cartItem'>
            <img src={data.img} alt={data.name} />
            <span style={{ fontFamily: 'medium', fontSize: '14px' }}>{data.name}</span>
            <span >Price: Rs. {data.price}/-</span>
            <div style={{ textAlign: 'center' }}>
                <span>Quantity</span>
                <br />
                <select value={data.qty} onChange={(e) => { handleUpdateQty(e.target.selectedIndex + 1) }}>
                    {
                        [...Array(data.inStock)].map((item, index) => {
                            return (<option key={index} value={index + 1}>{index + 1}</option>)
                        })
                    }
                </select>
            </div>
            <MdDelete onClick={removeItem} style={{ cursor: 'pointer' }} fontSize={22} />
        </div>
    )
}

export default CartItem

