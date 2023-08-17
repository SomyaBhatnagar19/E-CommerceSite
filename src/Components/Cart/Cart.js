// import React, { useState, useContext, useEffect } from "react";
// import { Button, Modal, Row, Col } from "react-bootstrap";
// // import { CartContext } from "../Cart/CartContext";
// import AuthContext from '../Store/AuthContextProvider';
// import axios from "axios";
// const Cart = () => {
//   const AuthCtx = useContext(AuthContext);
//   const [showCart, setShowCart] = useState(false);
//   const [buy, setBuy] = useState(false);

//   const username = localStorage.getItem("username");

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = () => {
//   axios
//     .get(`https://crudcrud.com/api/fd45c4d4e5304b94a168de04d67a0e9c/${username}`)
//     .then(response => {
//       if (!response.data) {
//         throw new Error("Network response was not ok");
//       }

//       // Consolidate cart items with the same title
//       const cartItemsMap = new Map();
//       response.data.forEach(item => {
//         const product = item.product;
//         if (cartItemsMap.has(product.title)) {
//           cartItemsMap.get(product.title).quantity += 1;
//         } else {
//           cartItemsMap.set(product.title, { ...product, quantity: 1 });
//         }
//       });

//       // Convert map values to an array of cart items
//       AuthCtx.cartItems = Array.from(cartItemsMap.values());
//       AuthCtx.setCartItems(AuthCtx.cartItems);
//     })
//     .catch(error => {
//       console.error("Error fetching cart items:", error);
//     });
// };

//   const handleClose = () => setShowCart(false);
//   const handleShow = () => setShowCart(true);
//   const buyNow = () => {
//     setBuy(true);
//     alert("Thank you for your purchase. Your products will arrive soon.");
//   };

//   const removeFromCart = (item) => {
//     const updatedCartItems = [...cartItems];
//     const index = updatedCartItems.findIndex(
//       (cartItem) => cartItem.title === item.title
//     );
//     if (index !== -1) {
//       if (updatedCartItems[index].quantity === 1) {
//         updatedCartItems.splice(index, 1);
//       } else {
//         updatedCartItems[index].quantity -= 1;
//       }
//       setCartItems(updatedCartItems);
//     }
//   };

//   const updateQuantity = (index, newQuantity) => {
//     const updatedCartItems = [...cartItems];
//     updatedCartItems[index].quantity = newQuantity;
//     setCartItems(updatedCartItems);
//   };

//   const totalAmount = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Cart
//       </Button>

//       <Modal size="lg" show={showCart} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Cart Items</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {cartItems.length === 0 ? (
//             <p>Cart Empty! Select items to add to cart.</p>
//           ) : (
//             <>
//               {cartItems.map((item, index) => (
//                 <Row style={{ padding: "1rem" }} key={index}>
//                   <Col>
//                     <img src={item.imageUrl} alt={item.title} />
//                   </Col>
//                   <Col>{item.title}</Col>
//                   <Col>
//                     Quantity:
//                     <input
//                       type="number"
//                       value={item.quantity}
//                       onChange={(e) =>
//                         updateQuantity(index, parseInt(e.target.value))
//                       }
//                     />
//                   </Col>
//                   <Col>
//                     Rs. {item.price * item.quantity}
//                     <Row>
//                       <Button onClick={() => removeFromCart(item)}>
//                         Remove
//                       </Button>
//                     </Row>
//                   </Col>
//                 </Row>
//               ))}
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <p>Total Amount: Rs. {totalAmount}</p>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={buyNow}>
//             Buy
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default Cart;

import React, { useContext,useEffect} from "react";
import { Button, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import './Cart.css';
import { AuthContext } from "../Store/AuthContextProvider";
import axios from "axios";

const Cart = () => {
  const cartCtx = useContext(AuthContext);
  const username = localStorage.getItem("username");

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = () => {
  axios
    .get(`https://crudcrud.com/api/fd45c4d4e5304b94a168de04d67a0e9c/${username}`)
    .then(response => {
      if (!response.data) {
        throw new Error("Network response was not ok");
      }

      // Consolidate cart items with the same title
      const cartItemsMap = new Map();
      response.data.forEach(item => {
        const product = item.product;
        if (cartItemsMap.has(product.title)) {
          cartItemsMap.get(product.title).quantity += 1;
        } else {
          cartItemsMap.set(product.title, { ...product, quantity: 1 });
        }
      });

      // Convert map values to an array of cart items
      const cartItems = Array.from(cartItemsMap.values());
      cartCtx.setCartData(cartItems);
    })
    .catch(error => {
      console.error("Error fetching cart items:", error);
    });
};




  const CartProducts = () => {

    if (!cartCtx.cartData || cartCtx.cartData.length === 0) {
      return (
        <Row>
          <Col xs={12}>
            No items in the cart
          </Col>
        </Row>
      );
    }

    const totalPrice = cartCtx.cartData.reduce(
    (total, item) => total + item.price * item.quantity, // Multiply price by quantity
    0
  );
      
    
    const handleRemoveItem = (title) => {
      cartCtx.removeFromCart(title);
    };

    const handleQuantityChange = (event, title) => {
      const newQuantity = parseInt(event.target.value);
      cartCtx.updateQuantity(title, newQuantity);
    };

    return (
      <div className="cart-products">
        {cartCtx.cartData.map((item, index) => (
          <div key={index}>
            <Row>
              <Col xs={6} md={4} lg={4}>
                <img src={item.imageUrl} alt={item.title} className="cart-image" />
                <p className="item-title">{item.title}</p>
              </Col>
              <Col xs={6} md={4} lg={4}>
                <p className="item-price">${item.price}</p>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <input
                  type="number"
                  value={item.quantity}
                  className="input-box"
                  onChange={(event) => handleQuantityChange(event, item.title)}
                />
                <Button
                  className="btn-danger remove-btn"
                  onClick={() => handleRemoveItem(item.title)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </div>
        ))}
        <Row>
          <h4 className="total-price">Total Price: ${totalPrice}</h4>
        </Row>
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-end vh-100 cart-align">
      <Card className="cart-card">
        <Container>
          <Button className="close-btn btn-dark" onClick={cartCtx.handleCartClose}>X</Button>
          <h1 className="cart-heading">Cart</h1>
        </Container>
        <Container>
          <Row className="cart-details">
            <Col xs={12} md={4} lg={4}>Item</Col>
            <Col xs={12} md={4} lg={4}>Price</Col>
            <Col xs={12} md={4} lg={4}>Quantity</Col>
          </Row>
        </Container>
        <CartProducts />
      </Card>
    </div>
  );
};

export default Cart;