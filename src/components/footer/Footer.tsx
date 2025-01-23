import BottomBanner from "../banner/BottomBanner";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


export default function Footer() {
    const listStyle="cursor-pointer hover:text-[#ff0000]";

    return (
        <>
            <div className=" bg-gray-400 md:px-24 px-8 py-10">
                <div className="container mx-auto w-full">
                    <div className="flex flex-wrap gap-8 items-center justify-between mb-10">
                        <h1 className="text-[40px] font-extrabold text-[#ff0000] border-r pr-16 mr-16 cursor-pointer">FOODIE</h1>
                        {/* <img className="h-16 w-28" src="public/yum.png" alt="" /> */}
                        <div className="flex flex-wrap gap-8 items-center">
                            <div className="">
                                <h3 className="text-[28px] font-bold ">Subscription News</h3>
                                <p className="text-[14px]">Subscribe to the weekly newslatter.</p>
                            </div>
                            <input className="px-6 py-3 outline-none lg:w-[500px] w-full rounded-full text-[16px]" type="email" placeholder="Enter Email Address" />
                            <button className="bg-black text-white rounded-full lg:px-6 md:px-6 px-4 py-3" >Subscribe</button>
                        </div>
                    </div>
                    <hr />
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
                        <div>
                            <p className="mb-3 text-[#3c3c3c]"> Welcome to Foodie, where great food meets great company! We’re here to bring you the tastiest experiences, whether dining in or taking away.</p>
                            <h3 className="text-[18px] font-bold">Book A Table</h3>
                            <p className="mb-3 text-[#ff0000] font-bold cursor-pointer">+1-555-157-5651</p>
                            <h3 className="text-[18px] font-bold">Opening Hours</h3>
                            <p className="text-[#ff0000] font-bold">08:00 AM - 12:00 PM</p>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold text-[18px]">Quick Links</h3>
                            <ul className="flex flex-col gap-1 text-[#3c3c3c]">
                                <li className={listStyle}>About Us</li>
                                <li className={listStyle}>Menu</li>
                                <li className={listStyle}>Testimonial</li>
                                <li className={listStyle}>Blog</li>
                                <li className={listStyle}>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold text-[18px]">Our Menu</h3>
                            <ul className="flex flex-col gap-1 text-[#3c3c3c]">
                                <li className={listStyle}>Burgers</li>
                                <li className={listStyle}>Desserts</li>
                                <li className={listStyle}>Pizza</li>
                                <li className={listStyle}>Pasta</li>
                                <li className={listStyle}>Cold Drinks</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold text-[18px]">Get In Touch</h3>
                            <ul className="flex flex-col gap-3 text-[#3c3c3c]">
                                <li className="cursor-pointer gap-3 flex hover:text-[#ff0000]">
                                    <LocationOnOutlinedIcon style={{borderRadius:"50%",color:"white",padding:"3px",background:"#ff0000"}}/> 
                                    Durga Mandir, Kapan-12, Kathmandu</li>
                                <li className="cursor-pointer gap-3 flex hover:text-[#ff0000] mb-2">
                                    <CallOutlinedIcon style={{borderRadius:"50%",color:"white",padding:"3px",background:"#ff0000"}}/>
                                    +1-555-157-5651</li>
                                <li className="cursor-pointer gap-3 flex hover:text-[#ff0000]">
                                    <EmailOutlinedIcon style={{borderRadius:"50%",color:"white",padding:"3px",background:"#ff0000"}}/> 
                                    foodienepal@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <BottomBanner/>
        </>
    )
}
