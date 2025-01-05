import StarIcon from '@mui/icons-material/Star';

export default function FeedBack() {
    return (
        <>
            <div className=" container mx-auto bg-gray-400 px-16 py-10 my-10">
                <div className="text-center mb-8 flex-col flex">
                    <h2 className="text-[45px] font-extrabold">Our Customer <span className="text-[#ff0000]">Feedbacks</span></h2>
                    <p className="w-full lg:w-[60%] mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio perspiciatis amet eaque molestias saepe ipsam ad consequuntur iure error? Ducimus?</p>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5">
                    <div className="bg-[#fff] rounded-2xl p-8 relative overflow-hidden shadow-xl cursor-pointer ">
                        <div className='mb-2'>
                            <StarIcon style={{color:"yellow"}}/>
                            <StarIcon style={{color:"yellow"}}/>
                            <StarIcon style={{color:"yellow"}}/>
                            <StarIcon style={{color:"yellow"}}/>
                            <StarIcon style={{color:"gray"}}/>
                        </div>
                        <p className="mb-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vitae iure laudantium nemo totam magnam aperiam mollitia tempore magni illo. Ducimus molestias minima enim error iusto et deserunt distinctio a?</p>
                        <div className="grid grid-cols-2  overflow-x-clip ">
                            <div>
                                <h3 className="text-[20px] font-semibold">Name</h3>
                                <p className="text-[#a7a7a7]">Kapan, Kathmandu</p>
                            </div>
                            <img className="h-44 w-44 absolute -right-16 -bottom-4 "  src="src/assets/burger1.png" alt="" />
                        </div>
                    </div>
                    <div className="bg-[#fff] rounded-2xl p-8 relative overflow-hidden shadow-xl cursor-pointer ">
                        <div className='mb-2'>
                            <StarIcon style={{color:"yellow"}}/>
                            <StarIcon style={{color:"yellow"}}/>
                            <StarIcon style={{color:"yellow"}}/>
                            <StarIcon style={{color:"yellow"}}/>
                            <StarIcon style={{color:"gray"}}/>
                        </div>
                        <p className="mb-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vitae iure laudantium nemo totam magnam aperiam mollitia tempore magni illo. Ducimus molestias minima enim error iusto et deserunt distinctio a?</p>
                        <div className="grid grid-cols-2 overflow-x-clip ">
                            <div>
                                <h3 className="text-[20px] font-semibold">Name</h3>
                                <p className="text-[#a7a7a7]">Kapan, Kathmandu</p>
                            </div>
                            <img className="h-44 w-44 absolute -right-16 -bottom-6"  src="src/assets/combo3.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
