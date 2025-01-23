import { useState } from "react";
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function TodayMenu() {
    const [startIndex, setStartIndex] = useState(0);

    const menuData = [
    {
        img: "/src/assets/burger1.png",
        title: 'Spicy Burger',
        description: 'Get 20% Discount on your First Order.',
        category: 'Burger',
    },
    {
        img: "/src/assets/french-fries1.png",
        title: 'French Fry',
        description: 'Get 20% Discount on your First Order.',
        category: 'FrenchFry',
    },
    {
        img: "/src/assets/pasta1.png",
        title: 'Pasta',
        description: 'Get 20% Discount on your First Order.',
        category: 'Pasta',
    },
    {
        img: "/src/assets/sandwich1.png",
        title: 'Sandwich',
        description: 'Get 20% Discount on your First Order.',
        category: 'Sandwich',
    },
    {
        img: "/src/assets/cocacola1.png",
        title: 'Cold Drinks',
        description: 'Get 20% Discount on your First Order.',
        category: 'Cold Drinks',
    },
    {
        img: "/src/assets/combo1.png",
        title: 'Combo 1',
        description: 'Get 20% Discount on your First Order.',
        category: 'Combo',
    },
    {
        img: "/src/assets/combo2.png",
        title: 'Combo 2',
        description: 'Get 20% Discount on your First Order.',
        category: 'Combo',
    },
    {
        img: "/src/assets/combo3.png",
        title: 'Combo 3',
        description: 'Get 20% Discount on your First Order.',
        category: 'Combo',
    },
    {
        img: "/src/assets/combo1.png",
        title: 'Combo 1',
        description: 'Get 20% Discount on your First Order.',
        category: 'Combo',
    },
];

    const handleNext = () => {
        if (startIndex + 5 < menuData.length) {
            setStartIndex(prevIndex => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
        setStartIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleFoodClick = (title) => {
        console.log(`Clicked on ${title}`); // Replace with your desired click handling
    };

    return (
        <>
        <div className="bg-[url('/public/wrapper_bg.jpg')] bg-cover bg-center ">
            <div className="bg-[#ff0000] bg-opacity-95 relative flex lg:flex-row justify-center flex-col gap-2 py-8 pl-20 mb-4">
                <div className="flex flex-col justify-center text-center min-w-60">
                    <p className="text-[#c8c8c8]">Our menu</p>
                    <h2 className="text-2xl font-semibold mb-10 text-white">Today's Special</h2>
                    <div className="flex justify-center gap-4">
                        {/* Previous button */}
                        <button 
                            onClick={handlePrev}
                            className={`p-2 rounded-full bg-white text-black transform -translate-y-1/2 top-1/2 ${
                                startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'
                            }`}
                            disabled={startIndex === 0}
                            >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        {/* Next button */}
                        <button 
                            onClick={handleNext}
                            className={`p-2 rounded-full bg-white text-black transform -translate-y-1/2 top-1/2 ${
                                startIndex + 4 >= menuData.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'
                            }`}
                            disabled={startIndex + 4 >= menuData.length}
                            >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                
                {/* Items container */}
                <div className="flex space-x-4 overflow-hidden pl-4 py-4 pr-28">
                    {menuData.slice(startIndex, startIndex + 6).map((menu, index) => (
                        <div
                            key={index}
                            onClick={() => handleFoodClick(menu.title)}
                            className="flex-shrink-0 w-48 bg-white text-center rounded-full py-8 px-4 shadow-lg cursor-pointer"
                        >
                            <img 
                                src={menu.img} 
                                alt={menu.title} 
                                className="w-36 h-36 object-cover mx-auto mb-2 rounded-lg"
                            />
                            <h3 className="text-lg font-semibold mb-2">{menu.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{menu.description}</p>
                        </div>
                    ))}
                </div>
                
                {/* Navigation dots */}
                {/* <div className="absolute bottom-4 flex justify-center space-x-2 mt-6">
                    {Array.from({ length: Math.ceil((menuData.length - 4) / 1) }).map((_, idx) => (
                        <button
                        key={idx}
                        className={`w-2 h-2 rounded-full ${
                            idx === startIndex ? 'bg-red-600' : 'bg-gray-300'
                            }`}
                            onClick={() => setStartIndex(idx)}
                            />
                            ))}
                            </div> */}

                {/* for bg image */}
                {/* bg-[url('/public/wrapper_bg.jpg')] bg-cover bg-center */}
            </div>
        </div>
    </>
    );
};
