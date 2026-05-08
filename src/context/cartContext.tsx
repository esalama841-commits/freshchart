'use client';
import axios from "axios";
import { createContext, useState } from "react";

export let CartContext = createContext<any>(null);

export default function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [cartCount, setCartCount] = useState(0);
    let headers = { token: localStorage.getItem('userToken') || '' };

    async function addToCart(productId: string) {
        try {
            let { data } = await axios.post(
              "https://ecommerce.routemisr.com/api/v1/cart",
                { productId },
                { headers : headers}
            );
            setCartCount(data.numOfCartItems);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CartContext.Provider value={{ cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}