import { useState } from "react";
import { ChevronRight, ChevronLeft, ShoppingBag } from 'lucide-react';

const PopularFoods = () => {
  const [startIndex, setStartIndex] = useState(0);

  const menuData = [
    {
      img: "/api/placeholder/176/176",
      title: 'Spicy Burger',
      description: 'Get 20% Discount on your First Order.',
      price: '$10.99',
      category: 'Burger',
    },
    {
      img: "/api/placeholder/176/176",
      title: 'French Fry',
      description: 'Get 20% Discount on your First Order.',
      price: '$10.99',
      category: 'FrenchFry',
    },
    {
      img: "/api/placeholder/176/176",
      title: 'Pasta',
      description: 'Get 20% Discount on your First Order.',
      price: '$10.99',
      category: 'Pasta',
    },
    {
      img: "/api/placeholder/176/176",
      title: 'Sandwich',
      description: 'Get 20% Discount on your First Order.',
      price: '$10.99',
      category: 'Sandwich',
    },
    {
      img: "/api/placeholder/176/176",
      title: 'Cold Drinks',
      description: 'Get 20% Discount on your First Order.',
      price: '$10.99',
      category: 'Cold Drinks',
    },
    {
      img: "/api/placeholder/176/176",
      title: 'Combo 1',
      description: 'Get 20% Discount on your First Order.',
      price: '$10.99',
      category: 'Combo',
    },
    {
      img: "/api/placeholder/176/176",
      title: 'Combo 1',
      description: 'Get 20% Discount on your First Order.',
      price: '$10.99',
      category: 'Combo',
    },
    {
      img: "/api/placeholder/176/176",
      title: 'Combo 1',
      description: 'Get 20% Discount on your First Order.',
      price: '$10.99',
      category: 'Combo',
    },
    {
      img: "/api/placeholder/176/176",
      title: 'Combo 1',
      description: 'Get 20% Discount on your First Order.',
      price: '$10.99',
      category: 'Combo',
    },
  ];

  const handleNext = () => {
    if (startIndex + 4 < menuData.length) {
      setStartIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleFoodClick = (title: string) => {
    console.log(`Clicked on ${title}`); // Replace with your desired click handling
  };

  type MenuItem = {
    img: string;
    title: string;
    description: string;
    price: string;
    category: string;
  };

  const handleAddToCart = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation(); // Prevent triggering the parent click
    console.log(`Added ${item.title} to cart`); // Replace with your cart logic
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Popular Foods</h2>
        <div className="relative">
            <div className="flex items-center">
                {/* Previous button */}
                <button 
                    onClick={handlePrev}
                    className={`p-2 rounded-full bg-red-600 text-white absolute left-0 z-10 transform -translate-y-1/2 top-1/2 ${
                    startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
                    }`}
                    disabled={startIndex === 0}
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Items container */}
                <div className="flex space-x-6 overflow-hidden mx-16">
                    {menuData.slice(startIndex, startIndex + 4).map((menu, index) => (
                    <div
                        key={index}
                        onClick={() => handleFoodClick(menu.title)}
                        className="flex-shrink-0 w-64 border border-gray-300 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                    >
                        <img 
                        src={menu.img} 
                        alt={menu.title} 
                        className="w-44 h-44 object-cover mx-auto rounded-lg"
                        />
                        <h3 className="text-xl font-bold mt-3 mb-2">{menu.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{menu.description}</p>
                        <p className="text-red-600 font-bold text-lg mb-3">{menu.price}</p>
                        <button 
                        onClick={(e) => handleAddToCart(e, menu)}
                        className="w-full py-2 px-4 rounded-full border border-gray-400 flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors"
                        >
                        <ShoppingBag className="w-5 h-5" />
                        Add to Cart
                        </button>
                    </div>
                    ))}
                </div>

                {/* Next button */}
                <button 
                    onClick={handleNext}
                    className={`p-2 rounded-full bg-red-600 text-white absolute right-0 z-10 transform -translate-y-1/2 top-1/2 ${
                    startIndex + 4 >= menuData.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
                    }`}
                    disabled={startIndex + 4 >= menuData.length}
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: Math.ceil((menuData.length - 3) / 1) }).map((_, idx) => (
                <button
                key={idx}
                className={`w-2 h-2 rounded-full ${
                    idx === startIndex ? 'bg-red-600' : 'bg-gray-300'
                }`}
                onClick={() => setStartIndex(idx)}
                />
            ))}
            </div>
        </div>
    </div>
    );
};

export default PopularFoods;