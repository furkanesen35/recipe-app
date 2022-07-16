import styled from 'styled-components';
import Flex from "../../components/globalStyles/Flex"
import {Link} from "react-router-dom"

const Nav = styled(Flex)`
 padding: 1rem 2rem;
 background: ${({theme}) => theme.colors.navBgcolor};
`;
export const Logo = styled(Link)`
 padding: 1rem 0rem;
 background: ${({theme}) => theme.colors.logoColor};
 text-decoration: none;
 font-weight: 800;
 font-size: 2rem;
 span {
  font-weight: 400;
  color: ${({theme}) => theme.colors.mainColor}
 }
`;
export const Menu = styled(Flex)`
`;
export const MenuLink = styled(Flex)`
 text-align: center;
 padding: 1rem 2rem;
 cursor: pointer;
 text-decoration: none;
 color: ${({theme}) => theme.colors.linkColor};
 transition: all 0.3s ease-in;
 &:hover {
  color: ${({theme}) => theme.colors.mainColor};
  font-weight: bold;
 }
`;

export default Nav;