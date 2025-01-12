
import { NavLink } from 'react-router-dom'

export default function CtaMenu1() {
    return (
        <div className="bg-[url('/public/Food_bg2.jpeg')] bg-cover bg-center rounded-lg">
            <div className="bg-red-600 py-16 my-8 rounded-lg bg-opacity-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Order?</h2>
                    <p className="text-white/90 mb-8 text-lg">
                        Experience our delicious food and exceptional service today.
                    </p>
                    <NavLink to="/orderFood">
                        <button className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                            Order Now
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
