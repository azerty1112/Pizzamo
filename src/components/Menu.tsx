import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import MenuModal from './MenuModal';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Margherita Classic',
    description: 'Fresh mozzarella, tomato sauce, basil, extra virgin olive oil',
    price: 16.99,
    image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pizza',
    popular: true
  },
  {
    id: '2',
    name: 'Pepperoni Supreme',
    description: 'Double pepperoni, mozzarella cheese, marinara sauce',
    price: 19.99,
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pizza',
    popular: true
  },
  {
    id: '3',
    name: 'Meat Lovers',
    description: 'Pepperoni, sausage, ham, bacon, ground beef',
    price: 24.99,
    image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pizza'
  },
  {
    id: '4',
    name: 'Veggie Delight',
    description: 'Bell peppers, mushrooms, onions, olives, tomatoes',
    price: 18.99,
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pizza'
  },
  {
    id: '5',
    name: 'BBQ Chicken',
    description: 'Grilled chicken, BBQ sauce, red onions, cilantro',
    price: 21.99,
    image: 'https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pizza'
  },
  {
    id: '6',
    name: 'Hawaiian Paradise',
    description: 'Ham, pineapple, mozzarella, tomato sauce',
    price: 19.99,
    image: 'https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pizza'
  },
  {
    id: '7',
    name: 'Garlic Bread',
    description: 'Fresh baked bread with garlic butter and herbs',
    price: 7.99,
    image: 'https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'appetizers'
  },
  {
    id: '8',
    name: 'Buffalo Wings',
    description: '10 pieces with your choice of sauce',
    price: 12.99,
    image: 'https://images.pexels.com/photos/12737651/pexels-photo-12737651.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'appetizers'
  },
  {
    id: '9',
    name: 'Caesar Salad',
    description: 'Romaine lettuce, croutons, parmesan, caesar dressing',
    price: 9.99,
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'salads'
  },
  {
    id: '10',
    name: 'Coca Cola',
    description: 'Refreshing classic cola',
    price: 2.99,
    image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'drinks'
  }
];

const categories = [
  { id: 'all', name: 'All Items' },
  { id: 'pizza', name: 'Pizzas' },
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'salads', name: 'Salads' },
  { id: 'drinks', name: 'Drinks' }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const { dispatch } = useCart();

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    if (item.category === 'pizza') {
      setSelectedItem(item);
    } else {
      dispatch({ type: 'ADD_ITEM', payload: item });
    }
  };

  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Delicious Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafted with the finest ingredients and made fresh to order
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.popular && (
                  <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">${item.price}</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <MenuModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
};

export default Menu;