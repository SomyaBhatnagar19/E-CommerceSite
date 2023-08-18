// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const AuthContext = createContext({
//   token: "",
//   isAuthenticated: false,
//   username: "",
//   userEmail: "", 
//   cartItems: [],
//   login: (token) => {},
//   logout: () => {},
//   setCartItems: () => {},
//   addToCart: (item) => {},
// });

// const AuthContextProvider = (props) => {
//   const [token, setToken] = useState("");
//   const [cartItems, setCartItems] = useState([]);
  
//   const userEmail = localStorage.getItem('email');
  
//   const extractUsernameFromEmail = (userEmail) => {
//     // Split the email at the "@" symbol
//     const parts = userEmail.split("@");
    
//     // The username is the first part
//     const username = parts[0];
    
//     return username;
//   };
  
//   const username = userEmail ? extractUsernameFromEmail(userEmail) : "";
  
//   const loginHandler = (token) => {
//     setToken(token);

//     if (token) {
//       localStorage.setItem("token", token);
//     } else {
//       localStorage.removeItem("token");
//     }
//   };

//   const logoutHandler = () => {
//     setToken("");
//     localStorage.removeItem("token");
//   };

//   useEffect(() => {
//     // Update the token state from localStorage when the component mounts
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   const addToCart = async (item) => {
//     const existingProduct = cartItems.find((product) => product.title === item.title);
  
//     try {
//       const response = await axios.post(`https://crudcrud.com/api/fd45c4d4e5304b94a168de04d67a0e9c/${username}`, { product: item }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       console.log('post request response is:', response.data);
  
//       if (existingProduct) {
//         const updatedCartItems = cartItems.map((product) =>
//           product.title === item.title
//             ? { ...product, quantity: product.quantity + 1 }
//             : product
//         );
//         setCartItems(updatedCartItems);
//       } else {
//         setCartItems([...cartItems, { ...item, quantity: 1, imageUrl: item.imageUrl }]);
//       }
  
//       // setShowAlert(true);
//       setTimeout(() => {
//         // setShowAlert(false);
//       }, 3000);
//     } catch (error) {
//       console.log('error in the post request:', error);
//     }
//   };

//   const userIsAuthenticated = !!token;

//   const contextValue = {
//     token: token,
//     isAuthenticated: userIsAuthenticated,
//     userEmail: userEmail,
//     username: username,
//     login: loginHandler,
//     logout: logoutHandler,
//     cartItems: cartItems || [],
//     setCartItems,
//     addToCart,
//   };

 
//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;
import React, { useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const AuthContext = createContext({
  cartData: [],
  cartToggle: false,
  token: "",
  userEmail: "",
  username: "",
  loginHandler: (token) => {},
  logoutHandler: () => {},
  addToCart: (item) => {},
  removeFromCart: (title) => {},
  cartDisplayHandler: () => {},
  handleCartClose: () => {},
  setCartData: () => {},
});

const AuthContextProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const [token, setToken] = useState("");
  const [cartToggle, setCartToggle] = useState(false);

  const cartDisplayHandler = () => {
    setCartToggle(!cartToggle);
  };

  const userEmail = localStorage.getItem("email");

  const extractUsernameFromEmail = (userEmail) => {
    // Split the email at the "@" symbol
    const parts = userEmail.split("@");
    // The username is the first part
    const username = parts[0];
    return username;
  };

  const username = userEmail ? extractUsernameFromEmail(userEmail) : "";

  const url = `https://crudcrud.com/api/6c296ff867fc4bd1a1b1f663a4736270/${username}`;

  const addToCart = (item) => {
    const existingProduct = cartData.find(
      (existingItem) => existingItem.title === item.title
    );

    axios
      .post(
        url,
        { product: item },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("post request response is:", response.data);
        if (existingProduct) {
          // Update existing item's quantity
          setCartData((prevCartData) =>
            prevCartData.map((existingItem) =>
              existingItem.title === item.title
                ? { ...existingItem, quantity: existingItem.quantity + 1 }
                : existingItem
            )
          );
        } else {
          // Add new item to the cart
          setCartData((prevCartData) => [
            ...prevCartData,
            { ...item, quantity: 1, imageUrl: item.imageUrl },
          ]);
        }
      })
      .catch((error) => {
        console.log("error in the post request:", error);
        // Handle error as needed
      });
  };

  const loginHandler = (token) => {
    setToken(token);
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  };

  const responseToken = localStorage.getItem("token");
  const responseUserName = localStorage.getItem("username");
  const responseUserEmail = localStorage.getItem("email");

  const logoutHandler = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const removeFromCart = (title) => {
    setCartData((prevCartData) => {
      const updatedCartData = prevCartData.filter(
        (item) => item.title !== title
      );
      return updatedCartData;
    });
  };

  const handleCartClose = () => {
    setCartToggle(!cartToggle);
  };

  const contextValue = {
    cartData: cartData,
    cartToggle: cartToggle,
    token: responseToken || token,
    userEmail: responseUserEmail || userEmail,
    username: responseUserName || username,
    loginHandler,
    logoutHandler,
    addToCart,
    removeFromCart,
    cartDisplayHandler,
    handleCartClose,
    setCartData,
  };

  console.log("context value is : " + JSON.stringify(contextValue));

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
