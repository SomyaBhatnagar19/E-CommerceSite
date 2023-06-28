import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#881498",
          boxShadow: "0px 2px 12px #2d0733",
        }}
      >
        <Container>
          <Navbar.Brand style={{fontWeight: 'bold', color : 'white'}}>The Generics</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{fontWeight: 'bold', color : 'white'}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{fontWeight: 'bold', color : 'white'}}>Link</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
