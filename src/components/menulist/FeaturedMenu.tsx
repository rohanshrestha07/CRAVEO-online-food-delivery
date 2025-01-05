export default function FeaturedMenu() {
    return (
        <>
            <div className="bg-gray-400 container mx-auto w-full px-5 py-3">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center font-semibold px-2">
                    <div className="hover:-translate-y-2 transition-transform px-4">
                        <img className="h-24 w-full object-contain" src="src/assets/burger1.png" alt="Burger" />
                        <p>Burger</p>
                    </div>
                    <div className="hover:-translate-y-2 transition-transform px-4">
                        <img className="h-24 w-full object-contain" src="src/assets/french-fries1.png" alt="French Fries" />
                        <p>French Fries</p>
                    </div>
                    <div className="hover:-translate-y-2 transition-transform px-4">
                        <img className="h-24 w-full object-contain" src="src/assets/pasta1.png" alt="Pasta" />
                        <p>Pasta</p>
                    </div>
                    <div className="hover:-translate-y-2 transition-transform px-4">
                        <img className="h-24 w-full object-contain" src="src/assets/sandwich1.png" alt="Sandwich" />
                        <p>Sandwich</p>
                    </div>
                    <div className="hover:-translate-y-2 transition-transform px-4">
                        <img className="h-24 w-full object-contain" src="src/assets/cocacola1.png" alt="Cold Drink" />
                        <p>Cold Drink</p>
                    </div>
                    <div className="hover:-translate-y-2 transition-transform px-4">
                        <img className="h-24 w-full" src="src/assets/combo1.png" alt="Combo" />
                        <p>Combo</p>
                    </div>
                </div>
            </div>
        </>
    );
}
