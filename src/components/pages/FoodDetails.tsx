import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import burger1 from '/src/assets/burger1.png';
import frenchfries from '/src/assets/french-fries1.png';
import pasta from '/src/assets/pasta1.png';
import sandwich from '/src/assets/sandwich1.png';
import cocacola from '/src/assets/cocacola1.png';
import combo1 from '/src/assets/combo1.png';
import combo2 from '/src/assets/combo2.png';
import combo3 from '/src/assets/combo3.png';
import { Breadcrumbs, Typography } from '@mui/material';
import { Star } from 'lucide-react';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Menu data for all products
const menuData = [
  {
    img: burger1, 
    title: 'Spicy Burger',
    category: "Burger",
    price: "$10.99",
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
    price: "$10.99",
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
    img: pasta,
    title: 'Pasta',
    category: "Pasta",
    price: "$10.99",
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
    price: "$10.99",
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
    category: "Beverages",
    price: "$10.99",
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
    price: "$10.99",
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
    price: "$10.99",
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
    price: "$10.99",
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



export default function FoodDetails() {
  const { title } = useParams(); // Get the title from the URL
  const menuItem = menuData.find((item) => item.title === title); // Find the specific food item
  
  // render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  // Find related products (exclude the current item)
  const relatedProducts = menuData.filter((item) => item.title !== title);

  const [activeTab, setActiveTab] = useState('description'); // State to manage active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <div className="bg-[url('/public/wrapper_bg.jpg')] bg-fixed">
      <div className="bg-gray-100 bg-opacity-90 py-4">
      <div className="food-details container mx-auto bg-white rounded-lg px-4">
        <h2 className="text-center text-5xl font-extrabold py-10">
          Food <span className="text-[#ff0000]">Details</span>
          <Breadcrumbs aria-label="breadcrumb" className='flex justify-center'>
            <Link to={"/"} color="inherit">
              Home
            </Link>
            <Link to={"/orderFood"}
              color="inherit"
            >
              Order Food
            </Link>
            <Typography sx={{ color: 'text.primary' }}>Food Details</Typography>
          </Breadcrumbs>
        </h2>

        {/* Dynamic Food Details Section */}
        {menuItem ? (
          <div className="food">
            <div className="grid grid-cols-2 gap-3 px-10 py-4 ">
              <div className="bg-gray-300 h-[450px] shadow-xl flex justify-center rounded-md">
                <img className="h-auto object-cover" src={menuItem.img} alt={menuItem.title} />
              </div>
              <div className="px-4 py-2 flex flex-col gap-2">
                <h2 className="text-[35px] font-bold">{menuItem.title}</h2>
                  {/* stars */}
                  <div className="flex items-center gap-2">
                    {renderStars(Math.floor(menuItem.rating))}
                    <span className="text-sm text-gray-600">
                      {menuItem.rating} ({menuItem.reviewCount} reviews)
                    </span>
                  </div>
                <span className="text-[#ff0000] text-[20px] font-bold">{menuItem.price}</span>
                <p className='font-medium text-[#ff0000]'>{menuItem.offer}</p>
                <p className='mb-2'>{menuItem.description}</p>
                <div className='flex space-x-4 mb-2'>
                  <div className='flex '>
                    <button className='px-4 border border-gray-400 rounded-s-full text-xl'>-</button>
                    <p className='px-4 flex items-center border-t border-b border-gray-400 text-xl'>1</p>
                    <button className='px-4 border border-gray-400 rounded-e-full text-xl'>+</button>
                  </div>
                  <button className='bg-[#ff0000] text-white justify-center py-2 px-4 rounded-3xl font-semibold flex gap-2 hover:bg-opacity-90'>
                    <LocalMallIcon />
                    Add to Cart
                  </button>
                  <button className='text-gray-400 border border-gray-400 justify-center p-2 rounded-full '>
                    <FavoriteIcon />
                  </button>
                </div>
                <p className='font-medium'><strong>Category:</strong> {menuItem.category}</p>
                <p className='font-medium space-x-2'>
                  <strong>Tags:</strong>
                  {menuItem.tags.map(tag => (
                    <span key={tag} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            {/* Tab Navigation (Description and Reviews) */}
            <div className="tab-navigation my-10">
              <div className="flex justify-center gap-10 mb-10 text-xl font-semibold border-b border-gray-400">
                <button
                  className={`px-0 py-2  ${activeTab === 'description' ? ' border-b-[#ff0000] border-b-2  text-[#ff0000]' : 'text-gray-400'} `}
                  onClick={() => handleTabChange('description')}
                >
                  Description
                </button>
                <button
                  className={`px-0 py-2  ${activeTab === 'reviews' ? 'border-b-[#ff0000] border-b-2  text-[#ff0000]' : 'text-gray-400'} `}
                  onClick={() => handleTabChange('reviews')}
                >
                  Reviews
                </button>
              </div>

              {/* Tab Content (Description or Reviews based on activeTab) */}
              <div className="tab-content mt-5 px-10">
                {activeTab === 'description' ? (
                  <div className="description-content">
                    <h3 className="text-[30px] font-bold">Product <span className='text-[#ff0000]'>Description</span></h3>
                    <p>Ingredients:
                      For the Patty:

                      500g ground beef (80% lean, 20% fat)
                      1 tsp salt
                      1/2 tsp black pepper
                      1/2 tsp garlic powder
                      1/2 tsp onion powder
                      For Assembling:

                      4 burger buns (toasted)
                      4 slices of cheddar cheese
                      Lettuce leaves
                      1 tomato, sliced
                      1 red onion, sliced
                      4 pickle slices (optional)
                      4 tbsp mayonnaise
                      4 tbsp ketchup
                      2 tsp mustard
                      Instructions:
                      Prepare the Patty:

                      In a bowl, mix ground beef with salt, black pepper, garlic powder, and onion powder. Combine gently without overmixing.
                      Divide the mixture into 4 equal portions and shape them into patties slightly larger than the buns (they shrink when cooked).
                      Cook the Patty:

                      Heat a skillet or grill pan over medium-high heat and lightly grease it with oil.
                      Place the patties on the hot pan and cook for about 3-4 minutes on each side for medium doneness. Add cheese slices during the last minute of cooking to melt.
                      Toast the Buns:

                      While the patties are cooking, lightly butter the inside of the burger buns and toast them on a pan or grill until golden brown.
                      Assemble the Burger:

                      Spread mayonnaise on the bottom bun.
                      Add lettuce leaves, followed by the cooked patty with melted cheese.
                      Top with tomato slices, onion slices, and pickles (if using).
                      Spread ketchup and mustard on the top bun and place it over the stack.
                      Serve:

                      Secure the burger with a toothpick if needed.
                      Serve hot with french fries, coleslaw, or your favorite sides.</p>
                  </div>
                ) : (
                  <div className="reviews-content">
                    <h3 className="text-[30px] font-bold">Customer <span className='text-[#ff0000]'>Reviews</span></h3>
                    <div className="review mt-3 space-y-2">
                      <p className='border border-gray-200 p-2 hover:bg-gray-100 cursor-pointer'>{menuItem.reviews[0]}</p>
                      <p className='border border-gray-200 p-2 hover:bg-gray-100 cursor-pointer'>{menuItem.reviews[1]}</p>
                      <p className='border border-gray-200 p-2 hover:bg-gray-100 cursor-pointer'>{menuItem.reviews[2]}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p>Food item not found</p>
        )}


        {/* Related Products Section */}
        <div className="related-products py-10">
          <h2 className="text-[40px] text-center font-bold mb-5">
            Related <span className="text-[#ff0000]">Products</span>
          </h2>
          <div className="grid grid-cols-4 gap-5">
            {relatedProducts.slice(0,4).map((product, index) => (
              <Link to={`/foodDetails/${product.title}`} key={index}>
              <div
                key={index}
                className="border border-[#a2a2a2] rounded-2xl px-5 cursor-pointer hover:bg-gray-100 hover:-translate-y-2 transition-transform"
                style={{ boxShadow: 'none' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img src={product.img} alt={product.title} className="w-44 h-44 object-cover mx-auto " />
                <p className="text-[24px] font-bold mb-3">{product.title}</p>
                <p className="text-[#515151] mb-3">{product.description}</p>
                <p className="text-[20px] font-bold text-[#ff0000] mb-3">{product.price}</p>
                <button className='w-full mb-5 border border-[#515151] px-12 py-2 rounded-3xl font-semibold flex gap-2 hover:bg-[#000] hover:text-white transition-all'>
                  <LocalMallIcon />
                  Add to Cart
                </button>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}
