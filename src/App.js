// // import React from "react";
// // import ProductList from "./Components/ProductList/ProductList";
// // import Header from "./Components/Layout/Header";
// // import CartContextProvider from "./Components/Cart/CartContextProvider";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import AboutPage from "./Components/Routes/About";
// // import HomePage from "./Components/Routes/Home";
// // // import Footer from "./Components/Layout/Footer";
// // import ContactUs from "./Components/Routes/ContactUs";
// // import ProductPage from './Components/Routes/ProductPage';
// // const App = () => {
// //   return (
// //     <CartContextProvider>
// //       <Router>
// //         <Header />
// //         <Routes>
// //           <Route path="/Home" element={<HomePage />} />
// //           <Route path="/Store" element={<ProductList />} />
// //           <Route path="/About" element={<AboutPage />} />
// //           <Route path="/ContactUs" element={<ContactUs />} />
// //           {/* <Route path="/products/:productId" element={<ProductPage />} /> */}
// //           <Route path="/:productId" element={<ProductPage />} />
// //         </Routes>
// //       </Router>
// //     </CartContextProvider>
// //   );
// // };


// // export default App;
// // App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Components/Layout/Header";
// import CartContextProvider from "./Components/Cart/CartContextProvider";
// import HomePage from "./Components/Routes/Home";
// import AboutPage from "./Components/Routes/About";
// import ContactUs from "./Components/Routes/ContactUs";
// import ProductList from "./Components/ProductList/ProductList";
// import ProductPage from "./Components/Routes/ProductPage";
// import LoginPage from "./Components/Routes/LoginPage";
// const App = () => {
//   return (
//     <CartContextProvider>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/Home" element={<HomePage />} />
//           <Route path="/Store" element={<ProductList />} />
//           <Route path="/About" element={<AboutPage />} />
//           <Route path="/ContactUs" element={<ContactUs />} />
//           <Route path="/products/:productId" element={<ProductPage />} />
//           <Route path="/Login" element={<LoginPage />}/>
//         </Routes>
//       </Router>
//     </CartContextProvider>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header";
// import CartContextProvider from "./Components/Cart/CartContextProvider";
import HomePage from "./Components/Routes/Home";
import AboutPage from "./Components/Routes/About";
import ContactUs from "./Components/Routes/ContactUs";
import ProductList from "./Components/ProductList/ProductList";
import ProductPage from "./Components/Routes/ProductPage";
import LoginPage from "./Components/Routes/LoginPage";
import AuthContextProvider from "./Components/Store/AuthContextProvider";
// import Footer from "./Components/Layout/Footer";
const App = () => {
  return (
    <AuthContextProvider>
      {/* <CartContextProvider> */}
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Store" element={<ProductList />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/:productId" element={<ProductPage />} />
            <Route path="/Login" element={<LoginPage />} />
          </Routes>
        </Router>
        {/* <Footer/> */}
      {/* </CartContextProvider> */}
    </AuthContextProvider>
  );
};

export default App;
