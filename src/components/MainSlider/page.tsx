'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="container mx-auto my-6 px-4">
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        <div className="w-full lg:w-3/4">
          <Slider {...settings}>
            <div className="relative h-[400px]">
              <img 
                src="https://freshcart.codescandy.com/assets/images/slider/slider-image-1.jpg" 
                className="w-full h-full object-cover rounded-lg" 
                alt="fresh veggies" 
              />
              <div className="absolute top-1/2 left-10 -translate-y-1/2">
                <span className="bg-yellow-400 text-[10px] font-bold px-2 py-1 rounded uppercase">Exclusive Offer</span>
                <h1 className="text-4xl font-bold text-gray-800 mt-3">Fresh Products <br/> Delivered to your Door</h1>
                <p className="text-gray-500 mt-2">Get 20% off your first order</p>
                <button className="bg-black text-white px-6 py-2 rounded-lg mt-5 font-medium hover:bg-green-600 transition-all">Shop Now</button>
              </div>
            </div>
          </Slider>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          <img src="https://freshcart.codescandy.com/assets/images/slider/ad-banner-1.jpg" className="w-full h-[192px] object-cover rounded-lg" alt="ad" />
          <img src="https://freshcart.codescandy.com/assets/images/slider/ad-banner-2.jpg" className="w-full h-[192px] object-cover rounded-lg" alt="ad" />
        </div>
      </div>
    </section>
  );
}