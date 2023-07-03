// import React from "react";
// import { Card, Container, Row, Col, Button } from "react-bootstrap";
// // { title, imageUrl, price }
// const ProductList = (props) => {
//   const addToCartHandler = () => {
//     const newItem = {
//       title: props.title,
//       price: props.price,
//       image: props.imageUrl,
//       quantity: 1
//     }
//     props.addToItemCart(newItem);
//   }
//   return (

//     <Container>
//       <Row xs={4} className="mb-3 mt-3">
//         <Col md={3}>
//           <Card style={{padding: '0.25rem', boxShadow: '0px 2px 5px #2f5da7'}}>
//             <Card.Img variant="top" src={props.imageUrl} alt={props.title} />
//             <Card.Body>
//               <Card.Title>{props.title}</Card.Title>
//               <Card.Text>Price: {props.price}</Card.Text>
//               <Button type="submit" style={{backgroundColor:'#2e5ba2'}} onClick={addToCartHandler}>Add to Cart</Button>
//             </Card.Body>
//         </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ProductList;
// import React, {useContext} from "react";
// import { CartContext } from "../../Context/CartContext";
// import { Row, Col, Card, Button, Container } from "react-bootstrap";

// const ProductList = (props) => {
//   const {addItemToCart} = useContext(CartContext);
//   //functionality to add data to the cart by pressing the Add To Cart button on the ProductList items
//   const addItemToCart = (item) => {
//     setCartItems((prevItems)=>[...prevItems, item])
// }
//   const productsArr = [
//     {
//       title: "Colors",
//       price: 100,
//       imageUrl:
//         "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     },
//     {
//       title: "Black and white Colors",
//       price: 50,
//       imageUrl:
//         "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     },
//     {
//       title: "Yellow and Black Colors",
//       price: 70,
//       imageUrl:
//         "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     },
//     {
//       title: "Blue Color",
//       price: 100,
//       imageUrl:
//         "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
//     },
//   ];
//   return (
//     <Container style={{ marginTop: "1rem" }}>
//       <h3
//         style={{ textAlign: "center", padding: "1rem", fontFamily: "cursive" }}
//       >
//         Music
//       </h3>
//       <Row>
//         {productsArr.map((item, id) => (
//           <Col sm={4} key={id}>
//             <Card
//               style={{
//                 padding: "0.15rem",
//                 marginBottom: "0.5rem",
//                 backgroundColor: "whitesmoke",
//               }}
//             >
//               <Card.Img src={item.imageUrl} alt={item.title} />
//               <Card.Body>
//                 <Card.Title>{item.title}</Card.Title>
//                 <Card.Text>Price: Rs.{item.price}</Card.Text>
//                 <Button onClick={addItemToCart(item)}>Add to Cart</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };
// export default ProductList;

import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Row, Col, Card, Button, Container } from "react-bootstrap";

const ProductList = (props) => {
  const { setCartItems } = useContext(CartContext);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <Container style={{ marginTop: "1rem" }}>
      <h3
        style={{ textAlign: "center", padding: "1rem", fontFamily: "cursive" }}
      >
        Music
      </h3>
      <Row>
        {productsArr.map((item, id) => (
          <Col sm={4} key={id}>
            <Card
              style={{
                padding: "0.15rem",
                marginBottom: "0.5rem",
                backgroundColor: "whitesmoke",
              }}
            >
              <Card.Img src={item.imageUrl} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Price: Rs.{item.price}</Card.Text>
                <Button onClick={() => addItemToCart(item)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
