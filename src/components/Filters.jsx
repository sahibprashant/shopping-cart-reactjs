import React, { useState } from 'react'
import Ratings from './Ratings'
import { cartContext } from '../context/Context';

const Filters = () => {

  const { filterState: { sort, fastDelivery, outOfStock, rating }, filterDispatch } = cartContext();

  return (
    <div className='filtersContainer'>
      <span>Filters</span>
      <div className='filterItem'>
        <input type='radio' name="asc_dsc" onChange={(e) => {
          filterDispatch({ type: 'FILTER_SORT', payload: 'lowToHigh' })
        }} checked={sort === 'lowToHigh'} />
        <label className='filterLabel'>Price: Low to High</label>
      </div>

      <div className='filterItem'>
        <input type='radio' name="asc_dsc" onChange={(e) => {
          filterDispatch({ type: 'FILTER_SORT', payload: 'highToLow' })
        }} checked={sort === 'highToLow'}/>
        <label className='filterLabel'>Price: High to Low</label>
      </div>

      <div className='filterItem'>
        <input type='checkbox' name="fastdeliver" onChange={(e) => {
          filterDispatch({ type: 'FILTER_DELIVERY', payload: e.target.checked })
        }} checked = {fastDelivery}></input>
        <label className='filterLabel'>Fast Delivery</label>
      </div>

      <div className='filterItem'>
        <input type='checkbox' name="outofstock" onChange={(e) => {
          filterDispatch({ type: 'FILTER_INCLUDE_OUT_OF_STOCK', payload: e.target.checked })
        }} checked = {outOfStock} />
        <label className='filterLabel'>Include Out of Stock</label>
      </div>
      <div className='filterItem'>
        <label>Ratings</label>
        <Ratings rating={rating} onClick={(i) => {
          filterDispatch({ type: 'FILTER_RATING', payload: i + 1 })
        }} />
      </div>
      <button className='clearFilter' onClick={() => {
        filterDispatch({ type: 'FILTER_CLEAR_FILTER' })
      }}>Clear Filters</button>
    </div>
  )
}

export default Filters