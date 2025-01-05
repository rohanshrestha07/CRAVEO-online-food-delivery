

export default function FoodNews() {
    return (
        <>
            <div className=" container mx-auto px-16 py-10 roun">
                <div className="text-center mb-10">
                    <h2 className="text-[45px] font-extrabold">Our Latest Foods <span className="text-[#ff0000]">News</span></h2>
                    <p className="w-full lg:w-[60%] mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio perspiciatis amet eaque molestias saepe ipsam ad consequuntur iure error? Ducimus?</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-5">
                    <div className="rounded-2xl border border-[#a2a2a2] p-5 hover:-translate-y-3 transition-transform duration-300" 
                        style={{
                            boxShadow: 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "-5px 8px 8px 0px rgba(0, 0, 0, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                        }}>
                        <div className="object-cover mb-3">
                            <img src="src/assets/burger-img1.jpg" alt="" />
                        </div>
                        <h2 className="text-[25px] font-bold mb-3">Lorem ipsum dolor sit amet.</h2>
                        <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, distinctio?</p>
                        <a className="font-medium text-[#ff0000] underline" href="#">Read More</a>
                    </div>
                    <div className="rounded-2xl border border-[#a2a2a2] shadow-md p-5 hover:-translate-y-3 transition-transform duration-300"
                        style={{
                            boxShadow: 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "-5px 8px 8px 0px rgba(0, 0, 0, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                        }}>
                        <div className="object-cover mb-3">
                            <img src="src/assets/burger-img2.jpg" alt="" />
                        </div>
                        <h2 className="text-[25px] font-bold mb-3">Lorem ipsum dolor sit amet.</h2>
                        <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, distinctio?</p>
                        <a className="font-medium text-[#ff0000] underline" href="#">Read More</a>
                    </div>
                    <div className="rounded-2xl border border-[#a2a2a2] shadow-md p-5 hover:-translate-y-3 transition-transform duration-300"
                        style={{
                            boxShadow: 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "-5px 8px 8px 0px rgba(0, 0, 0, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                        }}>
                        <div className="object-cover mb-3">
                            <img src="src/assets/pizza-img1.jpg" alt="" />
                        </div>
                        <h2 className="text-[25px] font-bold mb-3">Lorem ipsum dolor sit amet.</h2>
                        <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, distinctio?</p>
                        <a className="font-medium text-[#ff0000] underline" href="#">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}
