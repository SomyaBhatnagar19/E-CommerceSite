import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Cart from '../Cart/Cart';
const Header = () => {
  return (
    <div>
      <Navbar className="bg-dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize: '3rem'}}>The Generics</Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Store">Store</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Cart />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
