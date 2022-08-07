import styled from 'styled-components';
import Flex from '../globalStyles/Flex';
import {Link} from "react-router-dom"

const Nav = styled(Flex)`
 padding: 1rem 2rem;
 background: ${({ theme })=> theme.colors.navBgColor};
`;

export const Logo = styled(Link)`
 padding: 1rem 2rem;
 color: ${({ theme }) => theme.colors.logoColor};
 text-decoration: none;
 font-weight: 800;
 font-size: 1.5rem;
 span{
  font-weight: 400;
  color: ${({theme}) => theme.colors.mainColor};
 }
`
export const MenuLink = styled(Link)`
 text-align: center;
 padding: 1rem 2rem;
 cursor: pointer;
 color: ${({ theme }) => theme.colors.linkColor};
 text-decoration: none;
 transition: all 0.3s ease-in;
 &:hover{
  font-weight: bold;
  color: ${({theme}) => theme.colors.mainColor};
 }
`

export const Menu = styled(Flex)`
 @media (max-width: ${({theme}) => theme.screens.lg}){
  flex-direction: column;
  width: 100%;
  max-height: ${({isOpen})=> (isOpen ? "400px" : "0")};
  overflow: hidden;
 } 
`

export const Hamburger = styled.div`
 display: none;
 cursor: pointer;
 color: ${({theme}) => theme.colors.mainColor};
 @media (max-width: ${({theme}) => theme.screens.lg}){
  display: block;
 }
`

export default Nav;
