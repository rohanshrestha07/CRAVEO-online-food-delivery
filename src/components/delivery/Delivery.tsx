import { Link } from "react-router-dom";

export default function Delivery() {
    return (
        <>
        <div className="bg-white mb-4 py-8">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 container mx-auto items-center px-4">
                <div className=" py-8 leading-tight lg:text-left md:text-center sm:text-center text-center">
                    <h2 className="text-[45px] font-extrabold mb-4">Choose Your <span className="text-[#ff0000]">Favourite Food</span></h2>
                    <p className="mb-6">Discover a wide range of delicious meals carefully crafted to satisfy your cravings. From comfort food to gourmet dishes, we have it all!</p>
                    <Link to={"/orderFood"}>
                        <button className="text-sm font-semibold text-white px-4 py-3 rounded-full bg-[#ff0000] uppercase"
                        style={{
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 0px 15px rgba(255, 0, 0,0.5)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                        }}>Order Now →</button>
                    </Link>
                </div>
                <div className="px-10 flex md:justify-center sm:justify-center justify-center">
                    <img className="h-80 w-80 flex-shrink-0" src="src/assets/food-delivery1.png" alt="Food Delivery" />
                </div>
                <div className="py-8 leading-tight lg:text-right md:text-center sm:text-center text-center">
                    <h2 className="text-[45px] font-extrabold mb-4">Order Online and Get <span className="text-[#ff0000]"> Fast Delivery</span></h2>
                    <p className="mb-6">Enjoy our lightning-fast delivery service, ensuring your food reaches you fresh and hot every time. Satisfaction guaranteed!</p>
                    <Link to={"/blogs"}>
                        <button className="text-sm font-semibold text-white px-4 py-3 rounded-full bg-[#ff0000] uppercase"
                        style={{
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 0px 15px rgba(255, 0, 0,0.5)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                        }}>Learn More →</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
    )
}
