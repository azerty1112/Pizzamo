import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface MenuModalProps {
  item: MenuItem;
  onClose: () => void;
}

const sizes = [
  { id: 'small', name: 'Small (10")', priceMultiplier: 0.8 },
  { id: 'medium', name: 'Medium (12")', priceMultiplier: 1 },
  { id: 'large', name: 'Large (14")', priceMultiplier: 1.3 },
  { id: 'xlarge', name: 'Extra Large (16")', priceMultiplier: 1.6 }
];

const crusts = [
  { id: 'thin', name: 'Thin Crust', price: 0 },
  { id: 'thick', name: 'Thick Crust', price: 2 },
  { id: 'stuffed', name: 'Stuffed Crust', price: 4 }
];

const toppings = [
  { id: 'pepperoni', name: 'Pepperoni', price: 2.50 },
  { id: 'mushrooms', name: 'Mushrooms', price: 1.50 },
  { id: 'sausage', name: 'Italian Sausage', price: 2.50 },
  { id: 'peppers', name: 'Bell Peppers', price: 1.50 },
  { id: 'onions', name: 'Red Onions', price: 1.00 },
  { id: 'olives', name: 'Black Olives', price: 1.50 },
  { id: 'bacon', name: 'Bacon', price: 3.00 },
  { id: 'chicken', name: 'Grilled Chicken', price: 3.50 }
];

const MenuModal = ({ item, onClose }: MenuModalProps) => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedCrust, setSelectedCrust] = useState('thin');
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const { dispatch } = useCart();

  const calculatePrice = () => {
    const sizeMultiplier = sizes.find(s => s.id === selectedSize)?.priceMultiplier || 1;
    const crustPrice = crusts.find(c => c.id === selectedCrust)?.price || 0;
    const toppingsPrice = selectedToppings.reduce((sum, toppingId) => {
      const topping = toppings.find(t => t.id === toppingId);
      return sum + (topping?.price || 0);
    }, 0);
    
    return (item.price * sizeMultiplier) + crustPrice + toppingsPrice;
  };

  const handleToppingToggle = (toppingId: string) => {
    setSelectedToppings(prev =>
      prev.includes(toppingId)
        ? prev.filter(id => id !== toppingId)
        : [...prev, toppingId]
    );
  };

  const handleAddToCart = () => {
    const size = sizes.find(s => s.id === selectedSize)?.name;
    const crust = crusts.find(c => c.id === selectedCrust)?.name;
    const toppingNames = selectedToppings.map(id => 
      toppings.find(t => t.id === id)?.name
    ).filter(Boolean) as string[];

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...item,
        price: calculatePrice(),
        size,
        crust,
        toppings: toppingNames
      }
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h2>
          <p className="text-gray-600 mb-6">{item.description}</p>

          {/* Size selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose Size</h3>
            <div className="grid grid-cols-2 gap-3">
              {sizes.map((size) => (
                <label
                  key={size.id}
                  className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                    selectedSize === size.id
                      ? 'border-red-600 bg-red-50'
                      : 'border-gray-300 hover:border-red-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="size"
                    value={size.id}
                    checked={selectedSize === size.id}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{size.name}</span>
                    <span className="text-red-600 font-bold">
                      ${(item.price * size.priceMultiplier).toFixed(2)}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Crust selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose Crust</h3>
            <div className="space-y-2">
              {crusts.map((crust) => (
                <label
                  key={crust.id}
                  className={`border rounded-lg p-3 cursor-pointer transition-colors flex justify-between items-center ${
                    selectedCrust === crust.id
                      ? 'border-red-600 bg-red-50'
                      : 'border-gray-300 hover:border-red-300'
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="crust"
                      value={crust.id}
                      checked={selectedCrust === crust.id}
                      onChange={(e) => setSelectedCrust(e.target.value)}
                      className="sr-only"
                    />
                    <span className="font-medium">{crust.name}</span>
                  </div>
                  <span className="text-red-600 font-bold">
                    {crust.price > 0 ? `+$${crust.price.toFixed(2)}` : 'Free'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Toppings selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Extra Toppings</h3>
            <div className="grid grid-cols-2 gap-2">
              {toppings.map((topping) => (
                <label
                  key={topping.id}
                  className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                    selectedToppings.includes(topping.id)
                      ? 'border-red-600 bg-red-50'
                      : 'border-gray-300 hover:border-red-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedToppings.includes(topping.id)}
                    onChange={() => handleToppingToggle(topping.id)}
                    className="sr-only"
                  />
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{topping.name}</span>
                    <span className="text-red-600 font-bold text-sm">+${topping.price}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Add to cart button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-red-600 text-white py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors"
          >
            Add to Cart - ${calculatePrice().toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;