import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

type LoginModalProps = {
    onClose: () => void;
};

const Login: React.FC<LoginModalProps> = ({ onClose }) => {
    const [isSignUpVisible, setIsSignUpVisible] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpVisible(true);
    };

    const handleSignInClick = () => {
        setIsSignUpVisible(false);
    };

    return (
        <>
            {/* Background Overlay */}
            <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={onClose}></div>

            {/* Login Modal */}
            <div className="fixed inset-0 flex items-center justify-center z-20">
                {/* Close Button - Moved outside the main container */}
                <div className="absolute top-24 right-60 text-white cursor-pointer text-2xl font-bold z-30" onClick={onClose}>
                    ✕
                </div>

                <div className="relative w-full max-w-4xl h-[500px] bg-white rounded-xl shadow-lg overflow-hidden flex">
                    {/* Sign In Form */}
                    <div className={`w-1/2 h-full bg-white flex flex-col justify-center items-center px-10 transition-all duration-700 ${isSignUpVisible ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                        <h1 className="text-3xl font-bold mb-6">Sign In</h1>
                        <div className="flex space-x-3 mb-6">
                            <a href="#" className="flex items-center justify-center" style={{width: "40px", height: "40px"}}>
                                <FontAwesomeIcon style={{borderColor:"gray", border: "1px solid black", borderRadius: "50%", width: "24px", height: "24px", padding:"5px"}} icon={faGoogle} />
                            </a>
                            <a href="#" className="flex items-center justify-center" style={{width: "40px", height: "40px"}}>
                                <FontAwesomeIcon style={{borderColor:"gray", border: "1px solid black", borderRadius: "50%", width: "24px", height: "24px", padding:"5px"}} icon={faFacebookF} />
                            </a>
                            <a href="#" className="flex items-center justify-center" style={{width: "40px", height: "40px"}}>
                                <FontAwesomeIcon style={{borderColor:"gray", border: "1px solid black", borderRadius: "50%", width: "24px", height: "24px", padding:"5px"}} icon={faGithub} />
                            </a>
                            <a href="#" className="flex items-center justify-center" style={{width: "40px", height: "40px"}}>
                                <FontAwesomeIcon style={{borderColor:"gray", border: "1px solid black", borderRadius: "50%", width: "24px", height: "24px", padding:"5px"}} icon={faLinkedinIn} />
                            </a>
                        </div>

                        <span className="text-sm mb-4">or use your email to sign in</span>
                        <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded-lg bg-gray-200" />
                        <input type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded-lg bg-gray-200" />
                        <a href="#" className="text-sm text-[#ff0000] mb-4">Forgot Your Password?</a>
                        <button className="bg-[#ff0000] text-white py-2 px-6 rounded-full">Sign In</button>
                    </div>

                    {/* Sign Up Form */}
                    <div className={`w-1/2 h-full bg-white flex flex-col justify-center items-center px-10 transition-all duration-700 ${isSignUpVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                        <h1 className="text-3xl font-bold mb-6">Create Account</h1>
                        <div className="flex space-x-3 mb-6">
                            <a href="#" className="flex items-center justify-center" style={{width: "40px", height: "40px"}}>
                                <FontAwesomeIcon style={{borderColor:"gray", border: "1px solid black", borderRadius: "50%", width: "24px", height: "24px", padding:"5px"}} icon={faGoogle} />
                            </a>
                            <a href="#" className="flex items-center justify-center" style={{width: "40px", height: "40px"}}>
                                <FontAwesomeIcon style={{borderColor:"gray", border: "1px solid black", borderRadius: "50%", width: "24px", height: "24px", padding:"5px"}} icon={faFacebookF} />
                            </a>
                            <a href="#" className="flex items-center justify-center" style={{width: "40px", height: "40px"}}>
                                <FontAwesomeIcon style={{borderColor:"gray", border: "1px solid black", borderRadius: "50%", width: "24px", height: "24px", padding:"5px"}} icon={faGithub} />
                            </a>
                            <a href="#" className="flex items-center justify-center" style={{width: "40px", height: "40px"}}>
                                <FontAwesomeIcon style={{borderColor:"gray", border: "1px solid black", borderRadius: "50%", width: "24px", height: "24px", padding:"5px"}} icon={faLinkedinIn} />
                            </a>
                        </div>
                        <span className="text-sm mb-4">or use your email for registration</span>
                        <input type="text" placeholder="Name" className="w-full p-3 mb-4 border rounded-lg bg-gray-200" />
                        <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded-lg bg-gray-200" />
                        <input type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded-lg bg-gray-200" />
                        <button className="bg-[#ff0000] text-white py-2 px-6 rounded-full">Sign Up</button>
                    </div>

                    {/* Overlapping Div */}
                    <div
                        className={`absolute right-0 top-0 w-1/2 h-full bg-[#ff0000] flex flex-col items-center justify-center transition-transform duration-700 ${isSignUpVisible ? "-translate-x-full" : "translate-x-0"}`}
                        style={{ zIndex: 1 }}
                    >
                        <h1 className="text-3xl font-bold mb-6 text-white">
                            {isSignUpVisible ? "Welcome Back!" : "Hello, Friend!"}
                        </h1>
                        <p className="mb-4 text-white">
                            {isSignUpVisible ? "Sign in to continue your journey!" : "Don't have an account? Sign up and join us."}
                        </p>
                        <button
                            className="bg-transparent text-white border-white border-2 py-2 px-6 rounded-full"
                            onClick={isSignUpVisible ? handleSignInClick : handleSignUpClick}
                        >
                            {isSignUpVisible ? "Sign In" : "Sign Up"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
