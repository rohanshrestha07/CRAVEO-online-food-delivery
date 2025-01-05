// import Chilli2 from "../chilli/Chilli2";
// import Cucumber from "../chilli/Cucumber";
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


export default function Home() {
    return (
        <>
            <div className="container mx-auto w-full mb-5">
                <div className="grid lg:grid-cols-2 md:grid-cols-1">
                    <div className="lg:py-32 md:py-16 sm:py-8 py-4 px-6 lg:text-left md:text-center sm:text-center text-center">
                        <h1 className="text-[70px] font-extrabold mb-4 leading-tight">Welcome To <br /> Our Tasty <span className="text-[#ff0000]">Foods</span></h1>
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
                                <button className="px-3 py-2 border border-black rounded-3xl font-medium"
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
                    <div className=" object-cover">
                        <img className=" flex-shrink-0" src="/src/assets/burger1.png" alt="burger" />
                        {/* <img className="absolute rotate-45 bottom-16 right-[440px] h-44 w-44" src="src/assets/coriander2.png" alt="" /> */}
                        {/* <img className="absolute -z-10 -top-16 right-28 rotate-12 h-[500px] w-[1000px]" src="src/assets/tomato-juice-splash-1.png" alt="" /> */}
                    </div>
                    {/* <Cucumber/> */}
                </div>
            </div>
            {/* <img className="absolute -left-16 top-24 h-44 w-44" src="src/assets/onion1.png" alt="" />
            <Chilli2/> */}
            <TodayMenu/>
            <Delivery/>

            <Menu/>
            <Ads2/>
            <About/>
            <Ads3/>
            <FeedBack/>
            <FoodNews/>
            <FoodGallery/>
        </>
    )
}
