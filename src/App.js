import React from "react";
import ProductList from "./Components/ProductList/ProductList";
import Header from "./Components/Layout/Header";
import CartContextProvider from "./Components/Cart/CartContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./Components/Routes/About";

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <Header />
        <Routes>
        <Route path="/Store" element={<ProductList />}></Route>
          <Route path="/About" element={<AboutPage />}></Route>
        </Routes>
      </Router>
      {/* <ProductList /> */}
    </CartContextProvider>
  );
};

export default App;
