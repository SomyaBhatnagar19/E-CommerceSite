//App.js
import React from "react";
import ProductList from "./Components/ProductList/ProductList";
import Header from "./Components/Layout/Header";

const App = () => {
  return (
    <div> 
       <Header/>
       <ProductList/>
    </div>
  )
}
export default App;