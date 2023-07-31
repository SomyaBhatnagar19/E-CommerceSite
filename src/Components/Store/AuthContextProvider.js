import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  login: (token) => {},
  logout: () => {}
});

const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");

  const loginHandler = (token) => {
    setToken(token);

    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  };

  // Fetches token from local storage
  const responseToken = localStorage.getItem("token");

  const logoutHandler = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  // const userIsAuthenticated = !!token;

  // const contextValue = {
  //   token: token,
  //   isAuthenticated: userIsAuthenticated,
  //   login: loginHandler,
  //   logout: logoutHandler,
  // };
  useEffect(() => {
    // Update the token state from localStorage when the component mounts
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const userIsAuthenticated = !!token;

  const contextValue = {
    token: token,
    isAuthenticated: userIsAuthenticated,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
