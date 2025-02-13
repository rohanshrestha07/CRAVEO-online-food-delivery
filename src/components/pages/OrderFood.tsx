import { useState } from "react";
import burger1 from '/src/assets/burger1.png';
import frenchfries from '/src/assets/french-fries1.png';
import pasta from '/src/assets/pasta1.png';
import cocacola from '/src/assets/cocacola1.png';
import combo1 from '/src/assets/combo1.png';
import combo2 from '/src/assets/combo2.png';
import combo3 from '/src/assets/combo3.png';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';
import CtaMenu1 from "../CTA/CtaMenu1";
import { useCart } from "../cart/CartProvider";

export default function OrderFood() {
    const menuData = [
        {
            img: burger1,
            title: 'Spicy Burger',
            description: 'Get 20% Discount on your First Order.',
            price: '99.99',
            category: 'Burger',
        },
        {
            img: frenchfries,
            title: 'French Fries',
            description: 'Get 20% Discount on your First Order.',
            price: '99.99',
            category: 'FrenchFry',
        },
        {
            img: pasta,
            title: 'Pasta',
            description: 'Get 20% Discount on your First Order.',
            price: '99.99',
            category: 'Pasta',
        },
        {
            img: cocacola,
            title: 'Cold Drinks',
            description: 'Get 20% Discount on your First Order.',
            price: '99.99',
            category: 'Cold Drinks',
        },
        {
            img: combo1,
            title: 'Combo 1',
            description: 'Get 20% Discount on your First Order.',
            price: '99.99',
            category: 'Combo',
        },
        {
            img: combo2,
            title: 'Combo 2',
            description: 'Get 20% Discount on your First Order.',
            price: '99.99',
            category: 'Combo',
        },
        {
            img: combo3,
            title: 'Combo 3',
            description: 'Get 20% Discount on your First Order.',
            price: '99.99',
            category: 'Combo',
        },
        {
            img: "/src/assets/spicy-burger.jpg",
            title: 'Spicy Burger',
            description: 'A fiery delight with a juicy patty and fresh toppings.',
            price: '250',
            category: 'Burger',
          },
          {
            img: "/src/assets/burger-img2.jpg",
            title: 'Chicken Burger',
            description: 'Tender chicken patty paired with fresh lettuce and mayo.',
            price: '250',
            category: 'Burger',
          },
          {
            img: "/src/assets/veggie-burger.jpg",
            title: 'Veg Burger',
            description: 'A wholesome burger filled with fresh and healthy veggies.',
            price: '250',
            category: 'Burger',
          },
          {
            img: "/src/assets/burger41.png",
            title: 'Cheese Burger',
            description: 'A classic burger loaded with melted cheese and flavor.',
            price: '250',
            category: 'Burger',
          },
          {
            img: "/src/assets/burger-img1.jpg",
            title: 'Classic Burger',
            description: 'Enjoy the timeless taste of our Classic Burger.',
            price: '250',
            category: 'Burger',
          },
          {
            img: "/src/assets/margherita-pizza.jpg",
            title: 'Margherita Pizza',
            description: 'A simple yet flavorful pizza with tomatoes and mozzarella.',
            price: '400',
            category: 'Pizza',
          },
          {
            img: "/src/assets/pepperoni-pizza.jpeg",
            title: 'Pepperoni Pizza',
            description: 'A classic pizza topped with generous pepperoni slices.',
            price: '450',
            category: 'Pizza',
          },
          {
            img: "/src/assets/bbq-chicken-pizza.jpg",
            title: 'BBQ Chicken Pizza',
            description: 'Savory BBQ sauce and tender chicken on a cheesy crust.',
            price: '650',
            category: 'Pizza',
          },
          {
            img: "/src/assets/veggie-pizza.webp",
            title: 'Veggie Pizza',
            description: 'A fresh and colorful mix of vegetables on a crisp crust.',
            price: '350',
            category: 'Pizza',
          },
          {
            img: "/src/assets/hawaiian-pizza.jpg",
            title: 'Hawaiian Pizza',
            description: 'A tropical treat with pineapple and ham.',
            price: '450',
            category: 'Pizza',
          },
        {
            img: frenchfries,
            title: 'French Fries',
            description: 'Get 20% Discount on your First Order.',
            price: '99.99',
            category: 'FrenchFry',
        },
        {
            img: pasta,
            title: 'Pasta',
            description: 'Get 20% Discount on your First Order.',
            price: '99.99',
            category: 'Pasta',
        },
        {
            img: "/src/assets/chicken-wings.jpg",
            title: 'Chicken Wings',
            description: 'Crispy and flavorful wings with a spicy kick.',
            price: '350',
            category: 'Chicken',
          },
          {
            img: "/src/assets/chicken-leg.jpg",
            title: 'Chicken Leg Piece',
            description: 'Juicy and tender chicken leg pieces.',
            price: '450',
            category: 'Chicken',
          },
          {
            img: "/src/assets/chicken-nuggets.webp",
            title: 'Chicken Nuggets',
            description: 'Golden and crispy chicken nuggets, perfect for snacking.',
            price: '550',
            category: 'Chicken',
          },
          {
            img: "/src/assets/chicken-tender.jpg",
            title: 'Chicken Tenders',
            description: 'Soft and crispy chicken tenders for a delightful meal.',
            price: '550',
            category: 'Chicken',
          },
          {
            img: "/src/assets/grilled-bbq-chicken.jpg",
            title: 'Grilled Chicken',
            description: 'Perfectly grilled chicken with a smoky flavor.',
            price: '650',
            category: 'Chicken',
          },
          {
            img: "/src/assets/crispy-fried-chicken.jpg",
            title: 'Crispy Fried Chicken',
            description: 'Crunchy and flavorful fried chicken.',
            price: '450',
            category: 'Chicken',
          },
          {
            img: "/src/assets/tandoori-chicken.jpg",
            title: 'Tandoori Chicken',
            description: 'Indian-style spiced and roasted chicken.',
            price: '599',
            category: 'Chicken',
          },
          {
            img: "/src/assets/chicken-chilli.jpg",
            title: 'Chicken Chilli',
            description: 'Spicy and flavorful stir-fried chicken.',
            price: '270',
            category: 'Chicken',
          },
          {
            img: "/src/assets/chicken-sekuwa.jpg",
            title: 'Chicken Sekuwa',
            description: 'Nepalese-style marinated and grilled chicken skewers.',
            price: '300',
            category: 'Chicken',
          },
          {
            img: "/src/assets/pork-sekuwa.jpeg",
            title: 'Pork Sekuwa',
            description: 'Delicious grilled pork skewers with traditional spices.',
            price: '400',
            category: 'Chicken',
          },
          {
            img: "/src/assets/grilled-whole-chicken.jpg",
            title: 'Grilled Chicken',
            description: 'A whole chicken grilled to perfection.',
            price: '1200',
            category: 'Chicken',
          },
          {
            img: "/src/assets/grilled-chicken-sandwich.jpg",
            title: 'Grilled Sandwich',
            description: 'A toasty sandwich filled with grilled chicken and cheese.',
            price: '300',
            category: 'Sandwich',
          },
          {
            img: "/src/assets/sandwich1.png",
            title: 'Club Sandwich',
            description: 'A classic club sandwich layered with fresh ingredients.',
            price: '220',
            category: 'Sandwich',
          },
          {
            img: "/src/assets/veggie-sandwich.jpg",
            title: 'Veggie Sandwich',
            description: 'A healthy and delicious veggie-packed sandwich.',
            price: '120',
            category: 'Sandwich',
          },
          {
            img: "/src/assets/egg-sandwich.jpg",
            title: 'Egg Sandwich',
            description: 'A simple yet satisfying sandwich with eggs.',
            price: '150',
            category: 'Sandwich',
          },
          {
            img: "/src/assets/tuna-sandwich.jpg",
            title: 'Tuna Sandwich',
            description: 'Freshly made tuna sandwich with a creamy twist.',
            price: '250',
            category: 'Sandwich',
          },
          {
            img: "/src/assets/seafood-platter.jpg",
            title: 'Seafood Platter',
            description: 'A delightful assortment of fresh seafood, including shrimp, calamari, and fish fillets.',
            price: '1399',
            category: 'Platter',
          },
          {
            img: "/src/assets/veggie-platter.png",
            title: 'Veggie Platter',
            description: 'A colorful medley of grilled and fresh vegetables, perfect for a healthy treat.',
            price: '999',
            category: 'Platter',
          },
          {
            img: "/src/assets/meat-platter1.jpg",
            title: 'Meat Platter',
            description: 'A hearty selection of premium meats, including chicken, beef, and lamb.',
            price: '1299',
            category: 'Platter',
          },
          {
            img: "/src/assets/cheese-platter.jpg",
            title: 'Cheese Platter',
            description: 'A gourmet variety of fine cheeses, paired with crackers and fresh fruits.',
            price: '1099',
            category: 'Platter',
          },
          {
            img: "/src/assets/dessert-platter1.jpg",
            title: 'Dessert Platter',
            description: 'An indulgent assortment of sweet treats, including cakes, pastries, and chocolates.',
            price: '1199',
            category: 'Platter',
          },
          {
            img: "/src/assets/cocacola1.png",
            title: 'Coca Cola',
            description: 'The timeless and refreshing Coca Cola.',
            price: '250',
            category: 'Drinks',
          },
          {
            img: "/src/assets/virgin-mojito.jpg",
            title: 'Virgin Mojito',
            description: 'A refreshing drink with mint and lime.',
            price: '150',
            category: 'Drinks',
          },
          {
            img: "/src/assets/Red-label.jpg",
            title: 'Red Label',
            description: 'A strong and classic tea for your refreshment.',
            price: '1000',
            category: 'Drinks',
          },
          {
            img: "/src/assets/pepsi.jpg",
            title: 'Pepsi',
            description: 'Cool and crisp Pepsi to quench your thirst.',
            price: '120',
            category: 'Drinks',
          },
          {
            img: "/src/assets/Red-Bull-Energy-Drink.jpeg",
            title: 'Red Bull',
            description: 'An energy drink to keep you going.',
            price: '120',
            category: 'Drinks',
          },
        {
            img: frenchfries,
            title: 'French Fry',
            description: 'Get 20% Discount on your First Order.',
            price: '99.99',
            category: 'FrenchFry',
        },
        {
            img: pasta,
            title: 'Pasta',
            description: 'Get 20% Discount on your First Order.',
            price: '99.99',
            category: 'Pasta',
        },
    ];
    const { addToCart } = useCart();
    const handleAddToCart = (e, menu) => {
        e.preventDefault(); // Prevent navigation when clicking add to cart
        addToCart(menu);
    };
    
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
                    <div className="space-x-2 mt-5 mb-10 ">
                        <input
                            type="search"
                            placeholder="Search here"
                            className="py-2 px-4 rounded-full border border-black outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
                        />
                        <button className="bg-[#ff0000] px-4 py-2 rounded-full text-white">Search</button>
                    </div>
                    <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 h-auto mx-4 gap-4 ">
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
                            onClick={() => setSelectedCategory("Drinks")}
                        >
                            <img src="/src/assets/cocacola1.png" alt="cocacola" className="h-20 w-fit" />
                            <span>Drinks</span>
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
                                    <img src={menu.img} alt={menu.title} className="rounded-lg w-full h-44 object-cover mx-auto mb-2 " />
                                    <p className="text-[24px] font-bold mb-2">{menu.title}</p>
                                    <p className="text-[#515151] mb-2">{menu.description}</p>
                                    <p className="text-[20px] font-bold text-[#ff0000] mb-2">Rs.{menu.price}</p>
                                    <button
                                        onClick={(e) => handleAddToCart(e, menu)}
                                        className='w-full border border-[#515151] lg:px-12 lg:py-2 md:px-16 md:py-2 px-16 py-2 rounded-3xl font-semibold flex gap-2 hover:bg-[#000] hover:text-white transition-all'>
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
