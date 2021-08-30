import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {menuData} from '../data/MenuData';

const Nav = styled.nav`
  height: 60px;
  width:100%;
  display: flex;
  justify-content:space-between;
  padding: 1rem 2rem;
  background: #000;
  z-index: 100;
  position: fixed;
`
const NavLink = css`
 color: #fff;
 display: flex;
 align-items:center;
`
const Logo = styled(Link)`
color:#fff;
`
const MenuBars = styled.i`
` 
const NavMenu = styled.div`
`
const NavMenuLinks = styled(Link)`
  color: #fff;
`;
const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">Florrie's Home</Logo>
            <MenuBars/>
            <NavMenu>
                {menuData.map((menu, index) =>(
                   <NavMenuLinks to={menu.link} key={index}>
                       {menu.title}
                   </NavMenuLinks>
                ))}
            </NavMenu>
        
        </Nav>
    )
}

export default Navbar
