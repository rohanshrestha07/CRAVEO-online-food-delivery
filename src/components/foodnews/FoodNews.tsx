export default function FoodNews() {
    return (
        <>
            <div className="container mx-auto px-16 py-10">
                <div className="text-center mb-10">
                    <h2 className="text-[45px] font-extrabold">
                        Our Latest Foods <span className="text-[#ff0000]">News</span>
                    </h2>
                    <p className="w-full lg:w-[60%] mx-auto">
                        Stay updated with the latest trends, recipes, and offers in the world of delicious food. From gourmet burgers to delightful pizzas, we bring you all the tasty news!
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-5">
                    <div
                        className="rounded-2xl border border-[#a2a2a2] p-5 hover:-translate-y-3 transition-transform duration-300"
                        style={{
                            boxShadow: 'none',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow =
                                '-5px 8px 8px 0px rgba(0, 0, 0, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div className="object-cover mb-3">
                            <img src="src/assets/burger-img1.jpg" alt="Gourmet Burger" />
                        </div>
                        <h2 className="text-[25px] font-bold mb-3">
                            The Art of Crafting a Perfect Burger
                        </h2>
                        <p className="mb-3">
                            Discover how we make our burgers stand out with the freshest
                            ingredients, unique flavors, and that perfect char-grilled taste.
                        </p>
                        <a className="font-medium text-[#ff0000] underline" href="#">
                            Read More
                        </a>
                    </div>
                    <div
                        className="rounded-2xl border border-[#a2a2a2] shadow-md p-5 hover:-translate-y-3 transition-transform duration-300"
                        style={{
                            boxShadow: 'none',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow =
                                '-5px 8px 8px 0px rgba(0, 0, 0, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div className="object-cover mb-3">
                            <img src="src/assets/burger-img2.jpg" alt="Burger Lovers" />
                        </div>
                        <h2 className="text-[25px] font-bold mb-3">
                            Why Burgers Are Everyone’s Favorite
                        </h2>
                        <p className="mb-3">
                            Uncover the secret to why our burgers have become a must-try for food
                            lovers all around the city.
                        </p>
                        <a className="font-medium text-[#ff0000] underline" href="#">
                            Read More
                        </a>
                    </div>
                    <div
                        className="rounded-2xl border border-[#a2a2a2] shadow-md p-5 hover:-translate-y-3 transition-transform duration-300"
                        style={{
                            boxShadow: 'none',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow =
                                '-5px 8px 8px 0px rgba(0, 0, 0, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div className="object-cover mb-3">
                            <img src="src/assets/pizza-img1.jpg" alt="Delicious Pizza" />
                        </div>
                        <h2 className="text-[25px] font-bold mb-3">
                            From Oven to Table: Pizza Perfection
                        </h2>
                        <p className="mb-3">
                            Dive into the world of handcrafted pizzas, baked to perfection and
                            topped with love.
                        </p>
                        <a className="font-medium text-[#ff0000] underline" href="#">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
