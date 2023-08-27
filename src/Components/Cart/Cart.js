// import React, { useContext,useEffect} from "react";
// import { Button, Container,Modal } from "react-bootstrap";
// import { Row, Col } from "react-bootstrap";
// import { Card } from "react-bootstrap";
// import './Cart.css';
// import { AuthContext } from "../Store/AuthContextProvider";
// import axios from "axios";

// const Cart = () => {
//   const cartCtx = useContext(AuthContext);
//   const username = localStorage.getItem("username");
//   // const isAuthenticated = cartCtx.isAuthenticated;
//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = () => {
//   axios
//     .get(`https://crudcrud.com/api/37f5ba428721413fa25379e1541c3bdc/${username}`)
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
//       const cartItems = Array.from(cartItemsMap.values());
//       cartCtx.setCartData(cartItems);
//     })
//     .catch(error => {
//       console.error("Error fetching cart items:", error);
//     });
// };




//   const CartProducts = () => {

//     if (cartCtx.cartData || cartCtx.cartData.length === 0) {
//       return (
//         <Row>
//           <Col xs={12} style={{textAlign: 'center'}}>
//             Cart Empty !!
//           </Col>
//         </Row>
//       );
//     }

//     const totalPrice = cartCtx.cartData.reduce(
//     (total, item) => total + item.price * item.quantity, 
//     0
//   );
      
    
//     const handleRemoveItem = (title) => {
//       cartCtx.removeFromCart(title);
//     };

//     const handleQuantityChange = (event, title) => {
//       const newQuantity = parseInt(event.target.value);
//       cartCtx.updateQuantity(title, newQuantity);
//     };

//     const buyNowHandler = () => {
//           alert('Thank you for your purchase. Items will reach you soon.');
//    };

//     return (
     
//       <div className="cart-products">
//         {cartCtx.cartData.map((item, index) => (
//           <div key={index}>
//             <Row>
//               <Col xs={6} md={4} lg={4}>
//                 <img src={item.imageUrl} alt={item.title} className="cart-image" />
//                 <p className="item-title">{item.title}</p>
//               </Col>
//               <Col xs={6} md={4} lg={4}>
//                 <p className="item-price">Rs. {item.price}</p>
//               </Col>
//                 <Col xs={12} md={4} lg={4}>
//                 <div style={{ display: 'flex', gap: '4px' }}>
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   className="input-box"
//                   onChange={(event) => handleQuantityChange(event, item.title)}
//                 />
                
//                   <Button
//                     variant="danger"
//                     onClick={() => handleRemoveItem(item.title)}
//                   >
//                     -
//                   </Button>
//                   <Button
//                     variant="info"
//                     // onClick={() => handleRemoveItem(item.title)}
//                   >
//                     +
//                   </Button>
//                   </div>
//               </Col>
//             </Row>
//           </div>
          
//         ))}
//         <Modal.Footer>
//           <h4 className="total-price" >Total Price: Rs.{totalPrice}</h4>
//           <div style={{display: 'flex', gap: '4px'}}>
//           <Button variant="secondary" onClick={cartCtx.handleCartClose}>Close Cart</Button>
//           <Button variant="success" onClick={buyNowHandler}>Buy Now</Button>
//           </div>
          
//         </Modal.Footer>
//       </div>
      
//     );
//   };

//   return (
//     <div className="modal show"
//     style={{ display: 'block', position: 'fixed', backdrop: 'true' }}>
//       <Modal.Dialog className="cart-card">
//         {/* <Container> */}
//         <Modal.Header closeButton onClick={cartCtx.handleCartClose}>
//           <Modal.Title className="cart-heading">Cart</Modal.Title>
//           </Modal.Header>
//         {/* </Container> */}
//         <Container>
//           <Row className="cart-details">
//             <Col xs={12} md={4} lg={4}>Item</Col>
//             <Col xs={12} md={4} lg={4}>Price</Col>
//             <Col xs={12} md={4} lg={4}>Quantity</Col>
//           </Row>
//         </Container>
//         <CartProducts />
//       </Modal.Dialog>
//     </div>
  
//   );
// };

// export default Cart;

// import React, { useContext, useEffect, useState } from "react";
// import { Button, Container, Modal } from "react-bootstrap";
// import { Row, Col } from "react-bootstrap";
// import './Cart.css';
// import { AuthContext } from "../Store/AuthContextProvider";
// import axios from "axios";

