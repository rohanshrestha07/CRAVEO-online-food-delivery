

export default function Contact() {
    return (
        <>
        <div className='container mx-auto py-8 '>
            <h2 className='text-center text-5xl font-extrabold mb-8'>Need Help ? <span className='text-[#ff0000]'>Contact Us</span></h2>
            <div className='mt-0 grid grid-cols-1 lg:grid-cols-2 gap-4 px-4'>
                {/* contact form */}
                <div className="bg-gray-200 rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                    <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                            placeholder="Rohan Shrestha"
                        />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                            placeholder="rohan@example.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                        </label>
                        <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                        placeholder="How can we help?"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                        </label>
                        <textarea
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                        placeholder="Your message..."
                        />
                    </div>
                    <div>
                        <button
                        type="submit"
                        className="w-full md:w-auto px-6 py-3 bg-[#ff0000] text-white font-medium rounded-full hover:bg-opacity-80 transition-colors"
                        >
                        Send Message
                        </button>
                    </div>
                    </form>
                </div>
                {/* contact image */}
                <div className="hidden lg:block relative h-[525px] rounded-lg overflow-hidden shadow-lg">
                    <img 
                    src="/OrderNow.jpg" 
                    alt="Restaurant interior" 
                    className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
                            <p className="text-white/90">Experience the best food and service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
