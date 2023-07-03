import React, {createContext} from "react";

//the below context will be used share the cart state & functions across the components.
export const CartContext = createContext(
    { cartItems: [], totalQuantity: 0});
