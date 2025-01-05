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

// Menu data for all products
const menuData = [
  { img: burger1, title: 'Spicy Burger', description: 'Get 20% Discount on your First Order.', price: '$10.99' },
  { img: frenchfries, title: 'French Fry', description: 'Get 20% Discount on your First Order.', price: '$10.99' },
  { img: pasta, title: 'Pasta', description: 'Get 20% Discount on your First Order.', price: '$10.99' },
  { img: sandwich, title: 'Sandwich', description: 'Get 20% Discount on your First Order.', price: '$10.99' },
  { img: cocacola, title: 'Cold Drinks', description: 'Get 20% Discount on your First Order.', price: '$10.99' },
  { img: combo1, title: 'Combo 1', description: 'Get 20% Discount on your First Order.', price: '$10.99' },
  { img: combo2, title: 'Combo 2', description: 'Get 20% Discount on your First Order.', price: '$10.99' },
  { img: combo3, title: 'Combo 3', description: 'Get 20% Discount on your First Order.', price: '$10.99' },
];

export default function FoodDetails() {
  const { title } = useParams(); // Get the title from the URL
  const menuItem = menuData.find((item) => item.title === title); // Find the specific food item
  
  // Find related products (exclude the current item)
  const relatedProducts = menuData.filter((item) => item.title !== title);

  const [activeTab, setActiveTab] = useState('description'); // State to manage active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="food-details container mx-auto">
        <h2 className="text-center text-[40px] font-bold py-10">
          Food <span className="text-[#ff0000]">Details</span>
          <Breadcrumbs aria-label="breadcrumb" className='flex justify-center'>
            <Link to={"/"} color="inherit">
              Home
            </Link>
            <Link to={"/orderFood"}
              color="inherit"
            >
              Food
            </Link>
            <Typography sx={{ color: 'text.primary' }}>Food Details</Typography>
          </Breadcrumbs>
        </h2>

         {/* Dynamic Food Details Section */}
         {menuItem ? (
          <div className="food">
            <div className="grid grid-cols-2 gap-3 px-10 py-5 ">
              <div className="bg-gray-400 shadow-xl flex justify-center py-10 rounded-md">
                <img className="h-auto w-96" src={menuItem.img} alt={menuItem.title} />
              </div>
              <div className="bg-white shadow-xl p-2 flex flex-col gap-3">
                <h2 className="text-[35px] font-bold">{menuItem.title}</h2>
                <span className="text-[#ff0000] text-[20px] font-bold">{menuItem.price}</span>
                <p>{menuItem.description}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugit aliquam dolorum, laboriosam repellat quam sed illo nihil, dolorem animi minus dolor corporis rerum culpa?</p>
                <button className='w-full border border-[#515151] justify-center py-2 rounded-3xl font-semibold flex gap-2 hover:bg-[#000] hover:text-white transition-all'>
                  <LocalMallIcon />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Tab Navigation (Description and Reviews) */}
            <div className="tab-navigation my-10">
              <div className="flex justify-center gap-10 mb-10 text-xl font-semibold">
                <button
                  className={`px-0 py-2  ${activeTab === 'description' ? ' border-b-[#ff0000] border-b-2  text-[#ff0000]' : ''} `}
                  onClick={() => handleTabChange('description')}
                >
                  Description
                </button>
                <button
                  className={`px-0 py-2  ${activeTab === 'reviews' ? 'border-b-[#ff0000] border-b-2  text-[#ff0000]' : ''} `}
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
                className="border border-[#a2a2a2] rounded-2xl px-5 cursor-pointer hover:bg-gray-300 hover:-translate-y-2 transition-transform"
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
