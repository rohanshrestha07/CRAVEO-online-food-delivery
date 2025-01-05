

export default function FoodGallery() {
    return (
        <>
            <div className="container mx-auto py-8 mb-8">
                <h2 className="text-center text-[45px] font-extrabold mb-8">Food <span className="text-[#ff0000]">Gallery</span></h2>
                <div className="flex overflow-x-auto space-x-2">
                    <img className="w-64 h-auto flex-shrink-0" src="src/assets/burger-img1.jpg" alt="" />
                    <img className="w-64 h-auto flex-shrink-0" src="src/assets/pizza-img1.jpg" alt="" />
                    <img className="w-64 h-auto flex-shrink-0" src="src/assets/burger-img2.jpg" alt="" />
                    <img className="w-64 h-auto flex-shrink-0" src="src/assets/burger-img1.jpg" alt="" />
                    <img className="w-64 h-auto flex-shrink-0" src="src/assets/pizza-img1.jpg" alt="" />
                    <img className="w-64 h-auto flex-shrink-0" src="src/assets/burger-img2.jpg" alt="" />
                    <img className="w-64 h-auto flex-shrink-0" src="src/assets/burger-img1.jpg" alt="" />
                    <img className="w-64 h-auto flex-shrink-0" src="src/assets/pizza-img1.jpg" alt="" />
                    <img className="w-64 h-auto flex-shrink-0" src="src/assets/burger-img2.jpg" alt="" />
                </div>
            </div>
        </>
    )
}
