import React from 'react';
import { Clock, Truck, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fresh, Hot Pizza
              <span className="block text-orange-300">Delivered Fast</span>
            </h1>
            <p className="text-xl mb-8 text-red-100">
              Hand-tossed perfection with premium ingredients. From our wood-fired oven to your door in 30 minutes or less.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#menu"
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Order Now
              </a>
              <a
                href="#about"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8">
              <img
                src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Delicious pizza"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-orange-300" />
                  <p className="text-sm font-medium">30 Min Delivery</p>
                </div>
                <div className="text-center">
                  <Truck className="w-8 h-8 mx-auto mb-2 text-orange-300" />
                  <p className="text-sm font-medium">Free Delivery</p>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 mx-auto mb-2 text-orange-300" />
                  <p className="text-sm font-medium">5-Star Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;