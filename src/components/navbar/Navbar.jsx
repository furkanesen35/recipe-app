import React,{useState} from 'react'
import NavbarStyle from "./Navbar.style"
import {Link} from "react-router-dom"
import Nav, {Logo, Menu, MenuLink, Hamburger} from "./Navbar.style"



const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false)
 return (
  <Nav justify="space-between" wrap="wrap">
   <Logo to="/">
    <i>{"<Clarusway/>"}</i>
    <span>Recipe</span>
   </Logo>
   <Hamburger onClick={() => setIsOpen(!isOpen , console.log(isOpen))}>
    <div>asd</div>
   </Hamburger>
   <Menu isOpen={isOpen} 
    // onClick={() => setIsOpen(false)} 
   >
    <MenuLink to={"/"}>Home</MenuLink>
    <MenuLink to={"about"}>About</MenuLink>
    <MenuLink to={"register"}>Register</MenuLink>
    <MenuLink to={"login"}>Logout</MenuLink>
   </Menu>
  </Nav>
 )
}

export default Navbar