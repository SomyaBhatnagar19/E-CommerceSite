// import React, { useContext } from "react";
// import { Card, Container, Button, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { CartContext } from "../Cart/CartContext";

// const ProductList = () => {
//   const { cartItems, setCartItems } = useContext(CartContext);

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
//       id:4,
//       title: "Blue Color",
//       price: 100,
//       imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
//     },
//   ];

//   const addToCart = (item) => {
//     const existingProduct = cartItems.find((product) => product.title === item.title);
    
//     if (existingProduct) {
//       const updatedCartItems = cartItems.map((product) => {
//         if (product.title === item.title) {
//           return { ...product, quantity: product.quantity + 1 };
//         }
//         return product;
//       });
//       setCartItems(updatedCartItems);
//     } else {
//       setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     }
//   };

//   return (
//     <Container>
//       <h4 style={{ textAlign: "center", margin: "1rem" }}>MUSIC</h4>
//       <Row style={{ marginTop: "1rem" }}>
//         {productsArr.map((item, id) => (
//           <Col sm={4} key={id}>
//             <Card>
//               <Container style={{ padding: "0.3rem" }}>
//                 <Card.Img src={item.imageUrl} alt={item.title} />
//                 <Card.Title>{item.title}</Card.Title>
//                 <Card.Body style={{ textAlign: "left" }}>
//                   Rs. {item.price}
//                 </Card.Body>
//                 <Link to={`/products/${id}`}></Link>
//                 <Button onClick={() => addToCart(item)}>Add to Cart</Button>
//               </Container>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default ProductList;

// ProductList.js
import React, { useContext, useState } from "react";
import { Card, Container, Button, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";

const ProductList = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);

  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const addToCart = (item) => {
    const existingProduct = cartItems.find((product) => product.title === item.title);

    if (existingProduct) {
      const updatedCartItems = cartItems.map((product) => {
        if (product.title === item.title) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    setShowAlert(true); // Show the success message
    setTimeout(() => {
      setShowAlert(false); // Hide the success message after 3 seconds
    }, 3000);
  };

  return (
    <Container>
      <h4 style={{ textAlign: "center", margin: "1rem" }}>MUSIC</h4>
      {showAlert && (
        <Alert variant="success" style={{ marginBottom: "1rem" }}>
          Item added to cart successfully!
        </Alert>
      )}
      <Row style={{ marginTop: "1rem" }}>
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
                <Button style={{ float: "right", marginRight: "0.5rem" }} onClick={() => addToCart(item)}>
                  Add to Cart
                </Button>
              </Container>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
