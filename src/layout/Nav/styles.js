import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const Navbar = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  height: 3rem;
  width: 100%;
  padding: 2px 0px;
  color: #ffffff;
  background-color: transparent;
  font-weight:500;
  z-index: 11;
`;

export const NavItem = styled.div`
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 25px;
  margin-left: 25px;
  margin-right: 25px;
  span {
    font-size: 15px !important;
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;
    &:before {
    background-color: rgb(249, 249, 249);
    border-radius: 0px 0px 4px 4px;
    bottom: -6px;
    content: "";
    height: 2px;
    left: 0px;
    opacity: 0;
    position: absolute;
    right: 0px;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    visibility: hidden;
    width: auto;
    }
  }
    &:hover {
      span:before {
      transform: scaleX(1);
    visibility: visible;
    opacity: 1 !important;
    }
  }
`;
