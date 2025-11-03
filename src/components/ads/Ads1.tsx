

export default function Ads1() {
    return (
        <>
        <div className="container mx-auto grid grid-cols-3 gap-4 h-[600px] rounded-2xl mb-16">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col pl-10 pt-20 bg-gray-300 h-full w-full text-white rounded-2xl" >
                    {/* Text element added here */}
                    <p className="text-xl font-semibold">Delicious Food</p>
                </div>
                <div className="flex flex-col justify-center items-center pt-28 bg-gray-300 h-full w-full text-white rounded-2xl">
                    {/* Text element added here */}
                    <p className="text-xl font-semibold">Fresh and Healthy</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center pt-28 bg-gray-300 h-full w-full text-white rounded-2xl">
                {/* Text element added here */}
                <p className="text-xl font-semibold">Home Made Special</p>
            </div>
            <div className="flex flex-col justify-center items-center pt-28 bg-gray-300 h-full w-full text-white rounded-2xl">
                {/* Text element added here */}
                <p className="text-xl font-semibold">Tasty Meals</p>
            </div>
        </div>
        </>
    )
}
