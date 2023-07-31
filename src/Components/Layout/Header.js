import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { useState } from "react";
import { AuthContext } from "../Store/AuthContextProvider";
import { Link } from "react-router-dom";
const Header = () => {
  const AuthCtx = useContext(AuthContext);
  const isLoggedIn = AuthCtx.isAuthenticated;
  const [expanded, setExpanded] = useState(false);
  const logoutHandler = () => {
    AuthCtx.logout();
    alert("User successfully logged out");
  };
  return (
    <div>
      <Navbar className="bg-dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/Home" style={{ fontSize: "3rem" }}>
            The Generics
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/Home">Home</Nav.Link>
              {/* {isLoggedIn && <Nav.Link href="/Store">Store</Nav.Link>} */}
              {isLoggedIn ? (
                <Nav.Link as={Link} to="/Store">
                  Store
                </Nav.Link>
              ) : (
                <Nav.Link
                  onClick={() =>
                    alert("Store is visible only to users who have logged in.")
                  }
                >
                  Store
                </Nav.Link>
              )}
              <Nav.Link href="/About">About</Nav.Link>
              {!isLoggedIn && <Nav.Link href="/Login">Sign Up/ Login</Nav.Link>}
              <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
              {isLoggedIn && <Button
                style={{
                  // borderRadius: "25px", 
                  // To make the button curved
                  backgroundColor: "#f0ad4e", // A professional color (e.g., golden/orange)
                  padding: "8px 20px",
                  color: "white",
                  fontWeight: "bold",
                  border: "none",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // A subtle box shadow
                  width: expanded ? "auto" : "120px", // Adjust the width when collapsed
                  marginBottom: "0.5rem",
                }}
                onClick={logoutHandler} // Move the onClick event here
              >
                Logout
              </Button>}
            </Nav>
            <Cart />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
