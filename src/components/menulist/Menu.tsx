import React, { useState } from "react";
import burger1 from '/src/assets/burger1.png';
import frenchfries from '/src/assets/french-fries1.png';
import pasta from '/src/assets/pasta1.png';
import sandwich from '/src/assets/sandwich1.png';
import cocacola from '/src/assets/cocacola1.png';
import combo1 from '/src/assets/combo1.png';
import combo2 from '/src/assets/combo2.png';
import combo3 from '/src/assets/combo3.png';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link, useNavigate } from 'react-router-dom';

export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState("All Food");
    const [visibleItems, setVisibleItems] = useState(8); // Initially show 8 items
    const [buttonText, setButtonText] = useState("View more Products");
    const navigate = useNavigate();

    const menuData = [
        {
            img: burger1,
            title: 'Spicy Burger',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Burger',
        },
        {
            img: frenchfries,
            title: 'French Fry',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'FrenchFry',
        },
        {
            img: pasta,
            title: 'Pasta',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Pasta',
        },
        {
            img: sandwich,
            title: 'Sandwich',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Sandwich',
        },
        {
            img: cocacola,
            title: 'Cold Drinks',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Cold Drinks',
        },
        {
            img: combo1,
            title: 'Combo 1',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Combo',
        },
        {
            img: combo2,
            title: 'Combo 2',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Combo',
        },
        {
            img: combo3,
            title: 'Combo 3',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Combo',
        },
        {
            img: burger1,
            title: 'Spicy Burger',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Burger',
        },
        {
            img: frenchfries,
            title: 'French Fry',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'FrenchFry',
        },
        {
            img: pasta,
            title: 'Pasta',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Pasta',
        },
        {
            img: sandwich,
            title: 'Sandwich',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Sandwich',
        },
        {
            img: cocacola,
            title: 'Cold Drinks',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Cold Drinks',
        },
        {
            img: combo1,
            title: 'Combo 1',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Combo',
        },
        {
            img: combo2,
            title: 'Combo 2',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Combo',
        },
        {
            img: combo3,
            title: 'Combo 3',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Combo',
        },
    ];

    const filteredMenuData = selectedCategory === "All Food" 
        ? menuData 
        : menuData.filter(item => item.category === selectedCategory);

    const handleViewAllClick = () => {
        if (visibleItems === 8) {
            setVisibleItems(12); // Show 4 more items
            setButtonText("Go to Menu");
        } else {
            navigate("/menu"); // Redirect to Menu page
        }
    };

    return (
        <div className="h-auto w-screen container mx-auto text-center mb-5">
            <h2 className="text-[50px] font-extrabold">Our Popular Tasty <span className="text-[#ff0000]">Foods</span></h2>
            <p className="mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, accusamus?</p>
            <div className="flex justify-center flex-wrap gap-5">
                <button
                    className={`px-3 py-1 rounded-3xl ${selectedCategory === "All Food" ? "bg-[#ff0000] text-white" : "border border-gray-500"}`}
                    onClick={() => setSelectedCategory("All Food")}
                >
                    All Food
                </button>
                <button
                    className={`px-3 py-1 rounded-3xl ${selectedCategory === "Burger" ? "bg-[#ff0000] text-white" : "border border-gray-500"}`}
                    onClick={() => setSelectedCategory("Burger")}
                >
                    Burger
                </button>
                <button
                    className={`px-3 py-1 rounded-3xl ${selectedCategory === "Pizza" ? "bg-[#ff0000] text-white" : "border border-gray-500"}`}
                    onClick={() => setSelectedCategory("Pizza")}
                >
                    Pizza
                </button>
                <button
                    className={`px-3 py-1 rounded-3xl ${selectedCategory === "Sandwich" ? "bg-[#ff0000] text-white" : "border border-gray-500"}`}
                    onClick={() => setSelectedCategory("Sandwich")}
                >
                    Sandwich
                </button>
                <button
                    className={`px-3 py-1 rounded-3xl ${selectedCategory === "Cold Drinks" ? "bg-[#ff0000] text-white" : "border border-gray-500"}`}
                    onClick={() => setSelectedCategory("Cold Drinks")}
                >
                    Cold Drinks
                </button>
                <button
                    className={`px-3 py-1 rounded-3xl ${selectedCategory === "Pasta" ? "bg-[#ff0000] text-white" : "border border-gray-500"}`}
                    onClick={() => setSelectedCategory("Pasta")}
                >
                    Pasta
                </button>
                <button
                    className={`px-3 py-1 rounded-3xl ${selectedCategory === "Combo" ? "bg-[#ff0000] text-white" : "border border-gray-500"}`}
                    onClick={() => setSelectedCategory("Combo")}
                >
                    Combo
                </button>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 py-10 px-16">
                {filteredMenuData.slice(0, visibleItems).map((menu, index) => (
                    <Link to={`/foodDetails/${menu.title}`} key={index}>
                        <div
                            className="border border-[#a2a2a2] rounded-2xl px-5 cursor-pointer hover:bg-red-100 hover:-translate-y-2 transition-transform"
                            style={{ boxShadow: 'none' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.4)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <img src={menu.img} alt={menu.title} className="w-44 h-44 object-cover mx-auto " />
                            <p className="text-[24px] font-bold mb-3">{menu.title}</p>
                            <p className="text-[#515151] mb-3">{menu.description}</p>
                            <p className="text-[20px] font-bold text-[#ff0000] mb-3">{menu.price}</p>
                            <button className='w-full mb-5 border border-[#515151] lg:px-12 lg:py-2 md:px-16 md:py-2 px-16 py-2 rounded-3xl font-semibold flex gap-2 hover:bg-[#000] hover:text-white transition-all'>
                                <LocalMallIcon />
                                Add to Cart
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
            <button 
                onClick={handleViewAllClick}
                className="px-4 py-2 rounded-3xl border shadow-xl bg-[#ff0000] font-semibold text-white hover:shadow-xl active:translate-y-0.5 transition-transform hover:border hover:border-[#ff0000] hover:bg-white hover:text-red-600 hover:transition-all hover:duration-300"
            >
                {buttonText}
            </button>
        </div>
    );
}
