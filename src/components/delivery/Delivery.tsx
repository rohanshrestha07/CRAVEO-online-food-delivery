import { Link } from "react-router-dom";


export default function Delivery() {
    return (
        <>
        <div className="bg-white mb-8 py-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 container mx-auto items-center px-4">
                <div className=" py-8 leading-tight lg:text-left md:text-center sm:text-center text-center">
                    <h2 className="text-[45px] font-extrabold mb-4">Choose Your <span className="text-[#ff0000]">Favourite Food</span></h2>
                    <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, cumque minima a dignissimos saepe cum molestias repellendus ipsam culpa fuga.</p>
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
                    <img className="h-80 w-80 flex-shrink-0" src="src/assets/food-delivery1.png" alt="" />
                </div>
                <div className="py-8 leading-tight lg:text-right md:text-center sm:text-center text-center">
                    <h2 className="text-[45px] font-extrabold mb-4">Order Online and Get <span className="text-[#ff0000]"> Fast Delivery</span></h2>
                    <p className="mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus non, officiis earum modi mollitia.</p>
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
