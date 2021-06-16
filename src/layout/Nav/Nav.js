import React from 'react';
import { Navbar, NavItem } from './styles'

const Nav = () => {
  return (
    <>
      <Navbar>
        <NavItem>
          <span>Home</span>
        </NavItem>
        <NavItem>
          <span>About us</span>
        </NavItem>
        <NavItem>
          <span>Contact us</span>
        </NavItem>
        <NavItem>
          <span>Get Involved</span>
        </NavItem>
      </Navbar>
    </>
  )
}

export default Nav
