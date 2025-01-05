
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-64 bg-red-600 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/public/Food_bg2.jpeg" 
            alt="Food background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90">We're here to serve you better</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 py-12 -mt-16 relative z-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-1">
            <div className="flex justify-center">
              <Phone className="w-12 h-12 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mt-4">Phone</h3>
            <p className="mt-2 text-gray-600">+1-555-157-5651</p>
            <p className="text-sm text-gray-500 mt-1">Customer Support</p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-1">
            <div className="flex justify-center">
              <Mail className="w-12 h-12 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mt-4">Email</h3>
            <p className="mt-2 text-gray-600">support@foodie.com</p>
            <p className="text-sm text-gray-500 mt-1">24/7 Online Support</p>
          </div>

          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-1">
            <div className="flex justify-center">
              <MapPin className="w-12 h-12 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mt-4">Address</h3>
            <p className="mt-2 text-gray-600">123 Food Street</p>
            <p className="text-sm text-gray-500 mt-1">New York, NY 10001</p>
          </div>

          {/* Working Hours */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-1">
            <div className="flex justify-center">
              <Clock className="w-12 h-12 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mt-4">Working Hours</h3>
            <p className="mt-2 text-gray-600">Mon-Fri: 8am - 11pm</p>
            <p className="text-sm text-gray-500 mt-1">Sat-Sun: 8am - 12pm</p>
          </div>
        </div>

        {/* Contact Form Section with Image */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
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
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="john@example.com"
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
                  className="w-full md:w-auto px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          {/* Image Section */}
          <div className="hidden lg:block relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/public/Restaurant_interior.webp" 
              alt="Restaurant interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Visit Our Restaurant</h3>
                <p className="text-white/90">Experience the best food and service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        {/* <div className="mt-16 bg-white rounded-lg shadow-lg p-4">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img 
              src="/api/placeholder/1200/400" 
              alt="Location map" 
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1586790206043!2d85.34202191101448!3d27.712386576080362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1970a9ff7041%3A0xfcaa45db29104458!2sTexas%20International%20College!5e0!3m2!1sen!2snp!4v1727062217264!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{
              border: "0",
              width: "100%",
              padding: "20px",
              borderRadius: "35px",
            }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;