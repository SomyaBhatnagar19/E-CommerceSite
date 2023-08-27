// import React from "react";
// import { useParams } from "react-router-dom";
// import { Row, Col, Button, Card, Badge } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import "./ProductPage.css";
// import { useContext } from "react";
// import { AuthContext } from "../Store/AuthContextProvider";

// const ProductPage = () => {
//   const { productId } = useParams();

//   const cartCtx = useContext(AuthContext);

//   const products = [
//     {
//       id: 1,
//       title: "Album 1",
//       price: 100,
//       imageUrl: [
//         "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//       ],
//       Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
//       reviews: [
//         { id: 1, author: "John", comment: "Great album!" },
//         { id: 2, author: "Jane", comment: "Loved it!" },
//       ],
//       bankOffers: [
//         { id: 1, bank: "Bank A", offer: "Get 10% off" },
//         { id: 2, bank: "Bank B", offer: "EMI available" },
//       ],
//       purchases: 1000,
//     },
//     {
//       id: 2,
//       title: "Album 2",
//       price: 50,
//       imageUrl: [
//         "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//       ],
//       Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
//       reviews: [],
//       bankOffers: [],
//       purchases: 500,
//     },
//     {
//       id: 3,
//       title: "Album 3",
//       price: 70,
//       imageUrl: [
//         "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//       ],
//       Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
//       reviews: [],
//       bankOffers: [],
//       purchases: 500,
//     },
//     {
//       id: 4,
//       title: "Album 4",
//       price: 80,
//       imageUrl: [
//         "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
//       ],
//       Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
//       reviews: [],
//       bankOffers: [],
//       purchases: 500,
//     },
//     {
//       id: 5,
//       title: "Album 5",
//       price: 70,
//       imageUrl: [
//         "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//       ],
//       Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
//       reviews: [],
//       bankOffers: [],
//       purchases: 500,
//     },
//     {
//       id: 6,
//       title: "Album 6",
//       price: 75,
//       imageUrl: [
//         "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//       ],
//       Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
//       reviews: [],
//       bankOffers: [],
//       purchases: 500,
//     },
//   ];

//   const product = products.find((p) => p.id === Number(productId));

//   if (!product) {
//     return <h1>Product not found</h1>;
//   }

//   const {
//     title,
//     price,
//     imageUrl,
//     Devices,
//     description,
//     reviews,
//     bankOffers,
//     purchases,
//   } = product;

//   return (
//     <Container className="main-container-separate-products">
//       <h1 className="separate-product-title">{title}</h1>
//       <Row className="separate-product-details-container">
//         <Col xs={12} lg={6} md={6}>
//           <Row>
//             <Col lg={6} md={6} xs={6}>
//               <Row>
//                 <Col xs={6} md={6} lg={6}>
//                   {
//                     <div className="separate-product-images-container">
//                       {imageUrl.map((image, index) => (
//                         <img
//                           key={index}
//                           src={image}
//                           alt={title}
//                           className="image-sizes"
//                         />
//                       ))}
//                     </div>
//                   }
//                 </Col>
//               </Row>
//               <Row>
//                 <Col xs={6} md={6} lg={6}>
//                   {" "}
//                   {
//                     <div className="separate-product-images-container">
//                       {imageUrl.map((image, index) => (
//                         <img
//                           key={index}
//                           src={image}
//                           alt={title}
//                           className="image-sizes"
//                         />
//                       ))}
//                     </div>
//                   }
//                 </Col>
//               </Row>
//               <Row>
//                 <Col xs={6} md={6} lg={6}>
//                   {
//                     <div className="separate-product-images-container">
//                       {imageUrl.map((image, index) => (
//                         <img
//                           key={index}
//                           src={image}
//                           alt={title}
//                           className="image-sizes"
//                         />
//                       ))}
//                     </div>
//                   }
//                 </Col>
//               </Row>
//             </Col>
//             <Col xs={6} md={6} lg={6}>
//               {
//                 <div className="separate-product-images-container">
//                   {imageUrl.map((image, index) => (
//                     <img
//                       key={index}
//                       src={image}
//                       alt={title}
//                       className="separate-product-image"
//                     />
//                   ))}
//                 </div>
//               }
//             </Col>
//           </Row>
//         </Col>
//         <Col xs={12} md={12} lg={6}>
//           <Card className="separate-product-details-card">
//             <Card.Body>
//               <Card.Title>Price: Rs. {price}</Card.Title>
//               <Card.Text className="separate-product-description">
//                 {description}
//               </Card.Text>
//               <div className="separate-product-Devices-container">
//                 <h3>Devices:</h3>
//                 <ul className="separate-product-Devices-list">
//                   {Devices.map((size, index) => (
//                     <li key={index} className="separate-product-size-item">
//                       <Badge variant="secondary" className="size-badge">
//                         {size}
//                       </Badge>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="separate-product-reviews-container">
//                 <h3>Reviews:</h3>
//                 <ul className="separate-product-reviews-list">
//                   {reviews.map((review) => (
//                     <li
//                       key={review.id}
//                       className="separate-product-review-item"
//                     >
//                       <strong>{review.author}</strong>: {review.comment}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="separate-product-bank-offers-container">
//                 <h3>Bank Offers:</h3>
//                 <ul className="separate-product-bank-offers-list">
//                   {bankOffers.map((offer) => (
//                     <li
//                       key={offer.id}
//                       className="separate-product-bank-offer-item"
//                     >
//                       {offer.bank}: {offer.offer}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <h3>Number of Purchases: {purchases}</h3>
//               <Button
//                 variant="primary"
//                 className="add-to-cart-button"
//                 onClick={() => cartCtx.addToCart(product)}
//               >
//                 Add to Cart
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ProductPage;
// import React from "react";
// import { useParams } from "react-router-dom";
// import { Col, Button, Card, Badge, Row } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import "./ProductPage.css"; // Make sure to import your CSS file
// import { useContext } from "react";
// import { AuthContext } from "../Store/AuthContextProvider";

