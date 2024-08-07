import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";
import "../App.css"; // Import your global CSS file

interface Props {
  pageVis: string;
  setPageVis: React.Dispatch<React.SetStateAction<string>>;
  githubLink: string;
  googleDriveLink: string;
  linkedinLink: string;
  emailLink: string;
}

function NavBar({
  setPageVis,
  githubLink,
  googleDriveLink,
  linkedinLink,
  emailLink,
}: Props) {
  const [activeLink, setActiveLink] = useState<string>("HOME");

  const handleLinkClick = (link: string) => {
    setPageVis(link);
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-links">
            <Nav.Link
              href="#home"
              className={`nav-link-custom ${
                activeLink === "HOME" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("HOME")}
            >
              Ming Liu
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`nav-link-custom ${
                activeLink === "PROJECT" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("PROJECT")}
            >
              Projects
            </Nav.Link>

            <Nav.Link
              href="#resume"
              className={`nav-link-custom ${
                activeLink === "RESUME" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("RESUME")}
            >
              Resume
            </Nav.Link>
            <NavDropdown
              title="Socials"
              id="basic-nav-dropdown"
              className="nav-dropdown-custom"
            >
              <NavDropdown.Item href={`mailto:${emailLink}`}>
                Email
              </NavDropdown.Item>
              <NavDropdown.Item href={linkedinLink}>LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href={googleDriveLink}>
                Google Drive
              </NavDropdown.Item>
              <NavDropdown.Item href={githubLink}>GitHub</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                What else do I add
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
