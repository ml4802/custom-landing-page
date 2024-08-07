import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";
import "../App.css"; // Import your global CSS file

// Passing all the state hooks and states into the CSS
interface Props {
  homeState: boolean;
  homeHook: React.Dispatch<React.SetStateAction<boolean>>;
  projectState: boolean;
  projectHook: React.Dispatch<React.SetStateAction<boolean>>;
  resumeState: boolean;
  resumeHook: React.Dispatch<React.SetStateAction<boolean>>;
}

//Idea is to toggle the state everytime they click
//const toggleHookOn =
// (aState: boolean, aHook: React.Dispatch<React.SetStateAction<boolean>>) =>
// () => {

// aHook(!aState);
// };

function NavBar({
  homeState,
  homeHook,
  projectState,
  projectHook,
  resumeState,
  resumeHook,
}: Props) {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          Ming Liu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-links">
            <Nav.Link
              href="#home"
              className="nav-link-custom"
              onClick={() => {
                homeHook(true);
                projectHook(false);
                resumeHook(false);
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className="nav-link-custom"
              onClick={() => {
                homeHook(false);
                projectHook(true);
                resumeHook(false);
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className="nav-link-custom"
              onClick={() => {
                homeHook(false);
                projectHook(false);
                resumeHook(true);
              }}
            >
              Resume
            </Nav.Link>
            <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              className="nav-dropdown-custom"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
