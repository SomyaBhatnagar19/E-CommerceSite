import React from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import ProductList from "./Components/Products/ProductList";

const App = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div style={{backgroundColor:'#f2f2f2'}}>
      <Header />
      
      <h3 style={{textAlign:'center', marginTop: '2rem', fontFamily:'monospace', fontWeight:'bold'}}>Music</h3>
        {productsArr.map((product, id) => (
          <ProductList key={id} {...product} />
        ))}
      
    </div>
  );
};

export default App;
