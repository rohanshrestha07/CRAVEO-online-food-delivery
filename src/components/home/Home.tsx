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

const images =[
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
]

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
            <div className="relative h-screen w-full overflow-hidden">
                {/* video element */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src="/public/FoodieFinalTrailer.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* content element */}
                <div className="relative z-0 flex flex-col items-center justify-center bg-red-400 bg-opacity-60 h-full">
                    <div className="relative container mx-auto px-4 flex items-center space-x-4 text-center text-white">
                        <div className="px-4">
                            <h1 className="text-7xl italic mb-2 font-extrabold">We Serve The Test <span className="text-[#ff0000]">YOU LOVE</span></h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ea numquam hic enim assumenda esse nobis corrupti perferendis ducimus nesciunt in possimus, autem laboriosam? Unde!</p>
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
                            <FloatingTestimonials />
                        </div>
                    </div>
                </div>
            </div>

            <TodayMenu/>
            <Delivery/>
            <div className="container mx-auto flex gap-4 h-[500px] rounded-2xl mb-16">
                <div className="flex flex-col gap-4 w-[800px]">
                    <div className="flex flex-col pl-10 pt-20 bg-[url('/Foods/Food6.jpg')] bg-cover bg-center h-full w-full text-white rounded-2xl cursor-pointer" >
                        
                        
                    </div>
                    <div className="flex flex-col justify-center items-center pt-28 bg-[url('/Foods/Food18.jpg')] bg-cover bg-center h-full w-full text-white rounded-2xl cursor-pointer">
                        
                        
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pt-28 bg-[url('/Foods/Food12.jpg')] bg-cover bg-center h-full w-full text-white rounded-2xl cursor-pointer">
                    
                </div>
                <div className="flex flex-col justify-center border-gray-200 border items-center pt-28 bg-[url('/Foods/HomeMade.jpg')] bg-cover bg-center h-full w-[800px] text-white rounded-2xl cursor-pointer">
                    
                </div>
            </div>
            <Menu/>
            {/* <Ads2/> */}
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
    )
}