// const ProductPage = () => {
//   const { productId } = useParams();

//   const cartCtx = useContext(AuthContext);

//   const products = [
//     {
//       id: 1,
//       title: "Album 1",
//       price: 100,
//       imageUrl: [
//         "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//         "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//         "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//       ],
//       Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//       reviews: [
//         { id: 1, author: "John", comment: "Great album!" },
//         { id: 2, author: "Jane", comment: "Loved it!" },
//       ],
//       bankOffers: [
//         { id: 1, bank: "Bank A", offer: "Get 10% off" },
//         { id: 2, bank: "Bank B", offer: "EMI available" },
//       ],
//       purchases: 1000,
//     },
//     {
//       id: 2,
//       title: "Album 2",
//       price: 50,
//       imageUrl: [
//         "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//         "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//         "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//       ],
//       Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//       reviews: [
//         { id: 1, author: "John", comment: "Great album!" },
//         { id: 2, author: "Jane", comment: "Loved it!" },
//       ],
//       bankOffers: [
//         { id: 1, bank: "Bank A", offer: "Get 10% off" },
//         { id: 2, bank: "Bank B", offer: "EMI available" },
//       ],
//       purchases: 1000,
//     },
//     {
//       id: 3,
//       title: "Album 3",
//       price: 70,
//       imageUrl: [
//         "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//         "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//         "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//       ],
//       Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
//       reviews: [],
//       bankOffers: [],
//       purchases: 500,
//     },
//     {
//       id: 4,
//       title: "Album 4",
//       price: 80,
//       imageUrl: [
//         "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
//         "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
//         "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
//       ],
//       Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
//       reviews: [],
//       bankOffers: [],
//       purchases: 500,
//     },
//     {
//       id: 5,
//       title: "Album 5",
//       price: 70,
//       imageUrl: [
//         "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//         "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//         "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//       ],
//       Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
//       reviews: [],
//       bankOffers: [],
//       purchases: 500,
//     },
//     {
//       id: 6,
//       title: "Album 6",
//       price: 75,
//       imageUrl: [
//         "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//         "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//         "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//       ],
//       Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
//       reviews: [],
//       bankOffers: [],
//       purchases: 500,
//     },
//   ];

//   const product = products.find((p) => p.id === Number(productId));

//   if (!product) {
//     return <h1>Product not found</h1>;
//   }

//   const {
//     title,
//     price,
//     imageUrl,
//     Devices,
//     description,
//     reviews,
//     bankOffers,
//     purchases,
//   } = product;

//   return (
//     <>
//       <h4 className="head-title">{title}</h4>
//       <Container className="container-main">
//         <Row xs={2} md={4} lg={6}>
//           <Col>
//             {imageUrl.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={title}
//                 className="image-sizes"
//               />
//             ))}
//           </Col>
//           <Col>
//             <img
//               src={imageUrl[0]} // Displaying the first image in the array
//               alt={title}
//               className="product-image"
//             />
//           </Col>
//           <Col className="mx-auto" style={{width:'50vw'}}>
//             <Container className="product-detail-container">
//               <p>No. of Purchases:- {purchases}</p>
//               <p>
//                 Price:- <Badge className="badge">Rs. {price}</Badge>
//               </p>
//               <p>About the product:- {description}</p>
//               <p>
//                 Devices available on:-{" "}
//                 {Devices.map((size, index) => (
//                   <h6 key={index} className="product-size-item">
//                     <Badge variant="secondary" className="badge">
//                       {size}
//                     </Badge>
//                   </h6>
//                 ))}
//               </p>
//               <p>
//                 Reviews:-{" "}
//                 {reviews.map((review) => (
//                   <li key={review.id} className="review-item">
//                     <strong>{review.author}</strong>: {review.comment}
//                   </li>
//                 ))}
//               </p>
//               <p>
//                 Bank offers:-{" "}
//                 {bankOffers.map((offer) => (
//                   <li key={offer.id} className="product-bank-offer-item">
//                     {offer.bank}: {offer.offer}
//                   </li>
//                 ))}
//               </p>
//               <Button className="add-to-cart-button" onClick={() => cartCtx.addToCart(product)}>Add to Cart</Button>
//             </Container>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default ProductPage;



