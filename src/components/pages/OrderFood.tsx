import { useState } from "react";
import burger1 from '/src/assets/burger1.png';
import frenchfries from '/src/assets/french-fries1.png';
import pasta from '/src/assets/pasta1.png';
import sandwich from '/src/assets/sandwich1.png';
import cocacola from '/src/assets/cocacola1.png';
import combo1 from '/src/assets/combo1.png';
import combo2 from '/src/assets/combo2.png';
import combo3 from '/src/assets/combo3.png';
import pizza from '/src/assets/pizza.png';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';
import CtaMenu1 from "../CTA/CtaMenu1";

export default function OrderFood() {
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
            img: pizza,
            title: 'pizza',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Pizza',
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
            img: pizza,
            title: 'pizza',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Pizza',
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
            img: pizza,
            title: 'pizza',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Pizza',
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
            img: pizza,
            title: 'pizza',
            description: 'Get 20% Discount on your First Order.',
            price: '$10.99',
            category: 'Pizza',
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
    const [selectedCategory, setSelectedCategory] = useState("All Food");
    const [visibleItems] = useState(menuData.length); // Initially show 8 items
    const [searchQuery, setSearchQuery] = useState(""); // Add a state for search

    // Filter items based on both category and search query
    const filteredMenuData = menuData.filter((item) => {
        const matchesCategory = selectedCategory === "All Food" || item.category === selectedCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-[url('/public/wrapper_bg.jpg')] bg-fixed ">
            <div className="bg-opacity-90 bg-gray-100">
                <div className="h-auto w-screen container mx-auto text-center py-10 ">
                    <h2 className="text-[50px] font-extrabold">Order Your <span className="text-[#ff0000]">Foods</span></h2>
                    <div className="space-x-2 mt-5 mb-10">
                        <input
                            type="search"
                            placeholder="Search here"
                            className="py-2 px-4 rounded-full border border-black outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
                        />
                        <button className="bg-[#ff0000] px-4 py-2 rounded-full text-white">Search</button>
                    </div>
                    <div className="grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 h-auto mx-4 gap-4 ">
                        <button
                            className={`rounded-xl flex flex-col items-center justify-center p-2 ${selectedCategory === "All Food" ? "bg-[#ff0000] text-white" : "bg-white border border-gray-500"}`}
                            onClick={() => setSelectedCategory("All Food")}
                        >
                            <img src="/src/assets/combo3.png" alt="combo" className="h-20 w-fit" />
                            <span>All Food</span>
                        </button>

                        <button
                            className={`rounded-xl flex flex-col items-center justify-center p-2 ${selectedCategory === "Burger" ? "bg-[#ff0000] text-white" : "bg-white border border-gray-500"}`}
                            onClick={() => setSelectedCategory("Burger")}
                        >
                            <img src="/src/assets/burger1.png" alt="burger" className="h-20 w-fit" />
                            <span>Burger</span>
                        </button>
                        <button
                            className={`rounded-xl flex flex-col items-center justify-center p-2 ${selectedCategory === "Pizza" ? "bg-[#ff0000] text-white" : "bg-white border border-gray-500"}`}
                            onClick={() => setSelectedCategory("Pizza")}
                        >

                            <img src="/src/assets/pizza.png" alt="Pizza" className="h-16 w-fit" />
                            <span>Pizza</span>
                        </button>
                        <button
                            className={`rounded-xl flex flex-col items-center justify-center p-2 ${selectedCategory === "Sandwich" ? "bg-[#ff0000] text-white" : "bg-white border border-gray-500"}`}
                            onClick={() => setSelectedCategory("Sandwich")}
                        >
                            <img src="/src/assets/sandwich1.png" alt="sandwich" className="h-20 w-fit" />
                            <span>Sanwich</span>
                        </button>
                        <button
                            className={`rounded-xl flex flex-col items-center justify-center p-2 ${selectedCategory === "Cold Drinks" ? "bg-[#ff0000] text-white" : "bg-white border border-gray-500"}`}
                            onClick={() => setSelectedCategory("Cold Drinks")}
                        >
                            <img src="/src/assets/cocacola1.png" alt="cocacola" className="h-20 w-fit" />
                            <span>Cocacola</span>
                        </button>
                        <button
                            className={`rounded-xl flex flex-col items-center justify-center p-2 ${selectedCategory === "Pasta" ? "bg-[#ff0000] text-white" : "bg-white border border-gray-500"}`}
                            onClick={() => setSelectedCategory("Pasta")}
                        >
                            <img src="/src/assets/pasta1.png" alt="Pasta" className="h-20 w-fit" />
                            <span>Pasta</span>
                        </button>
                        <button
                            className={`rounded-xl flex flex-col items-center justify-center p-2 ${selectedCategory === "Combo" ? "bg-[#ff0000] text-white" : "bg-white border border-gray-500"}`}
                            onClick={() => setSelectedCategory("Combo")}
                        >
                            <img src="/src/assets/combo2.png" alt="combo" className="h-20 w-fit" />
                            <span>Combo</span>
                        </button>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 py-10 px-16">
                        {filteredMenuData.slice(0, visibleItems).map((menu, index) => (
                            <Link to={`/foodDetails/${menu.title}`} key={index}>
                                <div
                                    className="bg-white border border-[#a2a2a2] rounded-2xl p-4 cursor-pointer hover:bg-gray-100 hover:-translate-y-2 transition-transform"
                                    style={{ boxShadow: 'none' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.4)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                    >
                                    <img src={menu.img} alt={menu.title} className="w-44 h-44 object-cover mx-auto " />
                                    <p className="text-[24px] font-bold mb-2">{menu.title}</p>
                                    <p className="text-[#515151] mb-2">{menu.description}</p>
                                    <p className="text-[20px] font-bold text-[#ff0000] mb-2">{menu.price}</p>
                                    <button className='w-full border border-[#515151] lg:px-12 lg:py-2 md:px-16 md:py-2 px-16 py-2 rounded-3xl font-semibold flex gap-2 hover:bg-[#000] hover:text-white transition-all'>
                                        <LocalMallIcon />
                                        Add to Cart
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* CTA section */}
                    <CtaMenu1/>
                </div>
            </div>
        </div>
    );
}
