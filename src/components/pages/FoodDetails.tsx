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
  { img: burger1, title: 'Spicy Burger', category:"Burger", rating: 5, reviewCount: 125, tags:["Hot","Fast Food","Trend"], offer: 'Get 20% Discount on your First Order.', description:"Hello Food Lover We have vary Delicious and Healthy Foods. Enjoy Your Best Choice. Thank you !", price: '$10.99' },
  { img: frenchfries, title: 'French Fry',category:"French Fries", rating: 4, reviewCount: 125, tags:["Hot","Fast Food","Trend"], offer: 'Get 20% Discount on your First Order.',description:"Hello Food Lover We have vary Delicious and Healthy Foods. Enjoy Your Best Choice. Thank you !", price: '$10.99' },
  { img: pasta, title: 'Pasta',category:"Pasta", rating: 4, reviewCount: 125, tags:["Hot","Fast Food","Trend"], offer: 'Get 20% Discount on your First Order.',description:"Hello Food Lover We have vary Delicious and Healthy Foods. Enjoy Your Best Choice. Thank you !", price: '$10.99' },
  { img: sandwich, title: 'Sandwich',category:"Sandwich", rating: 4, reviewCount: 125, tags:["Hot","Fast Food","Trend"], offer: 'Get 20% Discount on your First Order.',description:"Hello Food Lover We have vary Delicious and Healthy Foods. Enjoy Your Best Choice. Thank you !", price: '$10.99' },
  { img: cocacola, title: 'Cold Drinks',category:"Cocacola", rating: 4, reviewCount: 125, tags:["Hot","Fast Food","Trend"], offer: 'Get 20% Discount on your First Order.',description:"Hello Food Lover We have vary Delicious and Healthy Foods. Enjoy Your Best Choice. Thank you !", price: '$10.99' },
  { img: combo1, title: 'Combo 1',category:"Combo", rating: 5, reviewCount: 125, tags:["Hot","Fast Food","Trend"], offer: 'Get 20% Discount on your First Order.',description:"Hello Food Lover We have vary Delicious and Healthy Foods. Enjoy Your Best Choice. Thank you !", price: '$10.99' },
  { img: combo2, title: 'Combo 2',category:"Combo", rating: 5, reviewCount: 125, tags:["Hot","Fast Food","Trend"], offer: 'Get 20% Discount on your First Order.',description:"Hello Food Lover We have vary Delicious and Healthy Foods. Enjoy Your Best Choice. Thank you !", price: '$10.99' },
  { img: combo3, title: 'Combo 3',category:"Combo", rating: 5, reviewCount: 125, tags:["Hot","Fast Food","Trend"], offer: 'Get 20% Discount on your First Order.',description:"Hello Food Lover We have vary Delicious and Healthy Foods. Enjoy Your Best Choice. Thank you !", price: '$10.99' },
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
      <div className="food-details container mx-auto bg-white px-4">
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
              <div className="bg-gray-400 shadow-xl flex justify-center py-10 rounded-md">
                <img className="h-auto w-96" src={menuItem.img} alt={menuItem.title} />
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
                <p className='font-medium'>{menuItem.offer}</p>
                <p className='font-medium mb-2'>{menuItem.description}</p>
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
                <p className='font-medium'>Category: {menuItem.category}</p>
                <p className='font-medium space-x-2'>
                  Tags:
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
                    <h3 className="text-[30px] font-bold">Product Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus explicabo quod aliquam excepturi fuga, sint numquam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, adipisci!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!</p>
                  </div>
                ) : (
                  <div className="reviews-content">
                    <h3 className="text-[30px] font-bold">Customer Reviews</h3>
                    <div className="review mt-3">
                      <p><strong>John Doe:</strong> Amazing food, great taste! Would highly recommend it to anyone!</p>
                      <p><strong>Jane Smith:</strong> The burger was really spicy, but that’s what I love! Awesome!</p>
                      <p><strong>Sam Wilson:</strong> Delivery was fast, and the food arrived hot and fresh!</p>
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
                <p className="text-[#515151] mb-3">{product.offer}</p>
                <p className="text-[20px] font-bold text-[#ff0000] mb-3">{product.price}</p>
                <button className='w-full mb-5 border border-[#515151] px-12 py-2 rounded-3xl font-semibold flex gap-2 hover:bg-[#000] hover:text-white transition-all'>
                  <LocalMallIcon />
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}
