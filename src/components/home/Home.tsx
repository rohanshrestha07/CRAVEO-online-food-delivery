import { Link } from "react-router-dom";
import About from "../about/About";
import Delivery from "../delivery/Delivery";
import FeedBack from "../feedback/FeedBack";
import FoodNews from "../foodnews/FoodNews";
import FoodGallery from "../gallery/FoodGallery";
import Menu from "../menulist/Menu";
import TodayMenu from "../menulist/TodayMenu";
import Ads2 from "../ads/Ads2";
import Ads3 from "../ads/Ads3";
import Banner6 from "../banner/Banner6";
import Contact from "../contact/Contact";
import CtaMenu1 from "../CTA/CtaMenu1";
import FloatingTestimonials from "../floating/FloatingTestimonials";
import { useState, useEffect } from "react";

const images = [
    {
        image: '/public/Chef_cooking.jpg'
    },
    {
        image: '/public/Slide1.jpg'
    },
    {
        image: '/public/Slide2.jpg'
    },
    {
        image: '/public/Slide3.webp'
    },
    {
        image: '/public/Slide4.jpg'
    },
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
    
        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
            <div className="relative min-h-screen w-full overflow-hidden">
                {/* video element */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src="/public/CraveoFinalTrailer.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* content element */}
                <div className="relative z-0 flex items-center justify-center bg-red-400 bg-opacity-60 min-h-screen">
                    <div className="container mx-auto px-4 flex flex-col items-center justify-center lg:flex-row lg:items-center lg:space-x-4 text-center lg:text-left text-white">
                        <div className="w-full lg:w-2/2 px-4">
                            <h1 className="text-7xl italic mb-2 font-extrabold">We Serve The Taste <span className="text-[#ff0000]">YOU LOVE</span></h1>
                            <p>Experience the joy of delicious, freshly prepared meals delivered straight to your door. With a wide variety of cuisines and fast, reliable service, your cravings are just a click away!</p>
                            <div className="my-6">
                                <Link to={"/orderFood"}>
                                    <button className="px-4 py-2 rounded-3xl text-white bg-[#ff0000] mr-4 font-medium"
                                    style={{
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = "0 0px 15px rgba(255, 0, 0, 0.5)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                    >Order Now</button>
                                </Link>
                                <Link to={"/restaurants"}>
                                    <button className="px-3 py-2 border border-white rounded-3xl font-medium"
                                    style={{
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = "0 0px 15px rgba(0, 0, 0, 0.5)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                    >Book a Table</button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative w-full h-[400px]">
                            {/* Image slider container */}
                            <div className="relative bg-white h-full w-full overflow-hidden">
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`absolute top-0 left-0 h-full w-full p-2 transition-transform duration-1000 ease-in-out`}
                                        style={{
                                            transform: `translateX(${(index - currentIndex) * 100}%)`,
                                        }}
                                    >
                                        <img
                                            className="h-full w-full object-cover"
                                            src={image.image}
                                            alt={`Slide ${index}`}
                                        />
                                    </div>
                                ))}
                            </div>                            
                            {/* Move FloatingTestimonials outside the slider */}
                            <div className="lg:block hidden">
                                <FloatingTestimonials />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TodayMenu/>
            <Delivery/>
            <div className="container mx-auto flex lg:flex-row flex-col gap-4 lg:h-[500px] h-[800px] rounded-2xl mb-16 px-4">
                <div className="flex lg:flex-col md:flex-row gap-4 lg:w-[800px] w-full lg:h-auto h-1/3">
                    <div className="bg-[url('/FoodsAd/Food6.jpg')] bg-cover bg-center lg:h-full h-[165px] w-full text-white rounded-2xl cursor-pointer" >
                        {/* <p>Explore our signature dishes, crafted with the freshest ingredients to delight your taste buds.</p> */}
                    </div>
                    <div className="bg-[url('/FoodsAd/Food18.jpg')] bg-cover bg-center lg:h-full h-[165px] w-full text-white rounded-2xl cursor-pointer">
                        {/* <p>Indulge in gourmet meals that bring the essence of fine dining to your home.</p> */}
                    </div>
                </div>
                <div className="bg-[url('/FoodsAd/Food12.jpg')] bg-cover bg-center h-full w-full text-white rounded-2xl cursor-pointer">
                    {/* <p>Your favorite comfort foods are just a few clicks away. Savor every bite!</p> */}
                </div>
                <div className="border-gray-200 border bg-[url('/FoodsAd/HomeMade.jpg')] bg-cover bg-center h-full lg:w-[800px] w-full text-white rounded-2xl cursor-pointer">
                    {/* <p>Homemade flavors, delivered with care and love, straight to your door.</p> */}
                </div>
            </div>
            <Menu/>
            <Banner6/>
            <About/>
            <Ads3/>
            <FeedBack/>
            <FoodNews/>
            <FoodGallery/>
            <Contact/>
            <div className="container mx-auto">
                <CtaMenu1/>
            </div>
        </>
    );
}
