import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            <div className="h-auto w-full max-w-7xl mx-auto mb-12 flex flex-col gap-8">
                {/* Cards Section */}
                <div className="grid md:grid-cols-1 lg:grid-cols-3 text-white px-4">
                    <div className="bg-[#ff0000] flex items-center cursor-pointer overflow-hidden md:justify-between sm:justify-between py-2 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                        <div className="detail ml-5">
                            <p className="text-[35px] font-semibold mb-3">Pasta</p>
                            <p className="mb-3">Get 20% Discount On First Order</p>
                            <p className="text-[20px] font-semibold">$10.99</p>
                        </div>
                        <img className="h-64 w-64 object-cover" src="/assets/pasta1.png" alt="Pasta" />
                    </div>
                    <div className="bg-[#242323] flex items-center cursor-pointer overflow-hidden md:justify-between sm:justify-between py-2 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                        <div className="detail ml-5">
                            <p className="text-[35px] font-semibold mb-3">Burger</p>
                            <p className="mb-3">Get 20% Discount On First Order</p>
                            <p className="text-[20px] font-semibold">$10.99</p>
                        </div>
                        <img className="h-56 w-64 object-cover" src="/assets/burger5.png" alt="Burger" />
                    </div>
                    <div className="bg-[#d7bf39] flex items-center cursor-pointer overflow-hidden md:justify-between sm:justify-between py-2 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                        <div className="detail ml-5">
                            <p className="text-[35px] font-semibold mb-3">Combo</p>
                            <p className="mb-3">Get 20% Discount On First Order</p>
                            <p className="text-[20px] font-semibold">$10.99</p>
                        </div>
                        <img className="h-64 w-64 object-cover" src="/assets/burger4.png" alt="Combo" />
                    </div>
                </div>
                {/* About Section */}
                <div className="grid lg:grid-cols-2 md:grid-cols-1">
                    <div className="lg:px-16 md:px-12 sm:px-8 px-6">
                        <img className="flex-shrink-0" src="/assets/combo1.png" alt="Combo 1" />
                    </div>
                    <div className="py-10 md:px-12 sm:px-8 px-4 lg:text-left md:text-center sm:text-center text-center">
                        <h2 className="text-5xl mb-4 font-bold">
                            About Tasty <span className="text-[#ff0000]">Foods</span>
                        </h2>
                        <p className="mb-4">
                            At Tasty Foods, we bring you delicious meals made with the freshest ingredients. Whether you’re looking for a quick snack or a wholesome meal, we’ve got something to satisfy every craving.
                        </p>
                        <p className="mb-4">
                            Enjoy our special discounts and discover a variety of dishes that will leave your taste buds wanting more. From classic recipes to innovative flavors, we’re here to make every meal a memorable one.
                        </p>
                        <ul className="my-5 font-bold lg:px-0 md:px-52 sm:px-40 px-16">
                            <li className="gap-3 flex mb-3">
                                <CheckCircleIcon style={{ color: "#ff0000" }} />
                                Delicious & Healthy Foods
                            </li>
                            <li className="gap-3 flex mb-3">
                                <CheckCircleIcon style={{ color: "#ff0000" }} />
                                Best Price & Offers
                            </li>
                            <li className="gap-3 flex mb-3">
                                <CheckCircleIcon style={{ color: "#ff0000" }} />
                                Made By Fresh Ingredients
                            </li>
                        </ul>
                        <div className="flex gap-5 font-medium lg:justify-start md:justify-center sm:justify-center justify-center">
                            <Link to={"/orderFood"}>
                            <button
                                className="px-3 py-1 bg-[#ffbf00] rounded-3xl"
                                style={{
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = "0 0px 15px rgba(244, 179, 21, 0.9)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                                >
                                Order Now
                            </button>
                            </Link>
                            <Link to={"/about"}>
                            <button
                                className="px-3 py-1 border border-black rounded-3xl"
                                style={{
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = "0 0px 15px rgba(0, 0, 0, 0.7)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                Read More
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
