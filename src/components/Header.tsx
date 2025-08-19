import React from 'react';
import { ShoppingCart, Phone, Clock, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { state, dispatch } = useCart();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>(555) 123-PIZZA</span>
              </div>
              <div className="hidden sm:flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>Open: 11 AM - 11 PM</span>
              </div>
              <div className="hidden md:flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Free delivery within 5 miles</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="bg-red-600 text-white p-3 rounded-full mr-3">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">🍕</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tony's Pizza</h1>
              <p className="text-sm text-gray-600">Authentic Italian Since 1985</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact</a>
          </nav>

          <button
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            className="relative bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="font-medium">Cart</span>
            {state.items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
                {state.items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;