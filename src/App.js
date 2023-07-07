import React from "react";
import ProductList from "./Components/ProductList/ProductList";
import Header from "./Components/Layout/Header";
import CartContextProvider from "./Components/Cart/CartContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./Components/Routes/About";
import HomePage from "./Components/Routes/Home";
import Footer from "./Components/Layout/Footer";
const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <Header />
        <Routes>
        <Route path="/Home" element={<HomePage />}></Route>
          <Route path="/Store" element={<ProductList />}></Route>
          <Route path="/About" element={<AboutPage />}></Route>
        </Routes>
      </Router>
      {/* <ProductList /> */}
      <Footer />
    </CartContextProvider>
  );
};

export default App;
