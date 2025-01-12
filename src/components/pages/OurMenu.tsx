import { useState } from "react";
import { ChevronRight, ChevronLeft, ShoppingBag } from 'lucide-react';
import { Link } from "react-router-dom";
import CtaMenu1 from "../CTA/CtaMenu1";
import Banner6 from "../banner/Banner6";
import Banner8 from "../banner/Banner8";
import Banner10 from "../banner/Banner10";
import Banner1 from "../banner/Banner1";
// import burger1 from '/src/assets/burger1.png';
// import frenchfries from '/src/assets/french-fries1.png';
// import pasta from '/src/assets/pasta1.png';
// import sandwich from '/src/assets/sandwich1.png';
// import cocacola from '/src/assets/cocacola1.png';
// import combo1 from '/src/assets/combo1.png';
// import combo2 from '/src/assets/combo2.png';
// import combo3 from '/src/assets/combo3.png';
// import pizza from '/src/assets/pizza.png';

// const menuData = [
//   {
//       img: burger1,
//       title: 'Spicy Burger',
//       description: 'Get 20% Discount on your First Order.',
//       price: '$10.99',
//       category: 'Burger',
//   },
//   {
//       img: frenchfries,
//       title: 'French Fry',
//       description: 'Get 20% Discount on your First Order.',
//       price: '$10.99',
//       category: 'FrenchFry',
//   },
//   {
//       img: pasta,
//       title: 'Pasta',
//       description: 'Get 20% Discount on your First Order.',
//       price: '$10.99',
//       category: 'Pasta',
//   },
//   {
//       img: sandwich,
//       title: 'Sandwich',
//       description: 'Get 20% Discount on your First Order.',
//       price: '$10.99',
//       category: 'Sandwich',
//   },
//   {
//       img: pizza,
//       title: 'pizza',
//       description: 'Get 20% Discount on your First Order.',
//       price: '$10.99',
//       category: 'Pizza',
//   },
//   {
//       img: cocacola,
//       title: 'Cold Drinks',
//       description: 'Get 20% Discount on your First Order.',
//       price: '$10.99',
//       category: 'Cold Drinks',
//   },
//   {
//       img: combo1,
//       title: 'Combo 1',
//       description: 'Get 20% Discount on your First Order.',
//       price: '$10.99',
//       category: 'Combo',
//   },
//   {
//       img: combo2,
//       title: 'Combo 2',
//       description: 'Get 20% Discount on your First Order.',
//       price: '$10.99',
//       category: 'Combo',
//   },
//   {
//       img: combo3,
//       title: 'Combo 3',
//       description: 'Get 20% Discount on your First Order.',
//       price: '$10.99',
//       category: 'Combo',
//   },
// ];

const MenuItem = ({ item, onFoodClick, onAddToCart }) => (
  <div
    onClick={() => onFoodClick(item.title)}
    className="flex-shrink-0 w-64 bg-white border border-gray-300 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
  >
    <img 
      src={item.img} 
      alt={item.title} 
      className="w-44 h-44 object-cover mx-auto rounded-lg"
    />
    <h3 className="text-xl font-bold mt-3 mb-2">{item.title}</h3>
    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
    <p className="text-red-600 font-bold text-lg mb-3">{item.price}</p>
    <button 
      onClick={(e) => onAddToCart(e, item)}
      className="w-full py-2 px-4 rounded-full border border-gray-400 flex items-center justify-center font-semibold gap-2 hover:bg-black hover:text-white transition-colors"
    >
      <ShoppingBag className="w-5 h-5" />
      Add to Cart
    </button>
  </div>
);

