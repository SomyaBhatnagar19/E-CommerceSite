// import React, { useContext } from "react";
// import { Card, Container, Button, Row, Col } from "react-bootstrap";
// import { CartContext } from "../Cart/CartContext";
// const ProductList = () => {
//   const { cartItems, setCartItems } = useContext(CartContext);
//   //making an array of hard coded data given to us
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

//   // const addToCart = (item) => {
//   //   setCartItems([...cartItems, item]);
//   // };
//   const addToCart = (productsArr) => {
//     setCartData([...cartItems, productsArr]);
//    const addToCart = (productsArr) => {
//     const existingProduct = cartItems.find((item) => item.title === productsArr.title);

//     if (existingProduct) {
//       const updatedCartData = cartItems.map((item) => {
//         if (item.title === productsArr.title) {
//           return { ...item, quantity: item.quantity + 1 };
//         }
//         return item;
//       });
//       setCartData(updatedCartData);
//     } else {
//       setCartData([...cartItems, { ...productsArr, quantity: 1 }]);
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
import React, { useContext } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import { CartContext } from "../Cart/CartContext";

const ProductList = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
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
  };

  return (
    <Container>
      <h4 style={{ textAlign: "center", margin: "1rem" }}>MUSIC</h4>
      <Row style={{ marginTop: "1rem" }}>
        {productsArr.map((item, id) => (
          <Col sm={4} key={id}>
            <Card>
              <Container style={{ padding: "0.3rem" }}>
                <Card.Img src={item.imageUrl} alt={item.title} />
                <Card.Title>{item.title}</Card.Title>
                <Card.Body style={{ textAlign: "left" }}>
                  Rs. {item.price}
                </Card.Body>
                <Button onClick={() => addToCart(item)}>Add to Cart</Button>
              </Container>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
