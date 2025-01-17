import { Link } from "react-router-dom";


export default function Ads3() {
    return (
        <>
        <div className="container mx-auto grid grid-cols-2 gap-4 h-80 rounded-2xl mb-12">
            <div className="flex flex-col pl-10 pt-20 bg-[url('/public/Food_bg2.jpeg')] bg-cover bg-center h-full w-full text-white rounded-2xl">
                <h2 className="text-5xl font-extrabold italic mb-2">Special <span className="text-[#ff0000]">Offer</span></h2>
                <p className="text-[#a2a2a2] mb-4 capitalize">Uptp 50% Off on order of $30</p>
                <Link to={"/orderFood"}>
                    <button className="text-sm font-semibold text-white px-4 py-2 rounded-full bg-[#ff0000] uppercase"
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
            <div className="flex flex-col justify-center items-center pt-28 bg-[url('/public/Food_bg3.jpg')] bg-cover bg-center h-full w-full text-white rounded-2xl">
                <h2 className="text-5xl font-extrabold italic mb-2">Diet <span className="text-[#ff0000]">Food</span></h2>
                <p className="text-[#a2a2a2] mb-4">We offer various delicious Diet food </p>
                <Link to={"/blogs"}>
                    <button className="text-sm font-semibold text-white px-4 py-2 rounded-full bg-[#ff0000] uppercase"
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
        </>
    )
}
