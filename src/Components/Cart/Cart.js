import React, { useContext,useEffect} from "react";
import { Button, Container,Modal } from "react-bootstrap";
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
    .get(`https://crudcrud.com/api/9a8eac71227c47a0a750e0a348efd5c5/${username}`)
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
    (total, item) => total + item.price * item.quantity, 
    0
  );
      
    
    const handleRemoveItem = (title) => {
      cartCtx.removeFromCart(title);
    };

    const handleQuantityChange = (event, title) => {
      const newQuantity = parseInt(event.target.value);
      cartCtx.updateQuantity(title, newQuantity);
    };

    const buyNowHandler = () => {
          alert('Thank you for your purchase. Items will reach you soon.');
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
                <p className="item-price">Rs. {item.price}</p>
              </Col>
                <Col xs={12} md={4} lg={4}>
                <div style={{ display: 'flex', gap: '4px' }}>
                <input
                  type="number"
                  value={item.quantity}
                  className="input-box"
                  onChange={(event) => handleQuantityChange(event, item.title)}
                />
                
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveItem(item.title)}
                  >
                    -
                  </Button>
                  <Button
                    variant="info"
                    // onClick={() => handleRemoveItem(item.title)}
                  >
                    +
                  </Button>
                  </div>
              </Col>
            </Row>
          </div>
          
        ))}
        <Modal.Footer>
          <h4 className="total-price" >Total Price: Rs.{totalPrice}</h4>
          <div style={{display: 'flex', gap: '4px'}}>
          <Button variant="secondary" onClick={cartCtx.handleCartClose}>Close Cart</Button>
          <Button variant="success" onClick={buyNowHandler}>Buy Now</Button>
          </div>
          
        </Modal.Footer>
      </div>
    );
  };

  return (
    <div className="modal show"
    style={{ display: 'block', position: 'fixed', backdrop: 'true' }}>
      <Modal.Dialog className="cart-card">
        {/* <Container> */}
        <Modal.Header closeButton onClick={cartCtx.handleCartClose}>
          <Modal.Title className="cart-heading">Cart</Modal.Title>
          </Modal.Header>
        {/* </Container> */}
        <Container>
          <Row className="cart-details">
            <Col xs={12} md={4} lg={4}>Item</Col>
            <Col xs={12} md={4} lg={4}>Price</Col>
            <Col xs={12} md={4} lg={4}>Quantity</Col>
          </Row>
        </Container>
        <CartProducts />
      </Modal.Dialog>
    </div>
  );
};

export default Cart;

