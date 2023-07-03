// import React, { useState } from "react";
// import { Container, Badge, Button,  Modal } from "react-bootstrap";

// const Cart = () => {
//   const [showCart, setShowCart] = useState(false);

//   const openCartHandler = () => {
//     setShowCart(true);
//   };

//   const closeCartHandler = () => {
//     setShowCart(false);
//   };

//   const removeCartItemHandler = (index) => {
//     const updatedCart = cartElements.filter((_, i) => i !== index);
//     setCartElements(updatedCart);
//   };

//   const addItemToCart = (newItem) => {
//     setCartElements((prevCart) => [...prevCart, newItem]);
//   };

//   const [cartElements, setCartElements] = useState([
//     // {
//     //   title: "Colors",
//     //   price: 100,
//     //   imageUrl:
//     //     "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     //   quantity: 2,
//     // },
//     // {
//     //   title: "Black and white Colors",
//     //   price: 50,
//     //   imageUrl:
//     //     "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     //   quantity: 3,
//     // },
//     // {
//     //   title: "Yellow and Black Colors",
//     //   price: 70,
//     //   imageUrl:
//     //     "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     //   quantity: 1,
//     // },
//   ]);

//   return (
//     <>
//       {!showCart ? (
//         <Button
//           style={{
//             fontWeight: "bold",
//             color: "white",
//             backgroundColor: "#412b97",
//             borderColor: 'purple'
            
//           }}
//           className="rounded-pill"
//           onClick={openCartHandler}
//         >
//           Cart <Badge bg="primary">{cartElements.length}</Badge>
//         </Button>
//       ) : (
//         <div>
//           <Button
//             style={{
//               fontWeight: "bold",
//               color: "white",
//               backgroundColor: "#881498",
//               border: "none",
//             }}
//             onClick={closeCartHandler}
//           >
            
//           </Button>
//           <Modal show={showCart} onHide={closeCartHandler}>
//             <Modal.Header style={{backgroundColor:'#c9d8f0'}} closeButton>
//               <Modal.Title >Cart</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               {cartElements.map((item, index) => (
//                 // <Card key={index} style={{ marginTop: "0.2rem" }}>
//                   <Container style={{ textAlign: "center" }}>
//                     <p>{item.title}</p>
//                     <p>Price: {item.price}</p>
//                     {/* <img src={item.imageUrl} alt="product-image" /> */}
//                     <img src={item.imageUrl} alt="Product" />
//                     <p style={{ margin: "10px" }}>
//                       Quantity: {item.quantity}
//                       <Button variant="danger" style={{ marginBottom: '0.25rem' }} onClick={()=>{removeCartItemHandler(index)}}>Remove Item</Button>
//                     </p>
//                   </Container>
//                 // </Card>
//               ))}
//             </Modal.Body>
//             <Modal.Footer style={{backgroundColor:'#c9d8f0'}}>
//               <Button style={{backgroundColor:'#2b9741', border:'#113c1a', boxShadow:'0px 2px 3px #091e0d'}} onClick={closeCartHandler}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </div>
//       )}
//     </>
//   );
// };

// export default Cart;
// import React, { useContext, useState } from "react";
// import { Modal, Button, Container, Table } from "react-bootstrap";
// import { CartContext } from "../../Context/CartContext";

// const Cart = () => {
//   const { cartItems, setCartItems } = useContext(CartContext);
//   // const { cartItems } = useContext(CartContext);
//   const [ showCart, setShowCart ] = useState(false);

//     //function to provide the opening and closing functionality of the cart
//     const openCart = () => {
//         setShowCart(true);
//     }
//     const closeCart = () => {
//         setShowCart(false);
//     }
    
    
//     const removeCartItem = (item) => {
//         setCartItems((prevItems) => prevItems.filter((i)=> i!==item));
//     }

//   const CartProducts = () => {
//     // const totalQuantity = cartItems.reduce((total, item) => total + item.quantity*item.price, 0);  
//     if(!cartItems || cartItems.length === 0) {
//       return (
//         <p>No items in the cartItems.</p>
//       )
//     }
//     const totalQuantity = cartItems.reduce(
//       (total, item) => total + item.quantity * item.price,
//       0
//     );
//   }
  
//   return (
//     <Modal show={showCart} onHide={closeCart} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Cart</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Container>
//           {cartItems.length > 0 ? (
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>Item</th>
//                   <th>Price</th>
//                   <th>Quantity</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.map((item, index) => (
//                   <tr key={index}>
//                     <td>{item.title}</td>
//                     <td>{item.price}</td>
//                     <td>{item.quantity}</td>
//                     <td>
//                       <Button
//                         variant="danger"
//                         onClick={() => removeCartItem(item)}
//                       >
//                         Remove
//                       </Button>
//                     </td>
//                     <h5>Amount to be Paid: ${totalQuantity}</h5>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           ) : (
//             <p>Your cart is empty.</p>
//           )}
//         </Container>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={closeCart}>
//           Close
//         </Button>
//         <Button variant="primary">Checkout</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default Cart;
import React, { useContext, useState } from "react";
import { Modal, Button, Container, Table } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const removeCartItem = (item) => {
    setCartItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <Modal show={showCart} onHide={closeCart} centered>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {cartItems.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => removeCartItem(item)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" style={{ textAlign: "right" }}>
                    Total Quantity:
                  </td>
                  <td>{totalQuantity}</td>
                </tr>
              </tfoot>
            </Table>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeCart}>
          Close
        </Button>
        <Button variant="primary">Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
