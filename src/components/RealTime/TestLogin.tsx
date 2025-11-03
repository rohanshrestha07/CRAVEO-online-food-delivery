import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [isSignInVisible, setIsSignInVisible] = useState(false);
  
    const handleSignInClick = () => {
        setIsSignInVisible(true);
        setIsSignUpActive(false);
    };
  
    const handleSignUpClick = () => {
        setIsSignInVisible(false);
        setIsSignUpActive(true);
    };
  
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-300 to-blue-200">
            <div className="relative w-full max-w-4xl h-[500px] bg-white rounded-xl shadow-lg overflow-hidden">
  
                {/* Sign In Form */}
                <div className={`absolute inset-0 w-1/2 h-full bg-white flex flex-col justify-center items-center px-10 transition-transform duration-700 ease-in-out ${isSignUpActive ? "-translate-x-full" : "translate-x-0"}`}>
                    <h1 className="text-3xl font-bold mb-6">Sign In</h1>
                    <div className="flex space-x-3 mb-6">
                        <a href="#" className="p-2 border rounded-full"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="#" className="p-2 border rounded-full"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="p-2 border rounded-full"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#" className="p-2 border rounded-full"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span className="text-sm mb-4">or use your email to sign in</span>
                    <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded-lg bg-gray-200" />
                    <input type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded-lg bg-gray-200" />
                    <a href="#" className="text-sm text-purple-600 mb-4">Forgot Your Password?</a>
                    <button className="bg-purple-600 text-white py-2 px-6 rounded-full">Sign In</button>
                </div>
  
                {/* Sign Up Form */}
                <div className={`absolute inset-0 w-1/2 h-full bg-white flex flex-col justify-center items-center px-10 transition-transform duration-700 ease-in-out ${isSignUpActive ? "translate-x-0" : "translate-x-full"}`}>
                    <h1 className="text-3xl font-bold mb-6">Create Account</h1>
                    <div className="flex space-x-3 mb-6">
                        <a href="#" className="p-2 border rounded-full"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="#" className="p-2 border rounded-full"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="p-2 border rounded-full"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#" className="p-2 border rounded-full"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span className="text-sm mb-4">or use your email for registration</span>
                    <input type="text" placeholder="Name" className="w-full p-3 mb-4 border rounded-lg bg-gray-200" />
                    <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded-lg bg-gray-200" />
                    <input type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded-lg bg-gray-200" />
                    <button className="bg-purple-600 text-white py-2 px-6 rounded-full">Sign Up</button>
                </div>
  
                {/* Toggle Section */}
                <div className="absolute inset-0 w-1/2 h-full flex items-center justify-center px-10">
                    {/* Hello Friend - Sign Up toggle */}
                    <div className={`absolute inset-0 bg-purple-700 text-white flex items-center justify-center transition-transform duration-700 ease-in-out ${isSignUpActive && isSignInVisible ? "translate-x-0" : "-translate-x-full"}`}>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold mb-6">Hello, Friend!</h1>
                            <p className="mb-4">Don't have an account? Sign up and enjoy our features.</p>
                            <button className="bg-transparent border-white border py-2 px-6 rounded-full" onClick={handleSignUpClick}>
                                Sign Up
                            </button>
                        </div>
                    </div>

                    {/* Welcome Back - Sign In toggle */}
                    <div className={`absolute inset-0 bg-purple-700 text-white flex items-center justify-center transition-transform duration-700 ease-in-out ${isSignInVisible ? "translate-x-full" : "translate-x-0"}`}>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold mb-6">Welcome Back!</h1>
                            <p className="mb-4">Already have an account? Sign in to continue.</p>
                            <button className="bg-transparent border-white border py-2 px-6 rounded-full" onClick={handleSignInClick}>
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
