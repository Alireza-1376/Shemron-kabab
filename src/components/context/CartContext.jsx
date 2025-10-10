import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
   
    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCart(cartItems)
    }, [])
    return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>
}

export default CartProvider;