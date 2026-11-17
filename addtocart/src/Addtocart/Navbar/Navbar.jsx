import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = ({cartcount}) => {
  return (
    <div>
      <div className="navbar_container">
        <div className="container">
            <Link to="/product">Product</Link>
            <div className="cartcount">
            <Link to="/cart">Cart( {cartcount} )</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
