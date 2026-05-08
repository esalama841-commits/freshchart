'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try{ 
      let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
      setProducts(data.data);
    } catch (error) {
      console.log("Error fetching products", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="container mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product: any) => (
          <div key={product._id} className="group border rounded-lg p-3 hover:border-green-500 hover:shadow-lg transition-all relative overflow-hidden bg-white">
            <img src={product.imageCover} className="w-full h-48 object-contain mb-4" alt={product.title} />
            <span className="text-green-600 text-xs font-semibold">{product.category.name}</span>
            <h3 className="text-sm font-bold text-gray-800 truncate mb-2">{product.title.split(' ').slice(0, 2).join(' ')}</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-bold">{product.price} EGP</span>
              <span className="text-xs text-gray-500">
                <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
                {product.ratingsAverage}
              </span>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-300 font-medium">
              + Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