const MenuSection = ({ title, items, onFoodClick, onAddToCart }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 4 < items.length) {
      setStartIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="relative">
        <div className="flex items-center">
          <button 
            onClick={handlePrev}
            className={`p-2 rounded-full bg-red-600 text-white absolute left-0 z-1 transform -translate-y-1/2 top-1/2 ${
              startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
            }`}
            disabled={startIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex space-x-6 overflow-hidden mx-16 py-2">
            {items.slice(startIndex, startIndex + 4).map((item, index) => (
              <Link to={`/foodDetails/${item.title}`} key={index}>
              <MenuItem 
                key={index}
                item={item}
                onFoodClick={onFoodClick}
                onAddToCart={onAddToCart}
              />
              </Link>
            ))}
          </div>

          <button 
            onClick={handleNext}
            className={`p-2 rounded-full bg-red-600 text-white absolute right-0 z-1 transform -translate-y-1/2 top-1/2 ${
              startIndex + 4 >= items.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
            }`}
            disabled={startIndex + 4 >= items.length}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: Math.ceil((items.length - 3) / 1) }).map((_, idx) => (
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

const OurMenu = () => {
  const menuData = {
    popularFoods: [
      {
        img: "/src/assets/burger1.png",
        title: 'Spicy Burger',
        description: 'Get 20% Discount on your First Order.',
        price: '$10.99',
        category: 'Popular',
      },
      {
        img: "/src/assets/cocacola1.png",
        title: 'Cocacola',
        description: 'Get 20% Discount on your First Order.',
        price: '$10.99',
        category: 'Popular',
      },
      {
        img: "/src/assets/pasta1.png",
        title: 'Pasta',
        description: 'Get 20% Discount on your First Order.',
        price: '$10.99',
        category: 'Popular',
      },
      {
        img: "/src/assets/combo1.png",
        title: 'Combo 1',
        description: 'Get 20% Discount on your First Order.',
        price: '$10.99',
        category: 'Popular',
      },
      {
        img: "/src/assets/burger4.png",
        title: 'Spicy Burger',
        description: 'Get 20% Discount on your First Order.',
        price: '$10.99',
        category: 'Popular',
      },
      {
        img: "/src/assets/sandwich1.png",
        title: 'Sandwich',
        description: 'Get 20% Discount on your First Order.',
        price: '$10.99',
        category: 'Popular',
      },
      // Add more popular items...
    ],
    burgers: [
      {
        img: "/src/assets/burger1.png",
        title: 'Classic Burger',
        description: 'Juicy beef patty with fresh vegetables',
        price: '$9.99',
        category: 'Burger',
      },
      {
        img: "/src/assets/burger2.png",
        title: 'Classic Burger',
        description: 'Juicy beef patty with fresh vegetables',
        price: '$9.99',
        category: 'Burger',
      },
      {
        img: "/src/assets/burger3.png",
        title: 'Classic Burger',
        description: 'Juicy beef patty with fresh vegetables',
        price: '$9.99',
        category: 'Burger',
      },
      {
        img: "/src/assets/burger4.png",
        title: 'Classic Burger',
        description: 'Juicy beef patty with fresh vegetables',
        price: '$9.99',
        category: 'Burger',
      },
      {
        img: "/src/assets/burger5.png",
        title: 'Classic Burger',
        description: 'Juicy beef patty with fresh vegetables',
        price: '$9.99',
        category: 'Burger',
      },
      // Add more burger items...
    ],
    pizza: [
      {
        img: "/src/assets/pizza.png",
        title: 'Margherita',
        description: 'Classic Italian pizza with tomatoes and mozzarella',
        price: '$12.99',
        category: 'Pizza',
      },
      {
        img: "/src/assets/pizza.png",
        title: 'Margherita',
        description: 'Classic Italian pizza with tomatoes and mozzarella',
        price: '$12.99',
        category: 'Pizza',
      },
      {
        img: "/src/assets/pizza.png",
        title: 'Margherita',
        description: 'Classic Italian pizza with tomatoes and mozzarella',
        price: '$12.99',
        category: 'Pizza',
      },
      {
        img: "/src/assets/pizza.png",
        title: 'Margherita',
        description: 'Classic Italian pizza with tomatoes and mozzarella',
        price: '$12.99',
        category: 'Pizza',
      },
      {
        img: "/src/assets/pizza.png",
        title: 'Margherita',
        description: 'Classic Italian pizza with tomatoes and mozzarella',
        price: '$12.99',
        category: 'Pizza',
      },
      // Add more pizza items...
    ],
    pasta: [
      {
        img: "/src/assets/pasta1.png",
        title: 'Spaghetti Carbonara',
        description: 'Creamy pasta with bacon and parmesan',
        price: '$11.99',
        category: 'Pasta',
      },
      {
        img: "/src/assets/pasta1.png",
        title: 'Spaghetti Carbonara',
        description: 'Creamy pasta with bacon and parmesan',
        price: '$11.99',
        category: 'Pasta',
      },
      {
        img: "/src/assets/pasta1.png",
        title: 'Spaghetti Carbonara',
        description: 'Creamy pasta with bacon and parmesan',
        price: '$11.99',
        category: 'Pasta',
      },
      {
        img: "/src/assets/pasta1.png",
        title: 'Spaghetti Carbonara',
        description: 'Creamy pasta with bacon and parmesan',
        price: '$11.99',
        category: 'Pasta',
      },
      {
        img: "/src/assets/pasta1.png",
        title: 'Spaghetti Carbonara',
        description: 'Creamy pasta with bacon and parmesan',
        price: '$11.99',
        category: 'Pasta',
      },
      // Add more pasta items...
    ],
    sandwich: [
      {
        img: "/src/assets/sandwich1.png",
        title: 'Club Sandwich',
        description: 'Triple-decker with chicken and bacon',
        price: '$8.99',
        category: 'Sandwich',
      },
      {
        img: "/src/assets/sandwich1.png",
        title: 'Club Sandwich',
        description: 'Triple-decker with chicken and bacon',
        price: '$8.99',
        category: 'Sandwich',
      },
      {
        img: "/src/assets/sandwich1.png",
        title: 'Club Sandwich',
        description: 'Triple-decker with chicken and bacon',
        price: '$8.99',
        category: 'Sandwich',
      },
      {
        img: "/src/assets/sandwich1.png",
        title: 'Club Sandwich',
        description: 'Triple-decker with chicken and bacon',
        price: '$8.99',
        category: 'Sandwich',
      },
      {
        img: "/src/assets/sandwich1.png",
        title: 'Club Sandwich',
        description: 'Triple-decker with chicken and bacon',
        price: '$8.99',
        category: 'Sandwich',
      },
      // Add more sandwich items...
    ],
    coldDrinks: [
      {
        img: "/src/assets/cocacola1.png",
        title: 'Iced Coffee',
        description: 'Premium cold brew coffee',
        price: '$4.99',
        category: 'Drinks',
      },
      {
        img: "/src/assets/cocacola1.png",
        title: 'Iced Coffee',
        description: 'Premium cold brew coffee',
        price: '$4.99',
        category: 'Drinks',
      },
      {
        img: "/src/assets/cocacola1.png",
        title: 'Iced Coffee',
        description: 'Premium cold brew coffee',
        price: '$4.99',
        category: 'Drinks',
      },
      {
        img: "/src/assets/cocacola1.png",
        title: 'Iced Coffee',
        description: 'Premium cold brew coffee',
        price: '$4.99',
        category: 'Drinks',
      },
      {
        img: "/src/assets/cocacola1.png",
        title: 'Iced Coffee',
        description: 'Premium cold brew coffee',
        price: '$4.99',
        category: 'Drinks',
      },
      // Add more drink items...
    ],
    comboPacks: [
      {
        img: "/src/assets/combo1.png",
        title: 'Family Feast',
        description: 'Perfect combo for family of 4',
        price: '$29.99',
        category: 'Combo',
      },
      {
        img: "/src/assets/combo2.png",
        title: 'Family Feast',
        description: 'Perfect combo for family of 4',
        price: '$29.99',
        category: 'Combo',
      },
      {
        img: "/src/assets/combo3.png",
        title: 'Family Feast',
        description: 'Perfect combo for family of 4',
        price: '$29.99',
        category: 'Combo',
      },
      {
        img: "/src/assets/combo1.png",
        title: 'Family Feast',
        description: 'Perfect combo for family of 4',
        price: '$29.99',
        category: 'Combo',
      },
      {
        img: "/src/assets/combo2.png",
        title: 'Family Feast',
        description: 'Perfect combo for family of 4',
        price: '$29.99',
        category: 'Combo',
      },
      // Add more combo items...
    ],
  };

  const handleFoodClick = (title) => {
    console.log(`Clicked on ${title}`);
  };

  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    console.log(`Added ${item.title} to cart`);
  };

  return (
    <>
    <div className="bg-[url('/public/wrapper_bg.jpg')] bg-fixed">
      <div className="bg-gray-100 bg-opacity-90 py-4">
        <div className="pb-10 pt-4 max-w-7xl mx-auto px-4 bg-white">
          <div className="bg-[url('/public/Banners/MenuBanner2.jpg')] bg-cover bg-center h-[250px] w-full flex justify-center items-center rounded-xl mb-4 pl-24">
            <h1 className="text-6xl font-extrabold text-white">Our <span className="text-[#ff0000]">Menu</span></h1>
          </div>
          
          <MenuSection 
            title="Popular Foods"
            items={menuData.popularFoods}
            onFoodClick={handleFoodClick}
            onAddToCart={handleAddToCart}
          />
          <MenuSection 
            title="Burgers"
            items={menuData.burgers}
            onFoodClick={handleFoodClick}
            onAddToCart={handleAddToCart}
            />
          {/* CTA section */}
            {/* <CtaMenu1/>  */}
            <Banner6/>
          <MenuSection 
            title="Pizza"
            items={menuData.pizza}
            onFoodClick={handleFoodClick}
            onAddToCart={handleAddToCart}
          />
          {/* Banner */}
            <Banner8/>
          <MenuSection 
            title="Pasta"
            items={menuData.pasta}
            onFoodClick={handleFoodClick}
            onAddToCart={handleAddToCart}
            />
          {/* CTA section */}
            <CtaMenu1/>
          <MenuSection 
            title="Sandwiches"
            items={menuData.sandwich}
            onFoodClick={handleFoodClick}
            onAddToCart={handleAddToCart}
            />
          {/* Banner */}
            <Banner1/>
          <MenuSection 
            title="Cold Drinks"
            items={menuData.coldDrinks}
            onFoodClick={handleFoodClick}
            onAddToCart={handleAddToCart}
          />
            {/* Banner */}
            <Banner10/>
          <MenuSection 
            title="Combo Packs"
            items={menuData.comboPacks}
            onFoodClick={handleFoodClick}
            onAddToCart={handleAddToCart}
            />
          {/* CTA section */}
            <CtaMenu1/>
        </div>
      </div>
    </div>
    </>
  );
};

export default OurMenu;