import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Navbar className="bg-dark" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand href="#home">The Generics</Navbar.Brand>
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#cart">Cart</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;