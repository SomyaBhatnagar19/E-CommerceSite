import React, { useState } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";

const Cart = () => {
  const cartElements = [
    {
      title: "Album 1",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Album 2",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Album 3",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];
  const [showCart, setShowCart] = useState(false);
  const [buy, setBuy] = useState(false);
  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);
  const buyNow = () => {
    setBuy(true);
    alert("Thankyou for your purchase");
  };
  const totalAmount = cartElements.reduce(
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
          {cartElements.map((elements, index) => (
            <>
              <Row style={{ padding: "1rem" }}>
                <Col>
                  <img src={elements.imageUrl} alt={elements.title}></img>
                </Col>

                <Col>{elements.title}</Col>
                <Col>
                  {/* Quantity: <input type="number" /> */}
                  Quantity: {elements.quantity}
                </Col>
                <Col>
                  Rs. {elements.price}
                  <Row>
                    <Button>Remove</Button>
                  </Row>
                </Col>
              </Row>
            </>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <p>Total Amount: Rs.{totalAmount}</p>
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
