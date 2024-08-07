import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGoogleDrive,
  FaGithub,
} from "react-icons/fa";
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
            <div className="nav-icons">
              <a href={`mailto:${emailLink}`} className="nav-icon">
                <FaEnvelope />
              </a>
              <a href={linkedinLink} className="nav-icon">
                <FaLinkedin />
              </a>
              <a href={googleDriveLink} className="nav-icon">
                <FaGoogleDrive />
              </a>
              <a href={githubLink} className="nav-icon">
                <FaGithub />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
