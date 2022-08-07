import React, { useState } from 'react'
import {Link} from "react-router-dom"
import Nav, {Logo,MenuLink,Menu,Hamburger } from "./Navbar.style"
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);
 return (
  <Nav justify="space-between" wrap="wrap">
   <Logo to="/">
    <i>Find Your Flavor</i>
   </Logo>
   <Hamburger onClick={()=>setIsOpen(!isOpen)}>
    <GiHamburgerMenu/>
   </Hamburger>
   <Menu isOpen={isOpen} onClick={()=>setIsOpen(false)}>
    <MenuLink to="/">Home</MenuLink>
    <MenuLink to="/about">About</MenuLink>
    <MenuLink to="/login" onClick={()=>sessionStorage.clear()}>Logout</MenuLink>
    <MenuLink to="/register">Register</MenuLink>
   </Menu>
  </Nav>
 )
}

export default Navbar