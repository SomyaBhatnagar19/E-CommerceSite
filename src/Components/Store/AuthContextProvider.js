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

//   const userEmail = localStorage.getItem("email");

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
//     const existingProduct = cartItems.find(
//       (product) => product.title === item.title
//     );

//     try {
//       const response = await axios.post(
//         `https://crudcrud.com/api/a6fc22bebc8e4405b6cd658b5aa4b6a8/${username}`,
//         { product: item },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("post request response is:", response.data);

//       if (existingProduct) {
//         const updatedCartItems = cartItems.map((product) =>
//           product.title === item.title
//             ? { ...product, quantity: product.quantity + 1 }
//             : product
//         );
//         setCartItems(updatedCartItems);
//       } else {
//         setCartItems([
//           ...cartItems,
//           { ...item, quantity: 1, imageUrl: item.imageUrl },
//         ]);
//       }

//       // setShowAlert(true);
//       setTimeout(() => {
//         // setShowAlert(false);
//       }, 3000);
//     } catch (error) {
//       console.log("error in the post request:", error);
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
//     loginHandler: (token) => {},
//     // token: "",
//     // isAuthenticated: userIsAuthenticated,
//     // username: username,
//     // userEmail: userEmail,
//     // cartItems: cartItems || [],
//     // login: (token) => {},
//     // logout: () => {},
//     // setCartItems: () => {},
//     // addToCart: (item) => {},
//     // loginHandler: (token) => {},
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;


// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// // Create the initial context with default values and functions
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

// // AuthContextProvider component
// const AuthContextProvider = (props) => {
//   // State to store the authentication token
//   const [token, setToken] = useState("");

//   // State to store cart items
//   const [cartItems, setCartItems] = useState([]);

//   // Get the user's email from local storage
//   const userEmail = localStorage.getItem("email");

//   // Extract username from the email
//   const extractUsernameFromEmail = (userEmail) => {
//     const parts = userEmail.split("@");
//     const username = parts[0];
//     return username;
//   };

//   // Derive username from the email or set it as an empty string
//   const username = userEmail ? extractUsernameFromEmail(userEmail) : "";

//   // Function to handle user login and update the token
//   const loginHandler = (token) => {
//     setToken(token);

//     if (token) {
//       localStorage.setItem("token", token);
//     } else {
//       localStorage.removeItem("token");
//     }
//   };

//   // Function to handle user logout and remove the token
//   const logoutHandler = () => {
//     setToken("");
//     localStorage.removeItem("token");
//   };

//   // Update token state from localStorage on component mount
//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   // Function to handle adding items to the cart
//   const addToCartHandler = async (item) => {
//     const existingProduct = cartItems.find(
//       (product) => product.title === item.title
//     );

//     try {
//       const response = await axios.post(
//         `https://crudcrud.com/api/8ba7105e18f5464784fbfdc6b77a0890
//         /${username}`,
//         { product: item },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("post request response is:", response.data);

//       if (existingProduct) {
//         const updatedCartItems = cartItems.map((product) =>
//           product.title === item.title
//             ? { ...product, quantity: product.quantity + 1 }
//             : product
//         );
//         setCartItems(updatedCartItems);
//       } else {
//         setCartItems([
//           ...cartItems,
//           { ...item, quantity: 1, imageUrl: item.imageUrl },
//         ]);
//       }

//       // Handle other actions or notifications

//     } catch (error) {
//       console.log("error in the post request:", error);
//       // Handle error here
//     }
//   };

//   // Check if the user is authenticated based on the presence of a token
//   const userIsAuthenticated = !!token;

//   // Create the context value object
//   const contextValue = {
//     token: token,
//     isAuthenticated: userIsAuthenticated,
//     userEmail: userEmail,
//     username: username,
//     login: loginHandler,
//     logout: logoutHandler,
//     cartItems: cartItems || [],
//     setCartItems: setCartItems,
//     addToCart: addToCartHandler,
//     loginHandler: (token) => {},
//   };

//   // Provide the context value to children components
//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;



import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  username: "",
  userEmail: "",
  cartItems: [],
  login: (token) => {},
  logout: () => {},
  setCartItems: () => {},
  addToCart: (item) => {},
  cartDisplayHandler: () => {},
});

const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartToggle, setCartToggle] = useState(false); // Add cartToggle state

  const extractUsernameFromEmail = (userEmail) => {
    const parts = userEmail.split("@");
    const username = parts[0];
    return username;
  };


  const userEmail = localStorage.getItem("email");
  const username = userEmail ? extractUsernameFromEmail(userEmail) : "";

  
  const loginHandler = (token) => {
    setToken(token);
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  };
  
  const logoutHandler = () => {
    setToken("");
    localStorage.removeItem("token");
    setCartToggle(false); // Reset the cartToggle when logging out
  };
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const addToCartHandler = async (item) => {
    const existingProduct = cartItems.find(
            (product) => product.title === item.title
          );
      
          try {
            const response = await axios.post(
              `https://crudcrud.com/api/8ba7105e18f5464784fbfdc6b77a0890/${username}`,
              { product: item },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
      
            console.log("post request response is:", response.data);
      
            if (existingProduct) {
              const updatedCartItems = cartItems.map((product) =>
                product.title === item.title
                  ? { ...product, quantity: product.quantity + 1 }
                  : product
              );
              setCartItems(updatedCartItems);
            } else {
              setCartItems([
                ...cartItems,
                { ...item, quantity: 1, imageUrl: item.imageUrl },
              ]);
            }
    
      
          } catch (error) {
            console.log("error in the post request:", error);
            // Handle error here
          }
  };

  const handleCartClose = () => {
    setCartToggle(false); 
  };

  const userIsAuthenticated = !!token;

  const contextValue = {
    token: token,
    isAuthenticated: userIsAuthenticated,
    userEmail: userEmail,
    username: username,
    login: loginHandler,
    loginHandler: (token) => {},
    logout: logoutHandler,
    cartItems: cartItems || [],
    setCartItems: setCartItems,
    addToCart: addToCartHandler,
    cartDisplayHandler: () => setCartToggle((prevToggle) => !prevToggle), // Add cartDisplayHandler function
    cartToggle: cartToggle, // Add cartToggle value
    handleCartClose,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