// const Cart = () => {
//   const cartCtx = useContext(AuthContext);
//   const userToken = localStorage.getItem("userToken"); // Use a token or identifier here
//   const isAuthenticated = cartCtx.isAuthenticated;

//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     if (isAuthenticated) {
//       fetchCartItems();
//     }
//   }, [isAuthenticated]);

//   const fetchCartItems = () => {
//     axios.get(`https://crudcrud.com/api/a6fc22bebc8e4405b6cd658b5aa4b6a8/${userToken}`)
//       .then(response => {
//         console.log(response.data); // Add this line to check API response
//         setCartItems(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching cart items:", error);
//       });
//   };
 

//   const handleRemoveItem = (title) => {
//     const updatedCart = cartItems.filter(item => item.title !== title);
//     setCartItems(updatedCart);
//   };

//   const handleQuantityChange = (event, title) => {
//     const newQuantity = parseInt(event.target.value);
//     const updatedCart = cartItems.map(item =>
//       item.title === title ? { ...item, quantity: newQuantity } : item
//     );
//     setCartItems(updatedCart);
//   };

//   const buyNowHandler = () => {
//     alert('Thank you for your purchase. Items will reach you soon.');
//   };

//   return (
//     isAuthenticated ? (
//       <div className="modal show"
//         style={{ display: 'block', position: 'fixed', backdrop: 'true' }}>
//         <Modal.Dialog className="cart-card">
//           <Container>
//             <Modal.Header closeButton onClick={cartCtx.handleCartClose}>
//               <Modal.Title className="cart-heading">Cart</Modal.Title>
//             </Modal.Header>
//             <Container>
//               <Row className="cart-details">
//                 <Col xs={12} md={4} lg={4}>Item</Col>
//                 <Col xs={12} md={4} lg={4}>Price</Col>
//                 <Col xs={12} md={4} lg={4}>Quantity</Col>
//               </Row>
//             </Container>
//             <CartProducts items={cartItems} handleRemoveItem={handleRemoveItem} handleQuantityChange={handleQuantityChange} buyNowHandler={buyNowHandler} />
//           </Container>
//         </Modal.Dialog>
//       </div>
//     ) : (
//       <div className="modal show"
//         style={{ display: 'block', position: 'fixed', backdrop: 'true' }}>
//         <Modal.Dialog className="cart-card">
//           <Container>
//             <Modal.Header closeButton onClick={cartCtx.handleCartClose}>
//               <Modal.Title className="cart-heading">Cart</Modal.Title>
//             </Modal.Header>
//             <Container>
//               <Row className="cart-details">
//                 <Col xs={12} style={{ textAlign: 'center' }}>Cart Empty !!</Col>
//               </Row>
//             </Container>
//           </Container>
//         </Modal.Dialog>
//       </div>
//     )
//   );
// };

// const CartProducts = ({ items, handleRemoveItem, handleQuantityChange, buyNowHandler }) => {
//   const totalPrice = items.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="cart-products">
//       {items.map((item, index) => (
//         <div key={index}>
//           <Row>
//             <Col xs={6} md={4} lg={4}>
//               <img src={item.imageUrl} alt={item.title} className="cart-image" />
//               <p className="item-title">{item.title}</p>
//             </Col>
//             <Col xs={6} md={4} lg={4}>
//               <p className="item-price">Rs. {item.price}</p>
//             </Col>
//             <Col xs={12} md={4} lg={4}>
//               <div style={{ display: 'flex', gap: '4px' }}>
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   className="input-box"
//                   onChange={(event) => handleQuantityChange(event, item.title)}
//                 />
//                 <Button
//                   variant="danger"
//                   onClick={() => handleRemoveItem(item.title)}
//                 >
//                   -
//                 </Button>
//                 <Button
//                   variant="info"
//                   // onClick={() => handleRemoveItem(item.title)}
//                 >
//                   +
//                 </Button>
//               </div>
//             </Col>
//           </Row>
//         </div>
//       ))}
//       <Modal.Footer>
//         <h4 className="total-price">Total Price: Rs.{totalPrice}</h4>
//         <div style={{ display: 'flex', gap: '4px' }}>
//           <Button variant="secondary">Close Cart</Button>
//           <Button variant="success" onClick={buyNowHandler}>Buy Now</Button>
//         </div>
//       </Modal.Footer>
//     </div>
//   );
// };

