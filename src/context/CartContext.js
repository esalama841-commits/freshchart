import { createContext, useState } from "react";

export let CartContext = createContext();

export function CartContextProvider(props) {
    const [cartCount, setCartCount] = useState(0);
    function addToCart() {
        setCartCount(prevCount => prevCount + 1);
        console.log
    }

    return <CartContext.Provider value={{ cartCount, addToCart }}>
        {props.children}
    </CartContext.Provider>
}