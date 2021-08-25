import React from 'react'
import styled from 'styled-components';

const Nav = styled.nav`
  height: 60px;
  background: red;
`

const Navbar = () => {
    return (
        <Nav>
            <Logo>Florrie's Home</Logo>
            <MenuBars/>
            <NavMenu></NavMenu>
            <h1>Navbar</h1>
        </Nav>
    )
}

export default Navbar
