// TopBanner.js
import { useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Login from '../pages/Login';
import { Link } from 'react-router-dom';

export default function TopBanner() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const toggleLogin = () => {
        setIsLoginOpen(!isLoginOpen);
    };

    return (
        <>
            {/* Top Banner */}
            <div className="h-auto border-b border-[#a2a2a2] lg:py-0 md:py-0 sm:py-0 py-2 px-12 md:px-32">
                <div className="container mx-auto w-full">
                    <div className="flex flex-wrap items-center py-1 lg:justify-between justify-center text-[14px]">
                        <div className="flex gap-1 items-center">
                            <AccessTimeIcon style={{ fontSize: '18px' }} />
                            <p>Mon-Fri:8am - 11pm,Sat-Sun:8am - 12pm</p>
                        </div>
                        <div className="font-medium">
                            <Link to={"/about"} className='px-2 border-r border-black'>
                                About Us
                            </Link>
                            <Link to={"/contact"} className='px-2 border-r border-black'>
                                Contact Us
                            </Link>
                            <span className="px-2 cursor-pointer" onClick={toggleLogin}>
                                Login/Register
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Login Modal */}
            {isLoginOpen && <Login onClose={toggleLogin} />}
        </>
    );
}
