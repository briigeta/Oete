import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcon,
  Navitem,
  Navmenu,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Navlogo to="/">oète</Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <Navmenu>
            <Navitem>
              <NavLinks to="about">About Us</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="share">Share</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="start">Start</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </Navitem>
          </Navmenu>
          <NavBtn>
            <NavBtnLink to="/signin"> Sign In </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
