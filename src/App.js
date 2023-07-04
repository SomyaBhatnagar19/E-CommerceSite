import React from "react";
import ProductList from "./Components/ProductList/ProductList";
import Header from "./Components/Layout/Header";
import CartContextProvider from "./Components/Cart/CartContextProvider";

const App = () => {
  return (
    <CartContextProvider>
      <Header />
      <ProductList />
    </CartContextProvider>
  );
};

export default App;