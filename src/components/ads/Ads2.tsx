import { Link } from "react-router-dom";


export default function Ads2() {
    return (
        <>
            <div className="container bg-[url('/public/Food_bg.jpg')] bg-cover bg-center h-[400px] px-64 py-44 w-full text-white mx-auto mb-12 rounded-2xl">
                <h2 className="text-5xl font-extrabold italic mb-2">Delicious <span className="text-[#ff0000]">Food</span></h2>
                <p className="text-[#a2a2a2] mb-4">20% Cashback On Free Order</p>
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
        </>
    )
}
