import React from 'react'
import {Link} from "react-router-dom"
import Nav, {} from "./Navbar.style"

const Navbar = () => {
 return (
  <nav>
   <div>
    <i>Find Your Flavor</i>
   </div>
   <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
   </div>
  </nav>
 )
}

export default Navbar