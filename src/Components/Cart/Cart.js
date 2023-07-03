// import React, { useState, useContext } from "react";
// import { Button, Modal, Row, Col } from "react-bootstrap";
// import { CartContext } from "./CartContext";
// const Cart = () => {

//   const { cartItems } = useContext(CartContext);
//   const [showCart, setShowCart] = useState(false);
//   const [buy, setBuy] = useState(false);
//   const handleClose = () => setShowCart(false);
//   const handleShow = () => setShowCart(true);
//   const buyNow = () => {
//     setBuy(true);
//     alert("Thankyou for your purchase");
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
//           {cartItems.map((item, index) => (
//             <>
//               <Row style={{ padding: "1rem" }}>
//                 <Col>
//                   <img src={item.imageUrl} alt={item.title}></img>
//                 </Col>

//                 <Col>{item.title}</Col>
//                 <Col>
//                   {/* Quantity: <input type="number" /> */}
//                   Quantity: {item.quantity}
//                 </Col>
//                 <Col>
//                   Rs. {item.price}
//                   <Row>
//                     <Button>Remove</Button>
//                   </Row>
//                 </Col>
//               </Row>
//             </>
//           ))}
//         </Modal.Body>
//         <Modal.Footer>
//           <p>Total Amount: Rs.{totalAmount}</p>
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
import React, { useState, useContext } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";
import { CartContext } from "./CartContext";
const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [buy, setBuy] = useState(false);
  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);
  const buyNow = () => {
    setBuy(true);
    alert("Thank you for your purchase");
  };
  const totalAmount = cartItems.reduce(
    (total, element) => total + element.price * element.quantity,
    0
  );

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cart
      </Button>

      <Modal size="lg" show={showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.map((item, index) => (
            <Row style={{ padding: "1rem" }} key={index}>
              <Col>
                <img src={item.imageUrl} alt={item.title} />
              </Col>
              <Col>{item.title}</Col>
              <Col>Quantity: {item.quantity}</Col>
              <Col>
                Rs. {item.price}
                <Row>
                  <Button>Remove</Button>
                </Row>
              </Col>
            </Row>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <p>Total Amount: Rs. {totalAmount}</p>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={buyNow}>
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
