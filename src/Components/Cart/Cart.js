import React, { useState } from "react";
import { Container, Badge, Button, Card, Modal } from "react-bootstrap";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  const removeCartItemHandler = (index) => {
    const updatedCart = cartElements.filter((_, i) => i !== index);
    setCartElements(updatedCart);
  };
  const [cartElements, setCartElements] = useState([
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);

  return (
    <>
      {!showCart ? (
        <Button
          style={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#412b97",
            borderColor: 'purple'
            
          }}
          className="rounded-pill"
          onClick={openCartHandler}
        >
          Cart <Badge bg="primary">{cartElements.length}</Badge>
        </Button>
      ) : (
        <div>
          <Button
            style={{
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#881498",
              border: "none",
            }}
            onClick={closeCartHandler}
          >
            Close Cart
          </Button>
          <Modal show={showCart} onHide={closeCartHandler}>
            <Modal.Header style={{backgroundColor:'#c9d8f0'}} closeButton>
              <Modal.Title >Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {cartElements.map((item, index) => (
                // <Card key={index} style={{ marginTop: "0.2rem" }}>
                  <Container style={{ textAlign: "center" }}>
                    <p>{item.title}</p>
                    <p>Price: {item.price}</p>
                    <img src={item.imageUrl} alt="product-image" />
                    <p style={{ margin: "10px" }}>
                      Quantity: {item.quantity}
                      <Button variant="danger" style={{ marginBottom: '0.25rem' }} onClick={()=>{removeCartItemHandler(index)}}>Remove Item</Button>
                    </p>
                  </Container>
                // </Card>
              ))}
            </Modal.Body>
            <Modal.Footer style={{backgroundColor:'#c9d8f0'}}>
              <Button style={{backgroundColor:'#2b9741', border:'#113c1a', boxShadow:'0px 2px 3px #091e0d'}} onClick={closeCartHandler}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Cart;
