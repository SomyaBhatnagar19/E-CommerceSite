// import React, { useContext } from "react";
// import { Card, Container, Button, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// // import axios from "axios";
// import { AuthContext } from "../Store/AuthContextProvider";

// const ProductList = () => {
//   const AuthCtx = useContext(AuthContext);
//   const productsArr = [
//     {
//       id: 1,
//       title: "Colors",
//       price: 100,
//       imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     },
//     {
//       id: 2,
//       title: "Black and white Colors",
//       price: 50,
//       imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     },
//     {
//       id: 3,
//       title: "Yellow and Black Colors",
//       price: 70,
//       imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     },
//     {
//       id: 4,
//       title: "Blue Color",
//       price: 100,
//       imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
//     },
//   ];

//   return (
//     <Container>
//       <h4 style={{ textAlign: "center", margin: "1rem" }}>MUSIC</h4>
//       <Row style={{ marginTop: "1rem" }}>
//         {productsArr.map((item) => (
//           <Col sm={4} key={item.id}>
//             <Card>
//               <Container style={{ padding: "0.3rem" }}>
//                 <Card.Img src={item.imageUrl} alt={item.title} />
//                 <Card.Title>{item.title}</Card.Title>
//                 <Card.Body style={{ textAlign: "left" }}>
//                   Rs. {item.price}
//                 </Card.Body>
//                 <Link to={`/products/${item.id}`}>
//                   <Button style={{ backgroundColor: "purple", float: "left", marginLeft: "0.5rem" }}>View Details</Button>
//                 </Link>
//                 <Button style={{ float: "right", marginRight: "0.5rem" }} onClick={() => AuthCtx.addToCart(item)}>
//                   Add to Cart
//                 </Button>
//               </Container>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default ProductList;
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { AuthContext } from "../Store/AuthContextProvider";
import { Alert } from "react-bootstrap";
import Footer from "../Layout/Footer";
const Products = () => {
  const authCtx = useContext(AuthContext);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const productsArr = [
    {
      id: 1,
      title: 'Album 1',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      id: 2,
      title: 'Album 2',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      id: 3,
      title: 'Album 3',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      id: 4,
      title: 'Album 4',
      price: 80,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
    {
      id: 5,
      title: 'Album 5',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      id: 6,
      title: 'Album 6',
      price: 75,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    }
  ];

  return (
    <>
    <Container>
    <h4 style={{ textAlign: "center", margin: "1rem" }}>MUSIC</h4>
    {showSuccessMessage && (
      <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
        Your Item has been added to the cart successfully!
      </Alert>
    )}
    <Row className="g-4">
      {productsArr.map((item) => (
        <Col sm={4} key={item.id}>
          <Card>
            <Container style={{ padding: "0.3rem" }}>
              <Card.Img src={item.imageUrl} alt={item.title} />
              <Card.Title>{item.title}</Card.Title>
              <Card.Body style={{ textAlign: "left" }}>
                Rs. {item.price}
              </Card.Body>
              <Link to={`/products/${item.id}`}>
                <Button style={{ backgroundColor: "purple", float: "left", marginLeft: "0.5rem" }}>View Details</Button>
              </Link>
              <Button style={{ float: "right", marginRight: "0.5rem" }} onClick={() => {
                  authCtx.addToCart(item);
                  setShowSuccessMessage(true);
                }}>
                Add to Cart
              </Button>
            </Container>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  <div style={{marginTop: '1rem'}}>
                <Footer/>
  </div>
  </>
     );
};

export default Products;
