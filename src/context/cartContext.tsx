'use client';
import axios from "axios";
import { createContext, useState, useEffect } from "react";

export let CartContext = createContext<any>(null);

export default function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [cartCount, setCartCount] = useState(0);

    // دالة إضافة للمنتجات
    async function addToCart(productId: string) {
        const token = typeof window !== 'undefined' ? localStorage.getItem('userToken') : "";
        const currentHeaders = { token: token || "" };

        try {
            let { data } = await axios.post(
                "https://ecommerce.routemisr.com/api/v1/cart",
                { productId },
                { headers: currentHeaders }
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