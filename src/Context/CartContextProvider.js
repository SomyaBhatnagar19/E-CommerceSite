import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartContextProvider = ({ children }) => {

//     //the below provides the data to the above context.
//     //this is the array store in the cart initially empty
    const [ cartItems, setCartItems ] = useState([]);
//     // //below define the state of the cart intitally set to false that is closed
//     // const [ showCart, setShowCart ] = useState(false);
//     // //function to provide the opening and closing functionality of the cart
//     // const openCart = () => {
//     //     setShowCart(true);
//     // }
//     // const closeCart = () => {
//     //     setShowCart(false);
//     // }
    
//     // //functionality to add data to the cart by pressing the Add To Cart button on the ProductList items
//     // const addItemToCart = (item) => {
//     //     setCartItems((prevItems)=>[...prevItems, item])
//     // }
//     // const removeCartItem = (item) => {
//     //     setCartItems((prevItems) => prevItems.filter((i)=> i!==item));
//     // }
    return(
        // wrapping the children components with the context provider for acessing the properties of the components
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    )
}   
export default CartContextProvider;


