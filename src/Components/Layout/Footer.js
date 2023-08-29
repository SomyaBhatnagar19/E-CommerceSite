import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import instagram from '../Images/instagram.png';
import facebook from '../Images/facebook.png';
import linkedin from '../Images/linkedin.png';
import youtube from '../Images/youtube.png';
import "./Footer.css"; // Import the footer CSS

const Footer = () => {
  return (
    <footer className="footer">
      <Navbar  expand="md">
        <Container>
          {/* <Navbar.Toggle aria-controls="footer-nav" />
          <Navbar.Collapse id="footer-nav"> */}
            <Nav className="ms-auto">
              <Nav.Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" className="footer-icon" />
              </Nav.Link>
              <Nav.Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" className="footer-icon" />
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" className="footer-icon" />
              </Nav.Link>
              <Nav.Link
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="YouTube" className="footer-icon" />
              </Nav.Link>
            </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
      <p className="copyright">© 2023 The Generics. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