// export default Cart;
// import React, { useContext,useEffect} from "react";
// import { Button, Container,Modal } from "react-bootstrap";
// import { Row, Col } from "react-bootstrap";
// import { Card } from "react-bootstrap";
// import './Cart.css';
// import { AuthContext } from "../Store/AuthContextProvider";
// import axios from "axios";

// const Cart = () => {
//   const cartCtx = useContext(AuthContext);
//   const username = localStorage.getItem('username');

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = () => {
//     axios
//       .get(`https://crudcrud.com/api/8ba7105e18f5464784fbfdc6b77a0890/${username}`)
//       .then(response => {
//         if (!response.data) {
//           throw new Error("Network response was not ok.");
//         } else {
//           const cartItemsMap = new Map();
//           response.data.forEach(item => {
//             const product = item.product;
//             if (cartItemsMap.has(product.title)) {
//               cartItemsMap.get(product.title).quantity += 1;
//             } else {
//               cartItemsMap.set(product.title, { ...product, quantity: 1 });
//             }
//           });

//           // Convert map values to an array of cart items
//           const cartItems = Array.from(cartItemsMap.values());
//           cartCtx.setCartData(cartItems);

//           // You might want to use cartCtx here to update your context data as well
//           cartCtx.updateCartData(cartItems);
//         }
//       })
//       .catch(error => {
//         console.error("Error fetching cart items:", error);
//       });
//   };

//   const CartProducts = () => {

//     if (!cartCtx.cartData || cartCtx.cartData.length === 0) {
//       return (
//         <Row>
//           <Col xs={12}>
//             No items in the cart
//           </Col>
//         </Row>
//       );
//     }

//     const totalPrice = cartCtx.cartData.reduce(
//     (total, item) => total + item.price * item.quantity, // Multiply price by quantity
//     0
//   );
      
    
//     const handleRemoveItem = (title) => {
//       cartCtx.removeFromCart(title);
//     };

//     const handleQuantityChange = (event, title) => {
//       const newQuantity = parseInt(event.target.value);
//       cartCtx.updateQuantity(title, newQuantity);
//     };

//     return (
//       <div className="cart-products">
//         {cartCtx.cartData.map((item, index) => (
//           <div key={index}>
//             <Row>
//               <Col xs={6} md={4} lg={4}>
//                 <img src={item.imageUrl} alt={item.title} className="cart-image" />
//                 <p className="item-title">{item.title}</p>
//               </Col>
//               <Col xs={6} md={4} lg={4}>
//                 <p className="item-price">${item.price}</p>
//               </Col>
//               <Col xs={12} md={4} lg={4}>
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   className="input-box"
//                   onChange={(event) => handleQuantityChange(event, item.title)}
//                 />
//                 <Button
//                   className="btn-danger remove-btn"
//                   onClick={() => handleRemoveItem(item.title)}
//                 >
//                   Remove
//                 </Button>
//               </Col>
//             </Row>
//           </div>
//         ))}
//         <Row>
//           <h4 className="total-price">Total Price: ${totalPrice}</h4>
//         </Row>
//       </div>
//     );
//   };

//   return (
//     <div className="d-flex justify-content-end vh-100 cart-align">
//       <Card className="cart-card">
//         <Container>
//           <Button className="close-btn btn-dark" onClick={cartCtx.handleCartClose}>X</Button>
//           <h1 className="cart-heading">Cart</h1>
//         </Container>
//         <Container>
//           <Row className="cart-details">
//             <Col xs={12} md={4} lg={4}>Item</Col>
//             <Col xs={12} md={4} lg={4}>Price</Col>
//             <Col xs={12} md={4} lg={4}>Quantity</Col>
//           </Row>
//         </Container>
//         <CartProducts />
//       </Card>
//     </div>
//   );
// };

// export default Cart;



// import React, { useContext,useEffect} from "react";
// import { Button, Container,Modal } from "react-bootstrap";
// import { Row, Col } from "react-bootstrap";
// import { Card } from "react-bootstrap";
// import './Cart.css';
// import { AuthContext } from "../Store/AuthContextProvider";
// import axios from "axios";

// const Cart = () => {
//   const cartCtx = useContext(AuthContext);
//   const username = localStorage.getItem("username");

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = () => {
//   axios
//     .get(`https://crudcrud.com/api/6c296ff867fc4bd1a1b1f663a4736270/${username}`)
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
//       const cartItems = Array.from(cartItemsMap.values());
//       cartCtx.setCartData(cartItems);
//     })
//     .catch(error => {
//       console.error("Error fetching cart items:", error);
//     });
// };




//   const CartProducts = () => {

//     if (cartCtx.cartData || cartCtx.cartData.length === 0) {
//       return (
//         <Row>
//           <Col xs={12}>
//             No items in the cart
//           </Col>
//         </Row>
//       );
//     }

//     const totalPrice = cartCtx.cartData.reduce(
//     (total, item) => total + item.price * item.quantity, 
//     0
//   );
      
    
//     const handleRemoveItem = (title) => {
//       cartCtx.removeFromCart(title);
//     };

//     const handleQuantityChange = (event, title) => {
//       const newQuantity = parseInt(event.target.value);
//       cartCtx.updateQuantity(title, newQuantity);
//     };

//     const buyNowHandler = () => {
//           alert('Thank you for your purchase. Items will reach you soon.');
//    };

//     return (
//       <div className="cart-products">
//         {cartCtx.cartData.map((item, index) => (
//           <div key={index}>
//             <Row>
//               <Col xs={6} md={4} lg={4}>
//                 <img src={item.imageUrl} alt={item.title} className="cart-image" />
//                 <p className="item-title">{item.title}</p>
//               </Col>
//               <Col xs={6} md={4} lg={4}>
//                 <p className="item-price">${item.price}</p>
//               </Col>
//                 <Col xs={12} md={4} lg={4}>
//                 <div style={{ display: 'flex', gap: '4px' }}>
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   className="input-box"
//                   onChange={(event) => handleQuantityChange(event, item.title)}
//                 />
                
//                   <Button
//                     variant="danger"
//                     onClick={() => handleRemoveItem(item.title)}
//                   >
//                     -
//                   </Button>
//                   <Button
//                     variant="info"
//                     // onClick={() => handleRemoveItem(item.title)}
//                   >
//                     +
//                   </Button>
//                   </div>
//               </Col>
//             </Row>
//           </div>
          
//         ))}
//         <Modal.Footer>
//           <h4 className="total-price" >Total Price: Rs.{totalPrice}</h4>
//           <div style={{display: 'flex', gap: '4px'}}>
//           <Button variant="secondary" onClick={cartCtx.handleCartClose}>Close Cart</Button>
//           <Button variant="success" onClick={buyNowHandler}>Buy Now</Button>
//           </div>
          
//         </Modal.Footer>
//       </div>
//     );
//   };

//   return (
//     <div className="modal show"
//     style={{ display: 'block', position: 'fixed', backdrop: 'true' }}>
//       <Modal.Dialog className="cart-card">
//         {/* <Container> */}
//         <Modal.Header closeButton onClick={cartCtx.handleCartClose}>
//           <Modal.Title className="cart-heading">Cart</Modal.Title>
//           </Modal.Header>
//         {/* </Container> */}
//         <Container>
//           <Row className="cart-details">
//             <Col xs={12} md={4} lg={4}>Item</Col>
//             <Col xs={12} md={4} lg={4}>Price</Col>
//             <Col xs={12} md={4} lg={4}>Quantity</Col>
//           </Row>
//         </Container>
//         <CartProducts />
//       </Modal.Dialog>
//     </div>
//   );
// };

// export default Cart;

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
    .get(`https://crudcrud.com/api/8ba7105e18f5464784fbfdc6b77a0890/${username}`)
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
      cartCtx.setCartItems(cartItems);
    })
    .catch(error => {
      console.error("Error fetching cart items:", error);
    });
};




const CartProducts = () => {
  if (!cartCtx.cartItems || cartCtx.cartItems.length === 0) {
    return (
      <Row>
        <Col xs={12}>
          No items in the cart
        </Col>
      </Row>
    );
  }
    
    

    const totalPrice = cartCtx.cartItems.reduce(
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
        {cartCtx.cartItems.map((item, index) => (
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