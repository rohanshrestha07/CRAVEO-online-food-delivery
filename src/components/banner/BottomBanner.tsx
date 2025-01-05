import { Link } from "react-router-dom";


export default function BottomBanner() {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <>
            <div className='border-b border-[#a2a2a2] py-2'>
                <div className="container mx-auto">
                    <div className='h-auto w-full'>
                        <div className='flex flex-wrap lg:justify-between justify-center text-[14px] '>
                            <div className='flex items-center font-medium'>
                                <p>&copy; Copyright {currentYear} FOODIE. All Rights Reserved.</p>
                            </div>
                            <div className='font-medium'>
                                <Link to={"/privacyPolicy"}>
                                    <a className="px-2 border-r border-black " href="#">Privacy Policy</a>
                                </Link>
                                <Link to={"/termsOfUse"}>
                                    <a className="pl-2" href="#">Terms of Use</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
