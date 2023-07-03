//App.js
import React from "react";
import ProductList from "./Components/ProductList/ProductList";
import Header from "./Components/Layout/Header";
import CartContextProvider from "./Components/Cart/CartContextProvider";
const App = () => {
  return (
    <CartContextProvider> 
       <Header/>
       {/* <Cart/> */}
       <ProductList/>
    </CartContextProvider>
  )
}
export default App;