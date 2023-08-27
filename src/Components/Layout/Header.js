// import React, { useContext } from "react";
// import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import Cart from "../Cart/Cart";
// import { useState } from "react";
// import { AuthContext } from "../Store/AuthContextProvider";
// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const AuthCtx = useContext(AuthContext);
//   const isLoggedIn = !!AuthCtx.token;
//   const [expanded, setExpanded] = useState(false);
//   const navigate = useNavigate();

//   const logoutHandler = () => {
//     AuthCtx.logoutHandler();
//     alert("User successfully logged out");
//     navigate("/Login");
//   };

//   const handleStoreClick = () => {
//     if (!isLoggedIn) {
//       alert("Store is visible only to users who have logged in.");
//       navigate("/Login");
//     }
//   };

//   return (
//     <div>
//       <Navbar className="bg-dark" expand="lg" variant="dark">
//         <Container>
//           <Navbar.Brand href="/Home" style={{ fontSize: "3rem" }}>
//             The Generics
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="justify-content-end flex-grow-1 pe-3">
//               <Nav.Link href="/Home">Home</Nav.Link>
//               {isLoggedIn && (
//                 <Nav.Link as={Link} to="/Store" onClick={handleStoreClick}>
//                   Store
//                 </Nav.Link>
//               )}
//               <Nav.Link href="/About">About</Nav.Link>
//               {!isLoggedIn && <Nav.Link href="/Login">Sign Up/ Login</Nav.Link>}
//               <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
//               {isLoggedIn && <Nav.Link href="Login">
//               <Button onClick={AuthCtx.logoutHandler} 
//                   style={{
//                     // borderRadius: "25px",
//                     // To make the button curved
//                     backgroundColor: "#f0ad4e",
//                     padding: "8px 20px",
//                     color: "white",
//                     fontWeight: "bold",
//                     border: "none",
//                     boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", 
//                     width: expanded ? "auto" : "120px", 
//                     marginBottom: "0.5rem",
//                   }} className="m-2 header-button">
//                LogOut
//               </Button>
      
//               </Nav.Link>}
//             </Nav>
//             <Button onClick={AuthCtx.cartDisplayHandler} >Cart</Button>
//           </Navbar.Collapse>
//         </Container>
//         {AuthCtx.cartToggle && (
//         <div className="overlay-cart-container">
//           <Cart/>
//         </div>
//       )}
//       </Navbar>
//     </div>
//   );
// };

// export default Header;


import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { AuthContext } from "../Store/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const AuthCtx = useContext(AuthContext);
  const isLoggedIn = !!AuthCtx.token;
  const navigate = useNavigate();

  const handleStoreClick = () => {
    if (!isLoggedIn) {
      alert("Store is visible only to users who have logged in.");
      navigate("/Login");
    }
  };

  const logoutHandler = () => {
    AuthCtx.logoutHandler();
    alert("User successfully logged out");
    navigate("/Login");
  };

  return (
    <div>
      <Navbar className="bg-dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/Home" style={{ fontSize: "3rem" }}>
            The Generics
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/Home">Home</Nav.Link>
              {!isLoggedIn && (
                <Nav.Link as={Link} to="/Store" onClick={handleStoreClick}>
                  Store
                </Nav.Link>
              )}
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              {!isLoggedIn && <Nav.Link as={Link} to="/Login">Sign Up/ Login</Nav.Link>}
              <Nav.Link as={Link} to="/ContactUs">Contact Us</Nav.Link>
              
              {isLoggedIn && (
                <Button
                  onClick={logoutHandler}
                  style={{
                    backgroundColor: "#f0ad4e",
                    padding: "8px 20px",
                    color: "white",
                    fontWeight: "bold",
                    border: "none",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    width: "120px",
                    marginBottom: "0.5rem",
                  }}
                  className="m-2 header-button"
                >
                  LogOut
                </Button>
              )}
            </Nav>
            <Button onClick={AuthCtx.cartDisplayHandler}>Cart</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {AuthCtx.cartToggle && (
        <div className="overlay-cart-container">
          <Cart/>
        </div>
      )}
    </div>
  );
};

export default Header;
