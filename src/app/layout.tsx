import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
import CartContextProvider from "@/context/cartContext";
import AuthProvider from "../context/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreshCart",
  description: "E-commerce project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartContextProvider>
            <Navbar />
            {children}
          </CartContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}