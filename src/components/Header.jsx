import React, { useContext, useEffect, useState } from "react";
import { BiSearchAlt2 } from 'react-icons/bi'
import { cartContext } from "../context/Context";
import { Link } from "react-router-dom";

const Header = () => {

  const { state: { cart }, filterState: { searchQuery }, filterDispatch } = cartContext();
  const [searchInput, setSearchInput] = useState(searchQuery);
  
  useEffect(() => {
    setSearchInput(searchQuery)
  }, [searchQuery])

  return (
    <div className="headerContainer">
      <Link to="/">
        <span style={{ cursor: 'pointer', color: 'white' }}>Shopping Cart</span>
      </Link>
      <div className="search">
        <input className="searchbar" type="search" placeholder="Search Products"
          value={searchInput}
          onInput={(e) => {
            filterDispatch({ type: 'FILTER_SEARCH', payload: e.target.value })
          }} />
      </div>
      <Link to="/cart">
        <button className="my-cart-btn">MyCart{cart.length !== 0 ? ` (${cart.length})` : ''}</button>
      </Link>
    </div>
  )
};

export default Header;
