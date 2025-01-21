import React, { useState } from "react";
import burger1 from '/src/assets/burger1.png';
import pizza from '/src/assets/pizza.png'
import frenchfries from '/src/assets/french-fries1.png';
import pasta from '/src/assets/pasta1.png';
import sandwich from '/src/assets/sandwich1.png';
import cocacola from '/src/assets/cocacola1.png';
import combo1 from '/src/assets/combo1.png';
import combo2 from '/src/assets/combo2.png';
import combo3 from '/src/assets/combo3.png';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from "../cart/CartProvider";

export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState("All Food");
    const [visibleItems, setVisibleItems] = useState(8); // Initially show 8 items
    const [buttonText, setButtonText] = useState("View More Products");
    const navigate = useNavigate();
    const { addToCart } = useCart(); 

    const menuData = [
    {
        img: burger1,
        title: 'Spicy Burger',
        category: "Burger",
        price: "250",
        rating: 5,
        reviewCount: 125,
        tags: ["Hot", "Fast Food", "Trend"],
        offer: 'Get 20% Discount on your First Order.',
        foodIntroduction: "Try our juicy spicy burger with fresh vegetables and a secret sauce!",
        description: "Deliciously spicy and crafted for burger lovers.",
        recipe: "Our Spicy Burger includes grilled beef patty, lettuce, tomatoes, onions, and a spicy mayo.",
        reviews: [
            "The burger was super tasty! Loved the spicy kick.",
            "Perfectly cooked patty and fresh ingredients. Highly recommended!",
            "Best burger in town. Can't wait to order again!",
        ],
    },
    {
        img: frenchfries,
        title: 'French Fries',
        category: "French Fries",
        price: "170",
        rating: 4,
        reviewCount: 98,
        tags: ["Crispy", "Snack", "Golden"],
        offer: 'Buy 1 Get 1 Free.',
        foodIntroduction: "Golden, crispy, and perfectly salted French fries, a snack you can't resist.",
        description: "Crispy, golden fries perfect as a snack or side.",
        recipe: "Freshly cut potatoes fried to golden perfection, seasoned with salt and a dash of paprika.",
        reviews: [
            "Crispy and delicious! A perfect snack.",
            "Loved the seasoning and texture.",
            "Hands down the best fries I've had in a while.",
        ],
    },
    {
        img: pizza,
        title: 'Pepperoni Pizza',
        category: "Pizza",
        price: "450",
        rating: 4,
        reviewCount: 98,
        tags: ["Cheesy", "Spicy", "Classic"],
        offer: 'Buy 1 Get 1 Free.',
        foodIntroduction: "A classic favorite with a generous topping of spicy pepperoni and melted cheese.",
        description: "A flavorful pizza loaded with spicy pepperoni.",
        recipe: "Freshly made pizza dough topped with rich tomato sauce, melted mozzarella, and spicy pepperoni slices, baked to perfection.",
        reviews: [
            "The perfect balance of cheese and pepperoni!",
            "A classic pizza done right. Loved every bite.",
            "Crispy crust, delicious toppings, and just the right amount of spice.",
        ],
    },    
    {
        img: pasta,
        title: 'Pasta',
        category: "Pasta",
        price: "100",
        rating: 4.5,
        reviewCount: 140,
        tags: ["Creamy", "Italian", "Comfort Food"],
        offer: 'Enjoy Free Garlic Bread with Every Pasta Order.',
        foodIntroduction: "Indulge in our creamy pasta loaded with flavors and fresh ingredients.",
        description: "Authentic pasta with rich and creamy flavors.",
        recipe: "Our pasta is made with penne, creamy Alfredo sauce, fresh herbs, and Parmesan cheese.",
        reviews: [
            "The sauce was creamy and rich. Loved it!",
            "Perfect balance of flavors and great portion size.",
            "A must-try for pasta lovers.",
        ],
    },
    {
        img: sandwich,
        title: 'Sandwich',
        category: "Sandwich",
        price: "120",
        rating: 4,
        reviewCount: 85,
        tags: ["Healthy", "Quick Bite", "Customizable"],
        offer: 'Free Drink with Every Sandwich.',
        foodIntroduction: "Freshly prepared sandwich with wholesome ingredients and love.",
        description: "A wholesome sandwich to satisfy your cravings.",
        recipe: "Includes multigrain bread, grilled chicken, lettuce, tomatoes, and a tangy sauce.",
        reviews: [
            "Fresh and tasty. Perfect for a quick lunch.",
            "Loved the bread and the flavorful filling.",
            "A healthy and delicious choice.",
        ],
    },
    {
        img: cocacola,
        title: 'Cold Drinks',
        category: "Cold Drinks",
        price: "250",
        rating: 4.5,
        reviewCount: 200,
        tags: ["Chilled", "Refreshing", "Classic"],
        offer: 'Buy 2, Get 1 Free.',
        foodIntroduction: "Beat the heat with our chilled Coca-Cola.",
        description: "Chilled beverages to keep you refreshed.",
        recipe: "The classic taste you love, served ice-cold.",
        reviews: [
            "Always refreshing and a perfect drink with meals.",
            "Loved the ice-cold serving. Perfect thirst-quencher.",
            "A timeless classic!",
        ],
    },
    {
        img: combo1,
        title: 'Combo 1',
        category: "Combo",
        price: "999",
        rating: 5,
        reviewCount: 150,
        tags: ["Value Pack", "Family Meal", "Affordable"],
        offer: 'Save 25% on Combo Deals.',
        foodIntroduction: "A perfect meal combo for family or friends.",
        description: "Perfectly paired combo for a complete meal.",
        recipe: "Includes a spicy burger, fries, and a chilled drink.",
        reviews: [
            "Great value for money. Tasty and filling!",
            "Loved the combo, especially the fries.",
            "Perfect meal for a family evening.",
        ],
    },
    {
        img: combo2,
        title: 'Combo 2',
        category: "Combo",
        price: "999",
        rating: 4.5,
        reviewCount: 130,
        tags: ["Value Pack", "Quick Meal", "Popular"],
        offer: 'Free Dessert with This Combo.',
        foodIntroduction: "An all-time favorite combo meal at a great price.",
        description: "Another satisfying combo for all-day cravings.",
        recipe: "Includes a sandwich, French fries, and a cold drink.",
        reviews: [
            "Everything tasted amazing together!",
            "Loved the sandwich and the crispy fries.",
            "Definitely worth the price.",
        ],
    },
    {
        img: combo3,
        title: 'Combo 3',
        category: "Combo",
        price: "999",
        rating: 4.8,
        reviewCount: 145,
        tags: ["Premium", "Gourmet", "Luxury"],
        offer: 'Experience the Gourmet Combo at 20% Off.',
        foodIntroduction: "For those who love a premium dining experience.",
        description: "A delightful mix to brighten your day.",
        recipe: "Includes pasta, garlic bread, and a premium drink.",
        reviews: [
            "Loved the pasta and garlic bread pairing.",
            "A bit pricey, but totally worth it for the taste.",
            "The perfect combo for a gourmet meal.",
        ],
    },
    {
        img: burger1,
        title: 'Spicy Burger',
        category: "Burger",
        price: "250",
        rating: 5,
        reviewCount: 125,
        tags: ["Hot", "Fast Food", "Trend"],
        offer: 'Get 20% Discount on your First Order.',
        foodIntroduction: "Try our juicy spicy burger with fresh vegetables and a secret sauce!",
        description: "Deliciously spicy and crafted for burger lovers.",
        recipe: "Our Spicy Burger includes grilled beef patty, lettuce, tomatoes, onions, and a spicy mayo.",
        reviews: [
            "The burger was super tasty! Loved the spicy kick.",
            "Perfectly cooked patty and fresh ingredients. Highly recommended!",
            "Best burger in town. Can't wait to order again!",
        ],
    },
    {
        img: frenchfries,
        title: 'French Fries',
        category: "French Fries",
        price: "170",
        rating: 4,
        reviewCount: 98,
        tags: ["Crispy", "Snack", "Golden"],
        offer: 'Buy 1 Get 1 Free.',
        foodIntroduction: "Golden, crispy, and perfectly salted French fries, a snack you can't resist.",
        description: "Crispy, golden fries perfect as a snack or side.",
        recipe: "Freshly cut potatoes fried to golden perfection, seasoned with salt and a dash of paprika.",
        reviews: [
            "Crispy and delicious! A perfect snack.",
            "Loved the seasoning and texture.",
            "Hands down the best fries I've had in a while.",
        ],
    },
    {
        img: pizza,
        title: 'Pepperoni Pizza',
        category: "Pizza",
        price: "450",
        rating: 4,
        reviewCount: 98,
        tags: ["Cheesy", "Spicy", "Classic"],
        offer: 'Buy 1 Get 1 Free.',
        foodIntroduction: "A classic favorite with a generous topping of spicy pepperoni and melted cheese.",
        description: "A flavorful pizza loaded with spicy pepperoni.",
        recipe: "Freshly made pizza dough topped with rich tomato sauce, melted mozzarella, and spicy pepperoni slices, baked to perfection.",
        reviews: [
            "The perfect balance of cheese and pepperoni!",
            "A classic pizza done right. Loved every bite.",
            "Crispy crust, delicious toppings, and just the right amount of spice.",
        ],
    },    
    {
        img: pasta,
        title: 'Pasta',
        category: "Pasta",
        price: "100",
        rating: 4.5,
        reviewCount: 140,
        tags: ["Creamy", "Italian", "Comfort Food"],
        offer: 'Enjoy Free Garlic Bread with Every Pasta Order.',
        foodIntroduction: "Indulge in our creamy pasta loaded with flavors and fresh ingredients.",
        description: "Authentic pasta with rich and creamy flavors.",
        recipe: "Our pasta is made with penne, creamy Alfredo sauce, fresh herbs, and Parmesan cheese.",
        reviews: [
            "The sauce was creamy and rich. Loved it!",
            "Perfect balance of flavors and great portion size.",
            "A must-try for pasta lovers.",
        ],
    },
    {
        img: sandwich,
        title: 'Sandwich',
        category: "Sandwich",
        price: "120",
        rating: 4,
        reviewCount: 85,
        tags: ["Healthy", "Quick Bite", "Customizable"],
        offer: 'Free Drink with Every Sandwich.',
        foodIntroduction: "Freshly prepared sandwich with wholesome ingredients and love.",
        description: "A wholesome sandwich to satisfy your cravings.",
        recipe: "Includes multigrain bread, grilled chicken, lettuce, tomatoes, and a tangy sauce.",
        reviews: [
            "Fresh and tasty. Perfect for a quick lunch.",
            "Loved the bread and the flavorful filling.",
            "A healthy and delicious choice.",
        ],
    },
    {
        img: cocacola,
        title: 'Cold Drinks',
        category: "Cold Drinks",
        price: "250",
        rating: 4.5,
        reviewCount: 200,
        tags: ["Chilled", "Refreshing", "Classic"],
        offer: 'Buy 2, Get 1 Free.',
        foodIntroduction: "Beat the heat with our chilled Coca-Cola.",
        description: "Chilled beverages to keep you refreshed.",
        recipe: "The classic taste you love, served ice-cold.",
        reviews: [
            "Always refreshing and a perfect drink with meals.",
            "Loved the ice-cold serving. Perfect thirst-quencher.",
            "A timeless classic!",
        ],
    },
    {
        img: combo1,
        title: 'Combo 1',
        category: "Combo",
        price: "999",
        rating: 5,
        reviewCount: 150,
        tags: ["Value Pack", "Family Meal", "Affordable"],
        offer: 'Save 25% on Combo Deals.',
        foodIntroduction: "A perfect meal combo for family or friends.",
        description: "Perfectly paired combo for a complete meal.",
        recipe: "Includes a spicy burger, fries, and a chilled drink.",
        reviews: [
            "Great value for money. Tasty and filling!",
            "Loved the combo, especially the fries.",
            "Perfect meal for a family evening.",
        ],
    },
    {
        img: combo2,
        title: 'Combo 2',
        category: "Combo",
        price: "999",
        rating: 4.5,
        reviewCount: 130,
        tags: ["Value Pack", "Quick Meal", "Popular"],
        offer: 'Free Dessert with This Combo.',
        foodIntroduction: "An all-time favorite combo meal at a great price.",
        description: "Another satisfying combo for all-day cravings.",
        recipe: "Includes a sandwich, French fries, and a cold drink.",
        reviews: [
            "Everything tasted amazing together!",
            "Loved the sandwich and the crispy fries.",
            "Definitely worth the price.",
        ],
    },
    {
        img: combo3,
        title: 'Combo 3',
        category: "Combo",
        price: "999",
        rating: 4.8,
        reviewCount: 145,
        tags: ["Premium", "Gourmet", "Luxury"],
        offer: 'Experience the Gourmet Combo at 20% Off.',
        foodIntroduction: "For those who love a premium dining experience.",
        description: "A delightful mix to brighten your day.",
        recipe: "Includes pasta, garlic bread, and a premium drink.",
        reviews: [
            "Loved the pasta and garlic bread pairing.",
            "A bit pricey, but totally worth it for the taste.",
            "The perfect combo for a gourmet meal.",
        ],
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

    const handleAddToCart = (e, menu) => {
        e.preventDefault(); // Prevent navigation when clicking add to cart
        addToCart(menu);
    };

    return (
        <div className="h-auto w-screen container mx-auto text-center mb-12">
            <h2 className="text-[50px] font-extrabold">Our Popular Tasty <span className="text-[#ff0000]">Foods</span></h2>
            <p className="mb-8">Explore a variety of dishes made to delight your taste buds.</p>
            <div className="flex justify-center flex-wrap gap-5">
                {["All Food", "Burger", "Pizza", "Sandwich", "Cold Drinks", "Pasta", "Combo"].map((category) => (
                    <button
                        key={category}
                        className={`px-3 py-1 rounded-3xl ${selectedCategory === category ? "bg-[#ff0000] text-white" : "border border-gray-500"}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 py-10 px-16">
                {filteredMenuData.slice(0, visibleItems).map((menu, index) => (
                    <Link to={`/foodDetails/${menu.title}`} key={index}>
                        <div
                            className="border border-[#a2a2a2] rounded-2xl px-4 py-4 cursor-pointer hover:bg-gray-100 hover:-translate-y-1 transition-transform"
                            style={{ boxShadow: 'none' }}
                            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.4)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                        >
                            <img src={menu.img} alt={menu.title} className="w-44 h-44 object-cover mx-auto " />
                            <p className="text-[24px] font-bold mb-3">{menu.title}</p>
                            <p className="text-[#515151] mb-3">{menu.description}</p>
                            <p className="text-[20px] font-bold text-[#ff0000] mb-3">Rs. {menu.price}</p>
                            <button 
                                onClick={(e) => handleAddToCart(e, menu)}
                                className='w-full border border-[#515151] py-2 rounded-3xl font-semibold flex items-center justify-center gap-2 hover:bg-[#000] hover:text-white transition-all'
                            >
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
