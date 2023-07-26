import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
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

  const contextValue = {
    token: responseToken || token,
    login: loginHandler,
    logout: logoutHandler
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