import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Button, Badge, Row, Container } from "react-bootstrap";
import { AuthContext } from "../Store/AuthContextProvider";
import Footer from "../Layout/Footer";
import './ProductPage.css';
const ProductPage = () => {
  const { productId } = useParams();
  const cartCtx = useContext(AuthContext);

  const products = [
    {
      id: 1,
      title: "Album 1",
      price: 100,
      imageUrl: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      ],
      Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      reviews: [
        { id: 1, author: "John", comment: "Great album!" },
        { id: 2, author: "Jane", comment: "Loved it!" },
      ],
      bankOffers: [
        { id: 1, bank: "Bank A", offer: "Get 10% off" },
        { id: 2, bank: "Bank B", offer: "EMI available" },
      ],
      purchases: 1000,
    },
    {
      id: 2,
      title: "Album 2",
      price: 50,
      imageUrl: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      ],
      Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      reviews: [
        { id: 1, author: "John", comment: "Great album!" },
        { id: 2, author: "Jane", comment: "Loved it!" },
      ],
      bankOffers: [
        { id: 1, bank: "Bank A", offer: "Get 10% off" },
        { id: 2, bank: "Bank B", offer: "EMI available" },
      ],
      purchases: 1000,
    },
    {
      id: 3,
      title: "Album 3",
      price: 70,
      imageUrl: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      ],
      Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
      reviews: [],
      bankOffers: [],
      purchases: 500,
    },
    {
      id: 4,
      title: "Album 4",
      price: 80,
      imageUrl: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      ],
      Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
      reviews: [],
      bankOffers: [],
      purchases: 500,
    },
    {
      id: 5,
      title: "Album 5",
      price: 70,
      imageUrl: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      ],
      Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
      reviews: [],
      bankOffers: [],
      purchases: 500,
    },
    {
      id: 6,
      title: "Album 6",
      price: 75,
      imageUrl: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      ],
      Devices: ["CD", "DVD", "Pendrive", "Memory-Card", "Hard-Drive"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at leo dapibus, viverra nisl eget, luctus ipsum. Integer ut metus quis nulla tristique posuere.",
      reviews: [],
      bankOffers: [],
      purchases: 500,
    },
    // Add other products here...
  ];

  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const {
    title,
    price,
    imageUrl,
    Devices,
    description,
    reviews,
    bankOffers,
    purchases,
  } = product;

  return (
    <>
    <h4 className="head-title">{title}</h4>
    <Container className="container-main">
      <Row xs={2} md={4} lg={6}>
        <Col>
          {imageUrl.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={title}
              className="image-sizes"
            />
          ))}
          </Col>
          <Col>
            <img
              src={imageUrl[0]} // Displaying the first image in the array
              alt={title}
              className="product-image"
            />
          </Col>
          <Col className="mx-auto" style={{width:'50vw'}}>
            <Container className="product-detail-container">
              <p>No. of Purchases:- {purchases}</p>
              <p>
                Price:- <Badge className="badge">Rs. {price}</Badge>
              </p>
              <p>About the product:- {description}</p>
              <p>
                Devices available on:-{" "}
                {Devices.map((size, index) => (
                  <h6 key={index} className="product-size-item">
                    <Badge variant="secondary" className="badge">
                      {size}
                    </Badge>
                  </h6>
                ))}
              </p>
              <p>
                Reviews:-{" "}
                {reviews.map((review) => (
                  <li key={review.id} className="review-item">
                    <strong>{review.author}</strong>: {review.comment}
                  </li>
                ))}
              </p>
              <p>
                Bank offers:-{" "}
                {bankOffers.map((offer) => (
                  <li key={offer.id} className="product-bank-offer-item">
                    {offer.bank}: {offer.offer}
                  </li>
                ))}
              </p>
              <Button className="add-to-cart-button" onClick={() => cartCtx.addToCart(product)}>Add to Cart</Button>
            </Container>
          </Col>
        </Row>
      </Container>
      <div style={{marginTop:'1rem'}}>

      </div>
      <Footer/>
    </>
  );
};


export default ProductPage;
