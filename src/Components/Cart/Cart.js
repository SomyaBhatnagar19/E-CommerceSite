import React, { useState, useContext } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";
import { CartContext } from "../Cart/CartContext";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [buy, setBuy] = useState(false);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);
  const buyNow = () => {
    setBuy(true);
    alert("Thank you for your purchase. Your products will arrive soon.");
  };

  const removeFromCart = (item) => {
    const updatedCartItems = [...cartItems];
    const index = updatedCartItems.findIndex(
      (cartItem) => cartItem.title === item.title
    );
    if (index !== -1) {
      if (updatedCartItems[index].quantity === 1) {
        updatedCartItems.splice(index, 1);
      } else {
        updatedCartItems[index].quantity -= 1;
      }
      setCartItems(updatedCartItems);
    }
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
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
          {cartItems.length === 0 ? (
            <p>Cart Empty! Select items to add to cart.</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <Row style={{ padding: "1rem" }} key={index}>
                  <Col>
                    <img src={item.imageUrl} alt={item.title} />
                  </Col>
                  <Col>{item.title}</Col>
                  <Col>
                    Quantity:
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(index, parseInt(e.target.value))
                      }
                    />
                  </Col>
                  <Col>
                    Rs. {item.price * item.quantity}
                    <Row>
                      <Button onClick={() => removeFromCart(item)}>
                        Remove
                      </Button>
                    </Row>
                  </Col>
                </Row>
              ))}
            </>
          )}
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

