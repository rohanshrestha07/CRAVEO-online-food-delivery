import CallIcon from '@mui/icons-material/Call';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import TopBanner from '../banner/TopBanner';
import { NavLink } from 'react-router-dom';
import { useCart } from '../cart/CartProvider';
import { CartSidebar } from '../cart/CartSideBar';

export default function NavBar() {
    const { getCartCount } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            // If the menu is being closed, ensure the Pages dropdown is also closed
            setMobilePagesOpen(false);
        }
    };
    const [isPagesOpen, setPagesOpen] = useState(false);
    const togglePages = () => {
        setPagesOpen(!isPagesOpen);
    }
    const [isMobilePagesOpen, setMobilePagesOpen] = useState(false);
    const toggleMobilePages = () => {
        setMobilePagesOpen(!isMobilePagesOpen);
    }


    return (
        <>
            <div className='sticky top-0 bg-white z-10 shadow-lg'>
                <TopBanner />
                <div className="container mx-auto h-auto w-full flex justify-between py-4 items-center px-4 sm:px-8 md:px-8 lg:px-0">
                    <div className='mr-32'>
                        <h1 className="font-extrabold text-4xl text-[red] cursor-pointer">FOODIE</h1>
                        {/* <img className='h-16 w-full' src="public/yum.png" alt="" /> */}
                    </div>
                    {/* Desktop Menu */}
                    <div className='menuList lg:flex hidden items-center'>
                        <ul className="flex flex-col md:flex-row items-center gap-10 mr-10 font-semibold">
                            <li className='cursor-pointer hover:text-[#ff0000]'><NavLink to="/" className={({ isActive }) => { return isActive ? "text-red-600 border-b-2 border-b-[#ff0000]" : ""; }}>Home</NavLink></li>
                            <li className='cursor-pointer hover:text-[#ff0000]'><NavLink to="/menu" className={({ isActive }) => { return isActive ? "text-red-600  border-b-2 border-b-[#ff0000]" : ""; }}>Menu</NavLink></li>
                            <li className='cursor-pointer hover:text-[#ff0000]'><NavLink to="/orderFood" className={({ isActive }) => { return isActive ? "text-red-600 border-b-2 border-b-[#ff0000]" : ""; }}>Order Food</NavLink></li>
                            <li className='cursor-pointer hover:text-[#ff0000] '><NavLink to="/restaurants" className={({ isActive }) => { return isActive ? "text-red-600 border-b-2 border-b-[#ff0000]" : ""; }}>Restaurants</NavLink></li>
                            <li className='cursor-pointer flex hover:text-[#ff0000]' onClick={togglePages} >
                                Pages
                                {/* dropdown icon */}
                                <div>
                                    {isPagesOpen ? (
                                        <KeyboardArrowUpIcon/>
                                    ) : (
                                        <KeyboardArrowDownIcon/>
                                    )}
                                </div>
                            </li>
                        </ul>
                        <div className='flex items-center mr-6'>
                            <CallIcon fontSize='large' style={{ cursor: 'pointer' }} />
                            <div className='cursor-pointer'>
                                <p className='text-[12px]'>Call us for Order</p>
                                <p className='text-[#e9b634] hover:text-[#ff0000] font-medium'>+977 1-433-1076</p>
                            </div>
                        </div>
                        <div 
                            className='relative mr-6 rounded-full border border-black p-2 cursor-pointer hover:text-white hover:bg-black'
                            onClick={() => setIsCartOpen(true)}
                        >
                            <LocalMallIcon style={{ cursor: 'pointer' }} />
                            {getCartCount() > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {getCartCount()}
                                </span>
                            )}
                        </div>
                        <NavLink to="/orderFood">
                            <button className='px-6 py-2 rounded-3xl bg-[#ff0000] text-lg text-white cursor-pointer hover:bg-[#f14a4a]'>Order Online</button>
                        </NavLink>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="menu-bar lg:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <CloseIcon fontSize="large" className="text-black" />
                        ) : (
                            <MenuIcon fontSize="large" className="text-black" />
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden block bg-white w-full">
                        <ul className="flex flex-col items-center gap-5 py-4 font-medium">
                            <li className='cursor-pointer hover:text-[#ff0000]'><NavLink to="/" className={({ isActive }) => { return isActive ? "text-red-600 border-b-2 border-b-[#ff0000]" : ""; }}>Home</NavLink></li>
                            <li className='cursor-pointer hover:text-[#ff0000]'><NavLink to="/menu" className={({ isActive }) => { return isActive ? "text-red-600 border-b-2 border-b-[#ff0000]" : ""; }}>Menu</NavLink></li>
                            <li className='cursor-pointer hover:text-[#ff0000]'><NavLink to="/orderFood" className={({ isActive }) => { return isActive ? "text-red-600 border-b-2 border-b-[#ff0000]" : ""; }}>Order Food</NavLink></li>
                            <li className='cursor-pointer hover:text-[#ff0000] '><NavLink to="/restaurants" className={({ isActive }) => { return isActive ? "text-red-600 border-b-2 border-b-[#ff0000]" : ""; }}>Restaurants</NavLink></li>
                            <li className='cursor-pointer flex hover:text-[#ff0000]' onClick={toggleMobilePages} >
                                Pages
                                {/* dropdown icon */}
                                <div>
                                    {isMobilePagesOpen ? (
                                        <KeyboardArrowUpIcon/>
                                    ) : (
                                        <KeyboardArrowDownIcon/>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
                {/* Pages dropdown */}
                <div
                    className={`fixed bg-white shadow-lg rounded-b-lg z-0 w-40 top-[100px] left-[60%] transform transition-all duration-500 ease-in-out -translate-x-1/2 ${
                        isPagesOpen ? "block" : "hidden"
                    }`}
                >
                    <ul className="flex flex-col items-center gap-5 py-4 font-medium">
                        <li className='cursor-pointer hover:text-[#ff0000]'><NavLink to="/blogs" className={({ isActive }) => { return isActive ? "text-red-600 border-b-2 border-b-[#ff0000]" : ""; }}>Blogs</NavLink></li>
                        <li className='cursor-pointer hover:text-[#ff0000]'><NavLink to="/reviews" className={({ isActive }) => { return isActive ? "text-red-600 border-b-2 border-b-[#ff0000]" : ""; }}>Reviews</NavLink></li>
                        <li className='cursor-pointer hover:text-[#ff0000]'><NavLink to="/news" className={({ isActive }) => { return isActive ? "text-red-600 border-b-2 border-b-[#ff0000]" : ""; }}>News</NavLink></li>
                        <li className='cursor-pointer hover:text-[#ff0000]'><NavLink to="/FAQs" className={({ isActive }) => { return isActive ? "text-red-600 border-b-2 border-b-[#ff0000]" : ""; }}>FAQs</NavLink></li>
                    </ul>
                </div>
                {/* Mobile Pages dropdown */}
                {isMobilePagesOpen &&(
                    <div className="lg:hidden block bg-gray-100 w-full">
                        <ul className="flex flex-col items-center gap-5 py-2 font-medium">
                            <li className='cursor-pointer hover:text-[#ff0000]'><NavLink to="/blogs" className={({ isActive }) => { return isActive ? "text-red-600 border-b-2 border-b-[#ff0000]" : ""; }}>Blogs</NavLink></li>
                            <li className='cursor-pointer hover:text-[#ff0000]'><NavLink to="/reviews" className={({ isActive }) => { return isActive ? "text-red-600 border-b-2 border-b-[#ff0000]" : ""; }}>Reviews</NavLink></li>
                            <li className='cursor-pointer hover:text-[#ff0000]'><NavLink to="/news" className={({ isActive }) => { return isActive ? "text-red-600 border-b-2 border-b-[#ff0000]" : ""; }}>News</NavLink></li>
                            <li className='cursor-pointer hover:text-[#ff0000]'><NavLink to="/FAQs" className={({ isActive }) => { return isActive ? "text-red-600 border-b-2 border-b-[#ff0000]" : ""; }}>FAQs</NavLink></li>
                        </ul>
                    </div>
                )}

                {/* Add CartSidebar component */}
                <CartSidebar 
                    isOpen={isCartOpen} 
                    onClose={() => setIsCartOpen(false)} 
                />
            </div>
        </>
    )
}
