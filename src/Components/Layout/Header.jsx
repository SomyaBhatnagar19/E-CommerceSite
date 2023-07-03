// import React from "react";
// import { Navbar, Nav, Container} from "react-bootstrap";
// import Cart from "../Cart/Cart";
// const Header = () => {
//   return (
//     <>
//       <Navbar
//         expand="lg"
//         style={{
//           backgroundColor: "#881498",
//           boxShadow: "0px 2px 12px #2d0733",
//         }}
//       >
//         <Container>
//           <Navbar.Brand style={{fontWeight: 'bold', color : 'white', fontSize: '3rem'}}>The Generics</Navbar.Brand>
//           {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
//           <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
//           <Nav className="me-auto" >
//             <Nav.Link href="#home" style={{fontWeight: 'bold', color : 'white'}}>Home</Nav.Link>
//             <Cart />
//             </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default Header;
// import React, {useContext} from "react";
// import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import { CartContext } from "../../Context/CartContext";
// const Header = () => {
//   const { openCart } = useContext(CartContext)
//   return(
//     <Navbar bg="dark" variant="dark" expand="lg" style={{boxShadow: '0px 2px 9px black'}}>
//       <Container>
//       <Navbar.Brand href="#home" style={{fontSize: '3rem'}}>The Generics</Navbar.Brand>
//       <Nav className="ml-auto" style={{fontSize: '1.2rem'}}>
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#about">About</Nav.Link>
//       <Button onClick={openCart}>Cart</Button>
//       </Nav>
//       </Container>
      
//   </Navbar>
//   )
// }
// export default Header;

// Header.js
import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";

const Header = () => {
  const { openCart } = useContext(CartContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ boxShadow: '0px 2px 9px black' }}>
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: '3rem' }}>The Generics</Navbar.Brand>
        <Nav className="ml-auto" style={{ fontSize: '1.2rem' }}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Button onClick={openCart}>Cart</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
