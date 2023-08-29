import React, { createContext, useState} from "react";
import axios from "axios";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  username: "",
  userEmail: "",
  cartItems: [],
  loginHandler: (token) => {},
  logoutHandler: () => {},
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


  const userEmail = localStorage.getItem("email") || "";
  const username = userEmail ? extractUsernameFromEmail(userEmail) : "";

  
 // Add debug statements to the loginHandler function
  const loginHandler = (token, enteredEmail) => {
    console.log("Setting token:", token);
    setToken(token);
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("email", enteredEmail);
      localStorage.setItem("username", extractUsernameFromEmail(enteredEmail)); // Store the username after successful login
      console.log("Token and username stored in local storage.");
    } else {
      console.log("No token provided. Token not stored.");
    }
  };

  
  const logoutHandler = () => {
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
 
    setCartToggle(false); // Reset the cartToggle when logging out
  };
  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   if (storedToken) {
  //     setToken(storedToken);
  //   }
  // }, []);

  const storedToken = localStorage.getItem("token");

  const addToCartHandler = async (item) => {
    const existingProduct = cartItems.find(
            (product) => product.title === item.title
    );
    console.log("existing items in the cart are : " + existingProduct);
      
          try {
            const response = await axios.post(
              `https://crudcrud.com/api/b6abe1c3c4ce430e878be72bcdfa85dc/${username}`,
              { product: item },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
      
            console.log("post request response is:", response.data);
            console.log("post request data is sent to : ", username);
      
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
                { ...item, quantity: item.quantity, imageUrl: item.imageUrl },
              ]);
            }
    
      
          } catch (error) {
            console.log("error in the post request:", error);
          }
  };

  const handleCartClose = () => {
    setCartToggle(false); 
  };

  const removeItemFromCart = async (itemTitle) => {
    const updatedCartItems = cartItems.filter(
      (product) => product.title !== itemTitle
    );
  
    // Update the cart items in the state
    setCartItems(updatedCartItems);
  
    try {
      await axios.delete(
        `https://crudcrud.com/api/b6abe1c3c4ce430e878be72bcdfa85dc/${username}/${itemTitle}`
      );
  
      console.log("Item removed from cart:", itemTitle);
    } catch (error) {
      console.log("Error removing item from cart:", error);
    }
  };
  const userIsAuthenticated = !!token;

  const contextValue = {
    token: storedToken || token,
    isAuthenticated: userIsAuthenticated,
    userEmail: userEmail,
    username: username,
    loginHandler,
    logoutHandler,
    cartItems: cartItems || [],
    setCartItems: setCartItems,
    addToCart: addToCartHandler,
    cartDisplayHandler: () => setCartToggle((prevToggle) => !prevToggle), // Add cartDisplayHandler function
    cartToggle: cartToggle, // Add cartToggle value
    handleCartClose,
    removeItemFromCart: removeItemFromCart,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;