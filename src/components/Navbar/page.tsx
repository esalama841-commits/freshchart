'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import { CartContext } from '../../context/cartContext';

export default function Navbar() {
  let { cartCount } = useContext(CartContext);

  return (
    <header className="w-full font-sans">
      <div className="bg-gray-100 py-2 px-6 text-[12px] text-gray-600 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-truck text-green-600"></i> Free Shipping on Orders 500 EGP
            </span>
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-box text-green-600"></i> New Arrivals Daily
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-phone"></i> +1 (800) 123-4567
            </span>
            <span className="h-4 w-[1px] bg-gray-300"></span>
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-envelope"></i> support@freshcart.com
            </span>
            <span className="h-4 w-[1px] bg-gray-300"></span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><i className="fa-solid fa-user"></i> Usama</span>
              <button className="flex items-center gap-1 hover:text-red-600">
                <i className="fa-solid fa-right-from-bracket"></i> Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white py-4 px-6 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-8 flex-1">
            <Link href="/" className="text-2xl font-bold text-green-600 flex items-center">
               <i className="fa-solid fa-cart-shopping mr-2"></i> FreshCart
            </Link>
            
            <div className="relative w-full max-w-lg">
              <input
               type="text" 
                placeholder="Search for products, brands and more..." 
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-green-500 text-sm"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-green-600 text-white rounded-r-lg">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-8 ml-8">
            <ul className="flex gap-5 text-gray-700 font-medium text-sm items-center">
              <li><Link href="/" className="hover:text-green-600">Home</Link></li>
              <li><Link href="/shop" className="hover:text-green-600">Shop</Link></li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-green-600">
                Categories <i className="fa-solid fa-chevron-down text-[10px]"></i>
              </li>
              <li><Link href="/brands" className="hover:text-green-600">Brands</Link></li>
            </ul>

            <div className="flex items-center gap-2 border-l pl-5 border-gray-200">
              <i className="fa-solid fa-headset text-2xl text-gray-400"></i>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] text-gray-400">Support</span>
                <span className="text-sm font-bold">24/7 Help</span>
              </div>
            </div>

            <div className="flex items-center gap-5 text-gray-600 border-l pl-5 border-gray-200">
              <i className="fa-regular fa-heart text-xl cursor-pointer hover:text-green-600"></i>
              <Link href="/cart" className="relative">
                <i className="fa-solid fa-cart-shopping text-xl hover:text-green-600"></i>
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  {cartCount}
                  </span>
              </Link>
              <i className="fa-regular fa-calendar text-xl cursor-pointer hover:text-green-600"></i>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}